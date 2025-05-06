import React from 'react';

const BtnPrimary = ({onClick,children,btnPrimaryStyle}) => {
  return (
    <>
      <button onClick={onClick} className={`${btnPrimaryStyle}`}>{children}</button>
    </>
  );
}

export default BtnPrimary;
