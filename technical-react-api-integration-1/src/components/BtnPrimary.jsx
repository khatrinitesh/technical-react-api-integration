import React from 'react';

const BtnPrimary = ({ onClick, type = 'button', children, style = {} ,btnPrimaryStyle}) => {
  return (
    <>
      <button
      type={type}
      onClick={onClick}
      className={`${btnPrimaryStyle} btnPrimary`}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '1rem',
        ...style,
      }}
    >
      {children}
    </button> 
    </>
  );
}

export default BtnPrimary;
