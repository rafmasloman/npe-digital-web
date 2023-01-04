import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ServiceCard = ({
  url,
  urlImage,
  content,
  title,
  width,
  height,
  colSpan,
  screen,
}) => {
  const [isShown, setShown] = useState(false);

  return (
    <div
      className={`card flex flex-col items-center rounded-2xl border-2 w-full h-fit mt-8  drop-shadow-card-shadow border-transparent bg-white hover:border-blue-primary  py-30px md:w-3/5  lg:w-full  xl:mt-70px`}
      onMouseEnter={() => setShown(!false)}
      onMouseLeave={() => setShown(false)}
    >
      <Image
        src={urlImage}
        alt={'Mobile Icons'}
        width={width}
        height={height}
      />

      <div className="content flex flex-col items-center mt-6 ">
        <h3 className="service-tye font-primary font-medium text-xl">
          {title}
        </h3>
        <p className="text-center text-sm md:text-base text-gray-b1 font-secondary w-3/4 lg:w-11/12  desktop:w-4/6 mt-2 ">
          {content}
        </p>

        {/* {isShown && (
          <Link
            className={`underline  text-blue-primary text-sm font-secondary  transition font-medium mt-6`}
            href={url}
          >
            Selengkapnya
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default ServiceCard;
