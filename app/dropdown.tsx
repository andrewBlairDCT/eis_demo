'use client';
import React, { useState } from 'react';
import RequestsDropdown from './requests-dropdown';
import SysAdminDropdown from './sys-admin-dropdown';
import Image from "next/image";

const DropdownMenus = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [requestsDropdownOpen, setRequestsDropdownOpen] = useState(false);
    const [sysAdminDropdownOpen, setSysAdminDropdownOpen] = useState(false);

    const toggleDropdown = (set: React.Dispatch<React.SetStateAction<boolean>>, state: Boolean) => {
    set(!state);
    };

    const closeDropdown = (set: React.Dispatch<React.SetStateAction<boolean>>) => {
    set(false);
    };


    return (
        <div className="flex">
          {/* Sidebar */}
          <div
            className={`bg-purple-300 text-white fixed h-screen rounded-lg transition-all duration-300 z-10
              ${sidebarVisible ? 'w-64' : 'w-0'}`}
              style={{ overflow: sidebarVisible ? 'auto' : 'hidden' }}>
            
            <div className="flex flex-col items-center">
              <div className="mt-4">
                <Image
                  className="dark:invert"
                  src="/logo.png"
                  alt="Next.js logo"
                  width={180}
                  height={40}
                  priority
                />
                <br />
              </div>
              <div className="mt-4">
                <RequestsDropdown
                  toggleDropdown={toggleDropdown}
                  closeDropdown={closeDropdown}
                  requestsDropdownOpen={requestsDropdownOpen}
                  setRequestsDropdownOpen={setRequestsDropdownOpen}
                />
                <br />
              </div>
              <div className="mt-4">
                <SysAdminDropdown
                  toggleDropdown={toggleDropdown}
                  closeDropdown={closeDropdown}
                  sysAdminDropdownOpen={sysAdminDropdownOpen}
                  setSysAdminDropdownOpen={setSysAdminDropdownOpen}
                />
                 <br />
              </div>
            </div>
          </div>
    
          <div
            className={`flex-1 p-4 transition-all duration-300 ${sidebarVisible ? 'ml-64' : 'ml-0'}`}>
            {/* Button to toggle sidebar */}
            <div className="ml-auto">
              <button
                className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSidebarVisible(!sidebarVisible)}>
                {/* Toggle icon based on sidebarVisible state */}
                {sidebarVisible ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
         
          </div>
        </div>
      );
    };
    

export default DropdownMenus;
