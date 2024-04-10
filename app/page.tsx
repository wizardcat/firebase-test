'use client';
import { getMessaging, onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import firebaseApp from './core/firebase/firebase';
import useFcmToken from './core/firebase/useFcmToken';
import { saveDeviceToken } from './core/services/deviceToken.service';

export default function Home() {
  const { fcmToken, notificationPermissionStatus } = useFcmToken();
  fcmToken && console.log('FCM token:', fcmToken);

  useEffect(() => {
    if (!fcmToken || typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    const data = saveDeviceToken(fcmToken);

    if (!data) return;

    const messaging = getMessaging(firebaseApp);
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log('Foreground push notification received:', payload);
    });

    return () => {
      unsubscribe();
    };
  }, [fcmToken]);

  return <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>;
}
