import { getFirebaseAdminMessaging } from '@/app/core/firebase/firebase.admin';
import { chatNotificationCategories } from '../notifications/chatNotificationCategories';
// function getAccessToken() {
//   return new Promise(function(resolve, reject) {
//     const key = require('../placeholders/service-account.json');
//     const jwtClient = new google.auth.JWT(
//       key.client_email,
//       null,
//       key.private_key,
//       SCOPES,
//       null
//     );
//     jwtClient.authorize(function(err, tokens) {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(tokens.access_token);
//     });
//   });
// }

export const sentNotification = async (deviceToken: string, chatNotificationCategory: string) => {
  const { type, template, path } =
    chatNotificationCategories[chatNotificationCategory as keyof typeof chatNotificationCategories];

  let message = {
    data: {
      type,
      template,
    },
    token: deviceToken,
  };

  const messaging = getFirebaseAdminMessaging();

  messaging
    .send(message)
    .then((response) => {
      console.log('Successfully sent FCM message:', response);
    })
    .catch((error) => {
      console.error('Error sending FCM message:', error);
    });
};
