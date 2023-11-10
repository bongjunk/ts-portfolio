import { collection, getDocs } from 'firebase/firestore/lite';
import { firebase_db } from '@/firebase/config';

const Posts = async () => {
  const getData = await getDocs(collection(firebase_db, 'temp'));
  const snapShot = getData.docs.forEach((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return snapShot;
};

export default Posts;
