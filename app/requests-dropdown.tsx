import React, {useRef, useEffect} from 'react';

const RequestsDropdown = ({toggleDropdown, closeDropdown, requestsDropdownOpen, setRequestsDropdownOpen}) => {
    
    const dropdownRef = useRef(null); 

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown(setRequestsDropdownOpen);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setRequestsDropdownOpen, closeDropdown]);

    return (
        <div className='w-full py-6 pb-8'>
            <div className="relative inline-block" ref={dropdownRef}>
                <button
                    type="button"
                    className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                    onClick={() => toggleDropdown(setRequestsDropdownOpen, requestsDropdownOpen)}
                >
                    Requests <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                {requestsDropdownOpen && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-44 z-50 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">

                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <li>
                                <a
                                    href="/dashboard/requests"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={() => closeDropdown(setRequestsDropdownOpen)}
                                >
                                    Create New Request
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={() => closeDropdown(setRequestsDropdownOpen)}
                                >My Requests
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={() => closeDropdown(setRequestsDropdownOpen)}
                                >
                                    My Team Requests
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={() => closeDropdown(setRequestsDropdownOpen)}
                                >
                                    My Draft Requests
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
         
        </div>
    )
}

export default RequestsDropdown;