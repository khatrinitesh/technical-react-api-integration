import React, { useState } from 'react';
import API from './../api/api';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BtnPrimary from './../components/BtnPrimary';

const RegisterPage = () => {
    const [form,setForm] = useState({
        email:'',
        password:''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }


    const handleRegister = async (e) => {
        e.preventDefault();
        if(!form.email || !form.password) return toast.error('all fields are required.')
        try {
            await API.post('/comments',form)
            toast.success('Register success')
            navigate("/otp"); // Go to OTP page
        } catch (error) {
            console.error(error);
            toast.error('Register failed')
        }
    }
  return (
    <>
      <form onSubmit={handleRegister}>
      <h2>Register</h2>
       <InputField label="Email" value={form.email} name="email" placeholder="Enter Email" onChange={handleChange}/>
       <InputField label="Password" value={form.password} name="password" placeholder="Enter password" onChange={handleChange}/>
      <BtnPrimary type="submit">Register</BtnPrimary>
      <p>
        Already have an account?{" "}
        <BtnPrimary onClick={() => navigate("/")}>
        Login here
      </BtnPrimary>
      </p>
    </form>
    </>
  );
}

export default RegisterPage;
