import React, { useState } from "react";
import { KeyRound, ArrowLeft } from "lucide-react";
import logoImg from "../assets/logo.webp";
import { Link } from "react-router-dom";

const logo = {
  src: logoImg,
  alt: "Virtual Assistant.com.au - Taking Your Business Into The Future",
};

const inputClass =
  "w-full border-2 border-gray-300 rounded-lg px-4 py-3.5 text-base placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // form is valid — proceed with sending reset link here
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200 py-6 flex justify-center">
        <img src={logo.src} alt={logo.alt} className="h-33 object-contain" />
      </div>

      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-sky-500 flex items-center justify-center mx-auto mb-6">
            <KeyRound className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-sky-500 leading-tight mb-3">Forgot Your Password?</h1>
          <p className="text-slate-500 text-lg max-w-84 mx-auto mb-8">
            Enter email address and we'll send you instructions to reset your password.
          </p>

          <form className="space-y-5 text-left" onSubmit={handleSubmit}>
            <div>
              <label className="block text-md font-medium text-slate-700 mb-1.5">Email Address</label>
              <input
                type="email"
                required
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                  className={`${inputClass} max-w-sm mx-auto block`}

              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-[#1496D1] hover:scale-[1.02] hover:-translate-y-1 text-white font-bold py-3.5 rounded-lg transition-all duration-300"
            >
              Send Reset Link
            </button>

            <a
              href="/login"
              className="w-full flex items-center justify-center gap-2 border-2 border-gray-300 text-slate-700 font-medium py-3.5 rounded-lg hover:bg-[#5C636A] hover:border-primary hover:text-primary transition-all duration-300"

            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}