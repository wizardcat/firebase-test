import admin, { ServiceAccount } from 'firebase-admin';

const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS as ServiceAccount;

export const getFirebaseAdmin = () => {
  const isAppExists = admin.apps.length;

  if (isAppExists) return admin.apps[0]!;

  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
  });
};

export const getFirebaseAdminMessaging = () => {
  return getFirebaseAdmin().messaging();
};

export const getFirebaseAdminAuth = () => {
  const firebaseAdmin = getFirebaseAdmin();

  return firebaseAdmin.auth();
};
