import React from 'react';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const contact = ({ data }) => {
  return (
    <div>
      {data.map((data) => {
        return <div>{data.number}</div>;
      })}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/contacts`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default contact;
