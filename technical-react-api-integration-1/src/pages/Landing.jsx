import React from "react";
import { useNavigate } from "react-router-dom";
import BtnPrimary from "../components/BtnPrimary";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Welcome to the App</h1>
        <p>This is a mock authentication flow using React and Toastify.</p>
        <BtnPrimary onClick={() => navigate('/login')}>Login</BtnPrimary>
      <BtnPrimary onClick={() => navigate('/register')} style={{ marginLeft: '1rem' }}>
        Register
      </BtnPrimary>
      </div>
    </>
  );
};

export default Landing;
