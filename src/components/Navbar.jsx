import React, { useState } from "react";
import Typed from "react-typed";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
    
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black shadow-lg shadow-indigo-500/40">
        <div className="flex justify-center items-center">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Profit_</h1>
        <Typed className="w-full text-3xl font-bold text-[#00df9a]" strings={['Earn.']} typeSpeed={120} backSpeed={140} loop/>
        </div>
        <ul className='hidden md:flex'>
          <li className="p-4 text-black"> <Link to="">Home</Link> </li>
          <li className="p-4 text-black"><Link to="">About</Link></li>
          <li className="p-4 text-black"><Link to="">Contact</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ?   <AiOutlineMenu size={20} />:<AiOutlineClose size={20} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] bg-black h-full border-r border-r-gray-900 bg-white0 ease-in-out duration-500':'fixed left-[-100%]'}>
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            Market.
          </h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b text-white border-gray-600 text-whited"><Link to="">Home</Link></li>
            <li className="p-4 border-b text-white border-gray-600 text-whited"><Link to="">About</Link></li>
            <li className="p-4 text-whited text-white"><Link to="">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
