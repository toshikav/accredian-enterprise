
"use client";

import { useState } from "react";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);

    console.log({
      name,
      email,
      company,
      phone,
      requirement,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Full name
          </label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-black placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Work email
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@company.com"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-black placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Company
          </label>

          <input
            id="company"
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder="Company name"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-black placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Phone
          </label>

          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Phone number"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-black placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="requirement"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Tell us about your requirement
        </label>

        <textarea
          id="requirement"
          value={requirement}
          onChange={(event) => setRequirement(event.target.value)}
          placeholder="Tell us what your organization is looking to achieve..."
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-black placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
      >
        Request a consultation
      </button>

      {submitted && (
        <div className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          Thanks! Your request has been submitted successfully.
        </div>
      )}
    </form>
  );
}

