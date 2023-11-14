import { collection, getDocs } from 'firebase/firestore/lite';
import { firebase_db } from '@/lib/firebase/config';

export default async function posts() {
  try {
    const getData = collection(firebase_db, 'temp');
    const snapShot = await getDocs(getData);
    const data = snapShot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log('data', data);
    return data;
  } catch (e) {
    console.log('error', e);
  }
}

// export default posts;
