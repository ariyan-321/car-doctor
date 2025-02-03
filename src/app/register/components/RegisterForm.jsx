"use client";
import { resgisterUser } from "@/app/actions/auth/registerUser";
import Link from "next/link";
import React from "react";

export default function RegisterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const registerData = { name, email, password };
    await resgisterUser(registerData);
  };
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border border-orange-400">
      <h2 className="text-2xl font-semibold text-center text-orange-600 mb-4">
        Register
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your full name"
            className="w-full p-2 mt-1 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mt-1 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 mt-1 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition"
        >
          Register
        </button>
      </form>
      <p className="text-sm text-center text-gray-600 mt-3">
        Already have an account?{" "}
        <Link href="/login" className="text-orange-500 font-medium">
          Login
        </Link>
      </p>
    </div>
  );
}
