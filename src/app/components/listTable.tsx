import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import posts from './posts';

const ListTable = () => {
  const {
    data: fData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['temp'],
    queryFn: posts,
  });
  console.log('fData', fData);

  const [rows, setRows] = useState<any>();

  useEffect(() => {
    setRows(fData);
  }, [fData]);

  if (isLoading) return <span>로딩중...</span>;
  if (isError) return <span>에러: {error?.message}</span>;

  return (
    <>
      <div>
        <p>ListTable</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((r: any, idx: number) => {
            return (
              <tr key={idx}>
                <td>{r?.id || ''}</td>
                <td>{r?.name || ''}</td>
                <td>{r?.value || ''}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListTable;
