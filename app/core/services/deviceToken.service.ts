import { api } from '../api';

export const saveDeviceToken = async (fcmToken: string) => {
  const { data } = await api.post<any>('/api/user', {
    deviceToken: fcmToken,
  });

  return data;
};
