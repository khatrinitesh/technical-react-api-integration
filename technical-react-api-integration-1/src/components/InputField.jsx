import React from "react";

const InputField = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <label>{label}</label>
        <br />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{ padding: "0.5rem", width: "100%" }}
        />
      </div>
    </>
  );
};

export default InputField;
