import { NextResponse } from 'next/server';
import { sentNotification } from '../firebase/services/notification.service';

let currentDeviceToken = '';

export async function GET(req: Request) {
  console.log('GET /api/user: ' + currentDeviceToken);
  sentNotification(currentDeviceToken, 'TEXT_MESSAGE');
  return NextResponse.json({
    status: 'OK',
    data: {
      deviceToken: currentDeviceToken,
    },
  });
}

export async function POST(req: Request) {
  const { deviceToken } = await req.json();

  currentDeviceToken = deviceToken;
  return NextResponse.json({ status: 'OK' });
}
