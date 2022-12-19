import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ name, year, category, bgUrl, imgUrl, href }) => {
  return (
    <Link href={`${href}`} className="w-full">
      <button
        className={`${bgUrl} flex flex-col justify-end bg-cover bg-left-top w-full h-60  bg-no-repeat px-5 pb-3 rounded-2xl  md:pb-6  lg:h-80`}
      >
        <div className="flex justify-between w-full drop-shadow-xl bg-white  items-center px-4 py-3 rounded-xl">
          <div className="font-primary flex flex-col justify-start flex-1 ">
            <span className="text-blue-primary   text-left text-sm font-medium">
              {year}
            </span>
            <h4 className="font-semibold text-left">{name}</h4>
            <p className="text-sm text-gray-b1 font-medium text-left">
              {category}
            </p>
          </div>
          <div className="bg-dark-blue-primary w-fit h-fit rounded-md ">
            <Link href={`${href}`} className="bg-dark-blue-primary">
              <Image
                src={imgUrl}
                width={27}
                height={27}
                className="p-1.5"
                alt={name}
              />
            </Link>
          </div>
        </div>
      </button>
    </Link>
  );
};

export default ProjectCard;
