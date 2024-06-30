"use client";
import React from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
    const params = useParams();
    const data = params.title;

  return (
    <div>
      {data || 'Loading...'}
    </div>
  );
};

export default Page;