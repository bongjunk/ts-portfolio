import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import posts from './posts';
import deleteData from './deleteData';

const ListTable = () => {
  const queryClient = useQueryClient();
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

  console.log('rows', rows);

  useEffect(() => {
    setRows(fData);
  }, [fData]);

  const mutationDeleteData = useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['temp'] });
    },
    onError: (e) => {
      console.log('error', e);
    },
  });

  const deleteHandleClick = (r: any) => {
    mutationDeleteData.mutate({
      id: r?.id,
    });
  };

  if (isLoading) return <span>로딩중...</span>;
  if (isError) return <span>에러: {error?.message}</span>;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
            <th>Func</th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((r: any, idx: number) => {
            return (
              <tr key={idx}>
                <td>{r?.id || ''}</td>
                <td>{r?.name || ''}</td>
                <td>{r?.value || ''}</td>
                <td>
                  <button onClick={() => deleteHandleClick(r)}>삭제</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListTable;
