import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Projects from '../../pages/projects';

const Navbar = () => {
  const [active, setActive] = useState(true);
  const [hidden, setHidden] = useState('h-0 overflow-hidden');

  const activeState = () => {
    active === true ? setActive(!true) : setActive(true);
    active === true ? setHidden('h-auto') : setHidden('h-0 overflow-hidden');
  };

  return (
    <div className="font-primary   px-6 pt-12 md:px-16  lg:mt-0 lg:flex lg:justify-between  lg:py-10 lg:px-100px container mx-auto">
      <div className="company-brand  flex justify-between items-center">
        <p className="company-name text-lg font-medium text-dark-blue-primary lg:text-2xl">
          NPE{' '}
          <span className="company-name-secondary text-blue-primary">
            Digital
          </span>
        </p>
        <div className="hamburger-icon lg:hidden" onClick={activeState}>
          <div className="line-one w-6 h-1 rounded-md mb-1 bg-black"></div>
          <div className="line-two w-6 h-1 rounded-md mb-1 bg-black"></div>
          <div className="line-three w-6 h-1 rounded-md mb-1 bg-black"></div>
        </div>
      </div>
      <div
        className={`navigation_bar   ${hidden} lg:h-auto lg:flex  lg:flex-1  lg:justify-center lg:items-center`}
      >
        <ul className="nav-list  mt-5 lg:mt-0 lg:flex lg:justify-center lg:items-center  lg:flex-1 ">
          <li className="nav-link lg:pr-12">
            <Link
              href="/"
              className="link active text-sm text-blue-primary font-medium lg:text-base"
            >
              Home
            </Link>
          </li>
          <li className="nav-link mt-3 lg:mt-0 lg:pr-12">
            <Link
              href="/projects"
              className="link text-sm text-gray-b1 lg:text-base"
            >
              Projects
            </Link>
          </li>
          <li className="nav-link mt-3 lg:mt-0 lg:pr-12">
            <Link
              href="/teams"
              className="link text-sm text-gray-b1 lg:text-base"
            >
              Teams
            </Link>
          </li>
          <li className="nav-link mt-3 lg:mt-0 lg:pr-12">
            <Link
              href="/contactus"
              className="link text-sm text-gray-b1 lg:text-base"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="social-media flex mt-5  lg:mt-0 ">
          <Image
            src="/icons/facebook_ic.svg"
            alt="Facebook"
            className="facebook_icon mr-5"
            width={28}
            height={28}
          />
          <Image
            src="/icons/instagram_ic.svg"
            alt="Instagram"
            width={28}
            height={28}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
