import React, { useState } from "react";
import API from './../api/api';
import { toast } from "react-toastify";
import InputField from './../components/InputField';
import { useNavigate } from "react-router-dom";
import BtnPrimary from "../components/BtnPrimary";

const LoginPage = () => {
  const [form,setForm] = useState({
    email:'',
    password:''
  });
  const navigate = useNavigate();

  const handleChange = (e) =>{
    e.preventDefault();
    setForm({
        ...form,
        [e.target.name]:e.target.value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    if(!form.email || !form.password) return toast.error('All fields are required.')
    try {
        await API.post('/comments',form);
        toast.success('login success (mocked)')
        navigate("/otp"); // Example: go to OTP page after login
    } catch (error) {
        toast.error('login failed')
    }
  }

  return (
    <>
     <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <InputField label="Email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter email" />
      <InputField label="Password" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter password" />
      <BtnPrimary type="submit">Login</BtnPrimary>
      <p>
        Don't have an account?{" "}
        <BtnPrimary onClick={() => navigate("/register")}>
          Register here
        </BtnPrimary>
      </p>
    </form>
    </>
  );
};

export default LoginPage;
