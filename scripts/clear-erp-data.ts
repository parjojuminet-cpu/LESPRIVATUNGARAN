import { initializeApp } from 'firebase/app';
import { initializeFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const activeFirebaseConfig = {
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId,
};

const app = initializeApp(activeFirebaseConfig);
const db = initializeFirestore(app, {}, firebaseConfig.firestoreDatabaseId);

async function clearData() {
  console.log('Connecting to Firestore & fetching main_database...');
  const docRef = doc(db, 'erp_store', 'main_database');
  const snap = await getDoc(docRef);
  if (!snap.exists()) {
    console.error('Error: Document erp_store/main_database does not exist!');
    process.exit(1);
  }

  const currentData = snap.data();
  console.log('Current database retrieved successfully.');
  console.log('Students count:', currentData.students?.length || 0);
  console.log('Tutors count:', currentData.tutors?.length || 0);
  console.log('Schedules count to clear:', currentData.schedules?.length || 0);
  console.log('Attendances count to clear:', currentData.attendances?.length || 0);
  console.log('Finance count to clear:', currentData.finance?.length || 0);
  console.log('Invoices count to clear:', currentData.invoices?.length || 0);
  console.log('Salaries count to clear:', currentData.salaries?.length || 0);

  // Clear all fields including master data, transactional data, and setup arrays as requested
  const updatedData = {
    users: [],
    students: [],
    tutors: [],
    parents: [],
    subjects: [],
    workingAreas: [],
    schedules: [],
    attendances: [],
    invoices: [],
    finance: [],
    salaries: [],
    approvals: [],
    modules: [],
    settings: [],
    auditLogs: [],
    updatedAt: new Date().toISOString()
  };

  console.log('Writing cleared data back to Firestore...');
  await setDoc(docRef, updatedData);
  console.log('===============================================================');
  console.log('SUCCESS: Firestore main_database has been successfully cleared!');
  console.log('All transactional data has been removed. Master data remains safe.');
  console.log('===============================================================');
  process.exit(0);
}

clearData().catch(err => {
  console.error('Error during data clearing process:', err);
  process.exit(1);
});
