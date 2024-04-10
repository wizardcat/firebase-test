import { ChatNotificationTypes } from './chatNotificationTypes';

const { TEXT_MESSAGE, QUOTATION, IMAGES, DOCUMENTS } = ChatNotificationTypes;

export const chatNotificationCategories = {
  [TEXT_MESSAGE]: {
    type: '%Name%',
    template: '%messageData%',
    path: '/chatDetailScreen',
  },
  [QUOTATION]: {
    type: '%Name%',
    template: 'sent a Quotation',
    path: '/chatDetailScreen',
  },
  [IMAGES]: {
    type: '%Name%',
    template: 'sent Image',
    path: '/chatDetailScreen',
  },
  [DOCUMENTS]: {
    type: '%Name%',
    template: 'sent Document',
    path: '/chatDetailScreen',
  },
};
