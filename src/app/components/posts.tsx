import React from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { firebase_db } from '@/firebase/config';

const Posts = async () => {
  const getData = await getDocs(collection(firebase_db, `temp`));
  const snapShot = getData.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));
  console.log('getData', getData);
  console.log('snapShot', snapShot);
  return (
    <>
      <div>
        <p>test</p>
      </div>
    </>
  );
};

export default Posts;
