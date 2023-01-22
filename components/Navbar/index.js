import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Projects from '../../pages/projects';
import Gap from '../Gap';

const Navbar = ({ mode }) => {
  const [active, setActive] = useState(true);
  const [hidden, setHidden] = useState('h-0 overflow-hidden');

  const activeState = () => {
    active === true ? setActive(!true) : setActive(true);
    active === true ? setHidden('h-auto') : setHidden('h-0 overflow-hidden');
  };

  const router = useRouter();
  // console.log(router.pathname);

  return (
    <div className="font-primary   px-6 pt-12 md:px-16   lg:mt-0 lg:flex lg:justify-between  lg:py-10 lg:px-100px container mx-auto">
      <div className="company-brand  flex justify-between  items-center">
        <p className="company-name text-lg font-medium text-dark-blue-primary lg:text-2xl">
          {/* NPE{' '}
          <span className="company-name-secondary text-blue-primary">
            Digital
          </span> */}
          <Link href="/">
            <Image
              alt="NPE Digital logo"
              src="/illustrations/logonpe.png"
              className="w-8 "
              width={50}
              height={50}
              quality={100}
            />
          </Link>
        </p>
        <div className="hamburger-icon lg:hidden" onClick={activeState}>
          <div
            className={`line-one w-6 h-1 rounded-md mb-1 ${
              mode === 'dark' ? 'bg-white' : 'bg-dark-blue-primary'
            }`}
          ></div>
          <div
            className={`line-one w-6 h-1 rounded-md mb-1 ${
              mode === 'dark' ? 'bg-white' : 'bg-dark-blue-primary'
            }`}
          ></div>
          <div
            className={`line-one w-6 h-1 rounded-md mb-1 ${
              mode === 'dark' ? 'bg-white' : 'bg-dark-blue-primary'
            }`}
          ></div>
        </div>
      </div>
      <div
        className={`navigation_bar   ${hidden} lg:h-auto lg:flex  lg:flex-1  lg:justify-center lg:items-center`}
      >
        <ul className="nav-list  mt-5 lg:mt-0 lg:flex lg:justify-center lg:items-center grow  ">
          <Gap width="w-10" />
          <li className="nav-link  ">
            <Link
              href="/"
              className={`link active text-sm  ${
                router.pathname === '/'
                  ? 'text-blue-primary font-medium'
                  : 'text-gray-b1 font-normal'
              }  lg:text-base hover:text-blue-primary `}
            >
              Home
            </Link>
          </li>
          <Gap width="w-10" />
          <li className="nav-link mt-3 lg:mt-0 ">
            <Link
              href="/projects"
              className={`link text-sm ${
                router.pathname === '/projects'
                  ? 'text-blue-primary font-medium'
                  : 'text-gray-b1 font-normal'
              } lg:text-base hover:text-blue-primary `}
            >
              Projects
            </Link>
          </li>
          <Gap width="w-10" />
          <li className="nav-link mt-3 lg:mt-0 ">
            <Link
              href="/teams"
              className={`link text-sm ${
                router.pathname === '/teams'
                  ? 'text-blue-primary font-medium'
                  : 'text-gray-b1 font-normal'
              } lg:text-base hover:text-blue-primary `}
            >
              Teams
            </Link>
          </li>
          <Gap width="w-10" />
          <li className="nav-link mt-3 lg:mt-0 ">
            <Link
              href="/contactus"
              className={`link text-sm ${
                router.pathname === '/contactus'
                  ? 'text-white font-medium'
                  : 'text-gray-b1 font-normal'
              } lg:text-base hover:text-blue-primary `}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`social-media ${hidden} flex lg:h-auto mt-5  grow-0  lg:mt-0 `}
      >
        <Link href="https://www.linkedin.com/company/npe-digital/about/">
          <Image
            src="/icons/linkedin_ic.svg"
            alt="Linkedin"
            className="linkedin_icon mr-5"
            width={28}
            height={28}
          />
        </Link>
        <Link href="https://www.instagram.com/npe.digital/">
          <Image
            src="/icons/instagram_ic.svg"
            alt="Instagram"
            width={28}
            height={28}
            className="instagram_icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
