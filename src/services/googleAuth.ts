// Custom lightweight OAuth 2.0 Implicit Flow for Google Sheets Integration
// Completely detached from Firebase Auth SDK for standard web hosting (Rumah Web, etc.)

let cachedAccessToken: string | null = localStorage.getItem('google_access_token');

export const googleSignIn = async (): Promise<{ user: { email: string; displayName: string }; accessToken: string } | null> => {
  // Let the user specify Google Client ID if not saved
  let clientId = localStorage.getItem('erp_google_client_id');
  if (!clientId) {
    const input = prompt(
      'Silakan masukkan Google OAuth Client ID Anda untuk Google Sheets:\n' +
      '(Dapatkan Client ID dari Google Cloud Console -> Credentials)'
    );
    if (input) {
      clientId = input.trim();
      localStorage.setItem('erp_google_client_id', clientId);
    } else {
      throw new Error('Google Client ID diperlukan untuk sinkronisasi Google Sheets.');
    }
  }

  const scopes = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file'
  ].join(' ');

  const redirectUri = window.location.origin + '/oauth2callback.html';
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&response_type=token&scope=${encodeURIComponent(scopes)}&prompt=consent`;

  // Open the pop-up window
  const popup = window.open(authUrl, 'GoogleAuthPopup', 'width=550,height=650');
  if (!popup) {
    throw new Error('Popup login terblokir oleh browser Anda. Harap aktifkan izin pop-up dan coba lagi.');
  }

  return new Promise((resolve, reject) => {
    // 1. Listen for message from callback window (Secure postMessage)
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.data && event.data.type === 'oauth_response') {
        const hash = event.data.hash;
        const params = new URLSearchParams(hash.substring(1));
        const accessToken = params.get('access_token');

        if (accessToken) {
          cachedAccessToken = accessToken;
          localStorage.setItem('google_access_token', accessToken);
          window.removeEventListener('message', handleMessage);
          clearInterval(checkPopup);
          if (popup && !popup.closed) popup.close();
          resolve({
            user: { email: 'user@google-sheets', displayName: 'Google Sheets User' },
            accessToken
          });
        }
      }
    };

    window.addEventListener('message', handleMessage);

    // 2. Poll the popup to handle manual cancellation
    const checkPopup = setInterval(() => {
      if (!popup || popup.closed) {
        clearInterval(checkPopup);
        window.removeEventListener('message', handleMessage);
        reject(new Error('Proses login Google Sheets dibatalkan oleh pengguna (Popup ditutup).'));
      }
    }, 1000);
  });
};

export const getAccessToken = (): string | null => {
  return cachedAccessToken || localStorage.getItem('google_access_token');
};

export const logoutGoogle = async () => {
  cachedAccessToken = null;
  localStorage.removeItem('google_access_token');
};
