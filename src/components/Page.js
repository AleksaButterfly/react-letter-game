import React from 'react';

const Page = ({ children }) => {
  return (
    <div className="container">
      <div className="circle" />
      <div className="circle circle2" />
      {children}
    </div>
  );
};

export default Page;
