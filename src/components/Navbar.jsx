import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>About</Link>
        </li>

        <li>
          <Link href={"/"}>Services</Link>
        </li>
        <li>
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>
        <li>
          <Link href={"/"}>Blogs</Link>
        </li>
        <li>
          <Link href={"/"}>Contact</Link>
        </li>
      </>
    );
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navMenu()}
            </ul>
          </div>
          <Link href={"/"}>
            <Image
              width={50}
              height={50}
              className="cursor-pointer object-cover"
              src="/assets/logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2 items-center p-5">
           <Link className="btn" href={"/login"}>Login</Link>
           <Link className="btn" href={"/register"}>Register</Link>
          </div>
          <a className="btn bg-white text-orange-500 border-2 border-orange-500">Appoinment</a>
        </div>
      </div>
    </div>
  );
}
