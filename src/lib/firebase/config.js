// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
// !getApps().length: nextjs app을 리로드 할 때 SDK 다시 초기화 방지
export const firebase_app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0];
export const firebase_db = getFirestore(firebase_app);
export const analytics = isSupported().then((y) =>
  y ? getAnalytics(firebase_app) : null,
);

// export { firebase_app };
