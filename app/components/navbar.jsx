'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const user = {
    name: 'Nipun Dinanjana',
    role: 'Administrator',
  };

  const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <nav>
      {/* Top Bar */}
      <div className="w-full flex justify-center items-center bg-dark_green h-8 main_text">
        Task It
      </div>

      <div>
        {/* Profile Area */}
        <div className="bg-dark_green w-96 h-20 px-5 flex items-center">
          <Image
            src="/profile.jpg"
            alt="Profile Image"
            width={60}
            height={60}
            className="rounded-full"
          />

          <div className="px-5">
            <h1 className="text-2xl dash_text text-white font-medium ">{user.name}</h1>
            <h2 className="fon text-white">{user.role}</h2>
          </div>

          <button className="rounded-full w-50 h-50 bg-dark_green p-1 ml-5">
            <Image
              src="/ellipsis-solid.svg"
              alt="menu icon"
              width={20}
              height={20}
              style={{ filter: 'brightness(0) invert(1)' }}
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
          </button>

          {toggleDropdown && (
            <div className="dropdown dash_text font-semibold ">
              <ul>
                <li> View Profile </li>
                <li> Log Out </li>
              </ul>
            </div>
          )}

        </div>

        {/* Info Area */}
        <div></div>
      </div>
    </nav>
  );
}
