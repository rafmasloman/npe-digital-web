import Link from 'next/link';
import React from 'react';

const FooterLink = ({ title, linkNames, column, href, type }) => {
  return (
    <div className={`${column} font-primary `}>
      {console.log(href)}
      <h6 className="font-medium ">{title}</h6>
      <div className="flex flex-col mt-5">
        {linkNames.map((name, index) => {
          return type === 'link' ? (
            (console.log(name),
            (
              <Link
                className="mb-4 text-sm md:text-base"
                key={`${name}-${index}`}
                href={`${href[index]}`}
              >
                {name}
              </Link>
            ))
          ) : (
            <p className="mb-4 text-sm md:text-base" key={`${name}-${index}`}>
              {name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FooterLink;
