'use client';

import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore/lite';
import { firebase_db } from '../lib/firebase/config';
import { useQueryClient } from '@tanstack/react-query';
import ListTable from './components/listTable';

export default function Home() {
  const [value, setValue] = useState('');

  const dataClickHandle = async () => {
    console.log('value', value);
    await addDoc(collection(firebase_db, `temp`), {
      // id: '123',
      name: 'name',
      value: value,
    })
      .then(() => {
        console.log('success');
        setValue('');
      })
      .catch((e) => console.log('e', e));
  };

  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="border"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={dataClickHandle}>전송</button>
        </form>
        <ListTable />
      </div>
    </>
  );
}
