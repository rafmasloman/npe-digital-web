import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Gap from '../Gap';

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
      className={`card flex flex-col  items-center rounded-2xl border-2 hover:border-2 hover:scale-110 transition duration-300 w-full h-fit mt-8  drop-shadow-card-shadow border-transparent bg-white hover:border-blue-primary py-8   md:py-30px md:mx-10 md:w-3/5  lg:w-full  xl:mt-70px`}
      // onMouseEnter={() => setShown(!false)}
      // onMouseLeave={() => setShown(false)}
    >
      <div className=" w-full h-125px flex  justify-center">
        <Image
          src={urlImage}
          alt={'Mobile Icons'}
          width={width}
          height={height}
          className="w-28 h-28 lg:w-full "
        />
      </div>

      <div className="content flex flex-col items-center mt-2.5 md:mt-6 w-full">
        <h3 className="service-tye font-primary font-medium text-base lg:text-xl">
          {title}
        </h3>
        <p className="text-center text-sm md:text-base  text-gray-b1 font-secondary w-3/4 lg:w-11/12  desktop:w-9/12 mt-2 ">
          {content}
        </p>
        <Gap height="h-4 lg:h-30px" />
        <Link
          className={`underline  text-blue-primary text-sm font-secondary  font-medium `}
          href={url}
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
