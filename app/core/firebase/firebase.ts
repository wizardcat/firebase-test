// Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const messaging = typeof window !== 'undefined' ? getMessaging(app) : null;
export default firebaseApp;

// const initToken = async () => {
//   try {
//     if (messaging === null) return;
//     console.log('messaging: ', messaging);
//     const currentToken = await getToken(messaging, { vapidKey });

//     if (currentToken) {
//       console.log('currentToken: ', currentToken);
//       // sendTokenToServer(currentToken);
//       // updateUIForPushEnabled(currentToken);
//     } else {
//       // Show permission request.
//       console.log('No registration token available. Request permission to generate one.');
//       // Show permission UI.
//       // updateUIForPushPermissionRequired();
//       // setTokenSentToServer(false);
//     }
//   } catch (err) {
//     console.log('An error occurred while retrieving token. ', err);
//     // showToken('Error retrieving registration token.');
//     // setTokenSentToServer(false);
//   }
// };

// initToken();
// getToken(messaging, { vapidKey })
//   .then((currentToken) => {
//     if (currentToken) {
//       console.log('currentToken: ', currentToken);
//       // sendTokenToServer(currentToken);
//       // updateUIForPushEnabled(currentToken);
//     } else {
//       // Show permission request.
//       console.log('No registration token available. Request permission to generate one.');
//       // Show permission UI.
//       // updateUIForPushPermissionRequired();
//       // setTokenSentToServer(false);
//     }
//   })
//   .catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//     // showToken('Error retrieving registration token.');
//     // setTokenSentToServer(false);
//   });

// export function requestPermission() {
//   console.log('Requesting permission...');
//   Notification.requestPermission().then((permission) => {
//     if (permission === 'granted') {
//       console.log('Notification permission granted.');
//       // TODO(developer): Retrieve a registration token for use with FCM.
//       // In many cases once an app has been granted notification permission,
//       // it should update its UI reflecting this.
//       // resetUI();
//     } else {
//       console.log('Unable to get permission to notify.');
//     }
//   });
// }

// requestPermission();
