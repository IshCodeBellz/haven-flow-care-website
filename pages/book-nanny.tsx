"use client";

import React from "react";
import { useState } from "react";

export default function BookNannyPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking request submitted!");
    // You could POST this to an API route or email service.
  };

  return (
    <div className="min-h-screen bg-panelBlue flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-darkBlue mb-4">
          Book a Nanny
        </h1>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          value={form.fullName}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={form.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg"
        />

        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your childcare needs"
          required
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg"
        />

        <button
          type="submit"
          className="text-xl bg-darkBlue p-2 pt-4 pb-4 hover:bg-slate-700 text-white py-3 rounded-lg w-full"
        >
          Submit Booking Request
        </button>
      </form>
    </div>
  );
}
