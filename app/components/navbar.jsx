'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import Dropdown from './dropdown';

export default function Navbar() {
  const user = {
    name: 'Nipun Dinanjana',
    role: 'Administrator',
  };

  const [toggleDropdown, setToggleDropdown] = useState(false)

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // You can add additional logic here, such as filtering search results
  };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  }).format(currentTime);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(currentTime);

  return (
    <nav>
      {/* Top Bar */}
      <div className="w-full flex justify-center items-center bg-dark_green h-8 main_text">
        <Image
          src="/TASK IT.jpg"
          alt="Task IT Logo"
          width={20}
          height={20}
        />
        Task It
      </div>

      <div className="flex">
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
        <div className="bg-light_green flex items-center justify-between px-5">

        <div className="ml-auto flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="border border-gray-300 p-2 rounded-md focus:outline-none shadow-md"
            />
            <button className="absolute right-0 text-white p-2 rounded-md mr-2 opacity-40">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
              </svg>
            </button>
          </div>

          <div className="flex items-center dash_text">
            <div className="text-white text-center bg-dark_green rounded-lg h-11 flex items-center">
              <div className="text-2xl font-bold px-8">{formattedTime}</div>
              <div className="rounded-lg bg-white font-bold h-11 flex items-center">
                <span className="dash_text text-gray-500 px-5 text-lg">Welcome <span className="italic font-light">{user.name}</span></span>
              </div>
            </div>
          </div>

          <div>
            <Dropdown/>
          </div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
