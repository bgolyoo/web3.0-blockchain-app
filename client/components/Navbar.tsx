import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/pro-light-svg-icons';

const NavbarItem = ({ title, classProps }: { title: string; classProps?: string }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex justify-start flex-initial justify-center items-center">
        <Image priority src="/images/logo.png" alt="logo" height="32" width="128" className="cursor-pointer"/>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
          <NavbarItem key={item + index} title={item}/>
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative h-[28px] w-[28px]">
        {!toggleMenu && (
          <FontAwesomeIcon icon={faBars} size="2x" className="text-white md:hidden cursor-pointer"
                           onClick={() => setToggleMenu(true)}/>
        )}
        {toggleMenu && (
          <FontAwesomeIcon icon={faTimes} size="2x" className="text-white md:hidden cursor-pointer"
                           onClick={() => setToggleMenu(false)}/>
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-1 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white"
          >
            <li className="text-xl w-full my-2">
              <div className="h-[44px] w-[28px] flex justify-center">
                <FontAwesomeIcon icon={faTimes} size="lg" onClick={() => setToggleMenu(false)}/>
              </div>
            </li>
            {['Market', 'Exchange', 'Tutorials', 'Wallets'].map(
              (item, index) => <NavbarItem key={item + index} title={item} classProps="my-2 text-lg"/>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
