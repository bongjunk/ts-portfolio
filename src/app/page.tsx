'use client';
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore/lite';
import { firebase_db } from '../firebase/config';
import { useQueryClient } from '@tanstack/react-query';
import Posts from './components/posts';

export default function Home() {
  const [value, setValue] = useState('');

  const dataClickHandle = async () => {
    console.log('value', value);
    console.log('123');
    await addDoc(collection(firebase_db, `temp`), {
      id: '123',
      name: 'name',
      value: value,
    });
  };

  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="border"
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={dataClickHandle}>전송</button>
        </form>
        <Posts />
      </div>
    </>
  );
}
