import React from 'react';
import { Heading } from './ui';

const Subheading = ({ data }) => {
  return (
    <>
      {data.subheading &&
        <Heading>{data.subheading}</Heading>
      }
    </>    
  );
};

export default Subheading;