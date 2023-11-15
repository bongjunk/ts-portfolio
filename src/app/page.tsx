'use client';

import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore/lite';
import { firebase_db } from '../lib/firebase/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import ListTable from './components/listTable';
import addData from './components/addData';

export default function Home() {
  const [value, setValue] = useState('');

  console.log('value', value);

  const queryClient = useQueryClient();

  const mutationAddData = useMutation({
    mutationFn: addData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['temp'] });
    },
    onError: (e) => {
      console.log('error', e);
    },
  });

  const dataClickHandle = () => {
    // console.log('value', value);
    // await addDoc(collection(firebase_db, `temp`), {
    //   // id: '123',
    //   name: 'name',
    //   value: value,
    // })
    //   .then(() => {
    //     console.log('success');
    //     setValue('');
    //   })
    //   .catch((e) => console.log('e', e));

    mutationAddData.mutate({
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
