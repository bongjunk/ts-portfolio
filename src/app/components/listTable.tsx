import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Posts from './posts';

const ListTable = () => {
  const { data } = useQuery({ queryKey: ['temp'], queryFn: Posts });
  console.log('data', data);
  return (
    <>
      <div>
        <p>ListTable</p>
      </div>
    </>
  );
};

export default ListTable;
