import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../config';

export const getFirebaseApp = () => {
  const isAppExists = getApps().length;

  if (isAppExists) return getApps()[0];

  return initializeApp(firebaseConfig);
};

export const getFirebaseAuth = () => {
  const firebaseApp = getFirebaseApp();

  return getAuth(firebaseApp);
};
