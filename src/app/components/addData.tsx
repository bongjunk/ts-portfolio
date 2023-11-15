import { firebase_db } from '@/lib/firebase/config';
import { addDoc, collection } from 'firebase/firestore/lite';

export default async function addData({ ...data }: any) {
  try {
    await addDoc(collection(firebase_db, 'temp'), {
      ...data,
    });
  } catch (e) {
    console.log('error', e);
  }
}
