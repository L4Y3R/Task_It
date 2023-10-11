'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { DropdownMenu, Transition } from "@headlessui/react";

export default function Navbar() {
  const user = {
    name: 'Nipun Dinanjana',
    role: 'Administrator',
  };

  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Choose View');
  const [toggleDropdown2, setToggleDropdown2] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setToggleDropdown2(false);
  };


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
    hour12: true,
  }).format(currentTime);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(currentTime);

  

  return (
    <nav className="flex flex-col">
      {/* Top Bar */}
      <div className="w-full flex justify-center items-center bg-dark_green h-[4vh] main_text">
        <Image
          src="/TASK IT.jpg"
          alt="Task IT Logo"
          width={20}
          height={20}
        />
        Task It
      </div>

      <div className="flex flex-1">
        {/* Profile Area */}
        {/* Desktop NAV */}
        <div className="hidden lg:flex bg-dark_green w-auto h-5 lg:w-96 lg:h-20 px-5 items-center">
          <Image
            src="/profile.jpg"
            alt="Profile Image"
            width={60}
            height={60}
            className="rounded-full"
          />

          <div className="px-5">
            <h1 className="md:text-md lg:text-2xl dash_text text-white font-medium ">{user.name}</h1>
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

        {/* Mobile Nav */}

        <div
          className="lg:hidden bg-dark_green w-auto lg:w-96 lg:h-20 px-5 flex items-center"
          onClick={() => setToggleDropdown((prev) => !prev)}
        >
          <Image
            src="/profile.jpg"
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-full"
          />

          <button className="rounded-full w-50 h-50 bg-dark_green p-1 ml-5">
          </button>

          {toggleDropdown && (
            <div className="dropdown_mobile dash_text font-semibold ">
              <ul>
                <li> View Profile </li>
                <li> Log Out </li>
              </ul>
            </div>
          )}
        </div>

        {/* Info Area */}
        <div className="bg-light_green flex items-center px-5 flex-1 md:gap-20 lg:gap-16">

        <div className="hidden md:flex ml-auto items-center relative">
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

          <div className="hidden md:flex items-center dash_text">
            <div className="text-white text-center bg-dark_green rounded-lg h-12 flex items-center">
              <div className="text-sm md:text-2xl font-bold px-8 whitespace-nowrap">{formattedTime}</div>

              <div className="rounded-lg bg-white font-bold h-11 flex items-center mr-1">
                <span className="dash_text text-gray-500 px-5 text-lg whitespace-nowrap">Welcome <span className="italic font-light">{user.name}</span></span>
              </div>
            </div>
          </div>

          <div className="dropdown-container flex justify-center h-11">
            <button
              className="rounded-lg bg-dark_green dash_text font-bold text-white px-4"
              onClick={() => setToggleDropdown2((prev) => !prev)}
            >
              {`Chosen: ${selectedOption}`}
            </button>

            {toggleDropdown2 && (
              <div className="dropdown dash_text font-semibold right-48 top-[-30px]">
                <ul>
                  <li onClick={() => handleOptionClick('Week')}>Week</li>
                  <li onClick={() => handleOptionClick('Day')}>Day</li>
                </ul>
              </div>
            )}
          </div>
          <div>
              <button
                className="rounded-lg bg-dark_green dash_text font-bold text-white px-4 h-11 w-11 flex justify-center items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="white"/>
              </svg>
              </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
