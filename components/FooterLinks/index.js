import Link from 'next/link';
import React from 'react';

const FooterLink = ({ title, linkNames, column }) => {
  console.log(linkNames);
  return (
    <div className={`${column} font-primary `}>
      <h6 className="font-medium ">{title}</h6>
      <div className="flex flex-col mt-5">
        {linkNames.map((name) => {
          return (
            <Link className="mb-4 text-sm md:text-base" key={name} href="#">
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterLink;
