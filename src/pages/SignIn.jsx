import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logoImg from "../assets/logo.webp";
import { Link } from "react-router-dom";

const logo = {
  src: logoImg,
  alt: "Virtual Assistant.com.au - Taking Your Business Into The Future",
};

const inputClass =
  "w-full border-2 border-gray-300 rounded-xl px-4 py-4 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400";

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_\-+=]).{8,}$/;

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError("Password is required.");
      return false;
    }
    if (!PASSWORD_REGEX.test(password)) {
      setPasswordError(
        "The password field must be at least 8 characters and include uppercase, lowercase, a number, and a special character."
      );
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordOk = validatePassword();
    if (!passwordOk) return;

    // form is valid — proceed with sign in logic here
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center gap-40 px-6 py-8 border-t-4 border-sky-100">
      <div className="flex flex-col items-center lg:items-start">
        <img src={logo.src} alt={logo.alt} className="h-40 md:h-45 object-contain" />
      </div>

      <div className="w-full max-w-lg">
        <h1 className="text-[20px] font-bold text-primary text-center mb-2">Welcome Back</h1>
        <p className="text-textcolor text-center text-lg mb-8">Please sign in to your account to continue</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-md font-medium text-slate-700 mb-2">Email</label>
            <input
              type="email"
              required
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-md font-medium text-slate-700 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError("");
                }}
                className={`${inputClass} pr-11 ${passwordError ? "border-red-400 focus:ring-red-300 focus:border-red-400" : ""}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {passwordError ? (
              <p className="text-sm text-red-500 mt-1.5">{passwordError}</p>
            ) : (
              <p className="text-md text-textcolor mt-2">Use at least 6 characters with a mix of letters and numbers</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-md text-slate-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              Remember me
            </label>
            <a href="/forgot-password" className="text-md text-sky-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-[#1496D1] hover:scale-[1.02] hover:-translate-y-1 text-white font-bold text-lg py-4 rounded-lg transition-all duration-300"
          >
            Sign In
          </button>

          <p className="text-center text-md text-slate-500">
            Don't have an account? <a href="/get-started" className="text-sky-500 font-medium hover:underline">Register Now</a>
          </p>
        </form>
      </div>
    </div>
  );
}