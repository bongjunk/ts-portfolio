import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { firebase_db } from '@/firebase/config';

const Posts = () => {
  // const getData = await getDocs(collection(firebase_db, 'temp'));
  // const snapShot = getData.docs.map((doc) => ({
  //   id: doc.id,
  //   ...doc.data(),
  // }));
  // // console.log(getData.)
  // console.log('getData', getData);
  // console.log('sanpshot', snapShot);
  // console.log(
  //   'snapShot',
  //   snapShot.map((el) =>{
  //     console.log('el', el);
  //   }),
  // );

  const [data, setData] = useState<any>([]);

  getDocs(collection(firebase_db, 'temp'))
    .then((r: any) => {
      r.forEach((d: any) => {
        setData({
          id: d.id,
          ...d.data(),
        });
      });
      console.log('r', r);
    })
    .catch((e) => {
      console.log('e', e);
    });

  console.log('data', data);

  return (
    <>
      <div>
        <p>test</p>
        <>
          <p>
            <b>{data?.id}</b>
          </p>
          <p>{data?.name}</p>
          <p>{data?.value}</p>
        </>
      </div>
    </>
  );
};

export default Posts;
