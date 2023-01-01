import Image from 'next/image';
import Link from 'next/link';
import testImg from '../../public/images/project-02.png';
const ProjectCard = ({ name, year, category, bgUrl, imgUrl, href }) => {
  return (
    <Link href={`${href}`} className="w-full ">
      <button
        // style={{
        //   backgroundImage: `url({${testImg}})`,
        //   width: '100%',
        //   height: '100%',
        // }}
        className={` flex flex-col relative justify-end   bg-cover bg-left-top w-full h-60 bg-no-repeat px-5 pb-3 rounded-2xl  md:pb-6  lg:h-80`}
      >
        <Image
          alt={name}
          src={bgUrl}
          width={400}
          height={400}
          style={{
            width: '100%',
            height: '100%',
          }}
          className="absolute left-0 top-0 rounded-2xl"
        />
        <div className="flex justify-between  w-full drop-shadow-xl bg-white  items-center px-4 py-2.5 rounded-xl">
          <div className="font-primary flex flex-col justify-start flex-1 ">
            <span className="text-blue-primary text-left text-sm font-medium">
              {year}
            </span>
            <h4 className="font-semibold text-left">{name}</h4>
            <p className="text-sm text-gray-b1 font-medium text-left">
              {category}
            </p>
          </div>
          <div className="bg-dark-blue-primary w-fit h-fit rounded-md ">
            {/* <Link href={`${href}`} className="bg-dark-blue-primary"> */}
            <Image
              src={imgUrl}
              width={27}
              height={27}
              className="p-1.5"
              alt={name}
            />
            {/* </Link> */}
          </div>
        </div>
      </button>
    </Link>
  );
};

export default ProjectCard;
