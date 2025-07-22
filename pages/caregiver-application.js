// pages/caregiver-application.js
"use client";

import { useState } from "react";
import SEOHead from "../components/SEOHead";

export default function CaregiverApplicationPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));

    try {
      const response = await fetch("https://formspree.io/f/meozaqep", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("Application submitted successfully!");
        setForm({
          fullName: "",
          email: "",
          phone: "",
          experience: "",
          message: "",
        });
      } else {
        setStatus("There was an error submitting your application.");
      }
    } catch (error) {
      setStatus("Network error. Please try again later.");
    }
  };

  return (
    <>
      <SEOHead
        title="Apply to Join Haven Flow | Ofsted Nanny & Care Careers"
        description="Join our team at Haven Flow. Apply to become an Ofsted-registered nanny or carer and help families across London thrive."
        url="https://www.havenflow.co.uk/caregiver-application"
        image={undefined}
      />
      <div className="bg-panelBlue min-h-screen py-10 px-4 lg:px-32">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Caregiver Job Application
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl mx-auto space-y-4"
        >
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
            name="experience"
            rows={3}
            placeholder="Briefly describe your caregiving experience"
            required
            value={form.experience}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <textarea
            name="message"
            rows={3}
            placeholder="Why do you want to work with Haven Flow?"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <button
            type="submit"
            className="bg-dustyPink hover:bg-slate-700 text-white py-3 rounded-lg w-full"
          >
            Submit Application
          </button>

          {status && (
            <p className="text-center text-green-700 mt-2">{status}</p>
          )}
        </form>
      </div>
    </>
  );
}
