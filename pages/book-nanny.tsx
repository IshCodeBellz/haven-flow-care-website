"use client";

import React, { useState } from "react";

export default function BookNannyPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", form.fullName);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://formspree.io/f/mwpbdvay", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("Booking request submitted successfully!");
        setForm({ fullName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("There was an error submitting your request.");
      }
    } catch (error) {
      setStatus("Network error. Please try again later.");
    }
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

        {status && (
          <p className="text-center text-sm text-green-700 mt-2">{status}</p>
        )}
      </form>
    </div>
  );
}
