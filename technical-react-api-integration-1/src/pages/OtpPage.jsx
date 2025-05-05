import React, { useState } from 'react';
import API from '../api/api';
import InputField from '../components/InputField';
import { toast } from 'react-toastify';
import BtnPrimary from '../components/BtnPrimary';

const OtpPage = () => {
    const [form, setForm] = useState({ email: "", otp: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!form.email || !form.otp) return toast.error("All fields are required");

    try {
      await API.post("/comments", form);
      toast.success("OTP verified (mocked)");
    } catch {
      toast.error("OTP failed");
    }
  };
  return (
    <>
      <form onSubmit={handleVerify}>
      <h2>Verify OTP</h2>
      <InputField label="Email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter email" />
      <InputField label="OTP" type="text" name="otp" value={form.otp} onChange={handleChange} placeholder="Enter OTP" />
      <BtnPrimary type="submit">Verify</BtnPrimary>
    </form>
    </>
  );
}

export default OtpPage;
