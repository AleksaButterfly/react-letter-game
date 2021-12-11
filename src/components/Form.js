import React from 'react';

const Form = (props) => {
  const { children, onSubmit } = props;
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
