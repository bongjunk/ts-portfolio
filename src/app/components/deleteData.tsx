import { firebase_db } from '@/lib/firebase/config';
import { deleteDoc, doc } from 'firebase/firestore/lite';

export default async function deleteData({ id }: any) {
  await deleteDoc(doc(firebase_db, 'temp', id));
}
