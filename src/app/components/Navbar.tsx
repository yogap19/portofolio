import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-6 lg:px-12 bg-transparent fixed w-full z-50">
        <button>yoga pramana</button>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 bg-white bg-opacity-50 shadow-md rounded-full px-8 py-3">
          {['Profile', 'About', 'Statistic', 'Project'].map((item, index) => (
            <li
              key={index}
              className="hover:text-yellow-600 transition duration-300"
            >
              <button>{item}</button>
            </li>
          ))}
        </ul>

        <button>contact me</button>
      </nav>
    </>
  );
};

export default Navbar;
