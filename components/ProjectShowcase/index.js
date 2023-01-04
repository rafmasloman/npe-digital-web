import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import Gap from '../Gap';

const ProjectShowcase = ({ name, desc, imgUrl, type, client, year, url }) => {
  return type === 'full' ? (
    <div className="w-full mb-20">
      <h3 className="name font-primary md:text-2xl lg:text-4xl font-semibold text-dark-blue-primary">
        {name}
      </h3>
      <Gap height="h-30px lg:h-50px" />
      <Image
        src={imgUrl}
        alt="Project Showcase"
        width="1440"
        height="0"
        className="w-full rounded-2xl"
      />
      <Gap height="h-30px" />
      <div className="project-content">
        <div className="md:flex md:justify-between md:items-center">
          <div className="font-secondary text-sm md:text-base lg:text-lg">
            <h4 className="text-gray-b1 mb-2 lg:mb-0">
              {' '}
              <span className="text-blue-primary font-medium">
                Client :{' '}
              </span>{' '}
              {client}
            </h4>
            <h4 className="text-gray-b1 mb-2 lg:mb-0">
              {' '}
              <span className="text-blue-primary font-medium">
                Year :{' '}
              </span>{' '}
              {year}
            </h4>
          </div>
          <div className="font-primary flex font-medium text-sm text-dark-blue-primary lg:text-lg ">
            <Link href={`${url}`} className="flex">
              <Image
                src="/icons/link_secondary.svg"
                className="mr-3"
                width={25}
                height={25}
                alt="Link Icons"
              />
              Visit Website
            </Link>
          </div>
        </div>
        <div className="container-text mt-5">
          <p className="description text-sm  w-full lg:text-lg  mt-1 text-dark-blue-primary font-secondary md:text-base">
            {desc}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full mb-20">
      {/* {projectList.projects.map((project) => {
        console.log(project);
      })} */}
      <Image
        src={imgUrl}
        alt="Project Showcase"
        width="1440"
        height="0"
        className="w-auto "
      />
      <div className="project-content flex flex-col md:flex-row justify-between">
        <div className="container-text pt-5 w-fit flex-1">
          <h3 className="name  font-primary md:text-2xl lg:text-4xl font-semibold text-dark-blue-primary">
            {name}
          </h3>
          <p className="description  text-sm lg:text-base md:w-1/2 lg:w-5/12 mt-2 text-gray-b1 font-secondary">
            {desc}
          </p>
        </div>
        <Link
          href={`${url}`}
          className="flex  items-center text-base mt-4 flex-2 lg:mt-0 lg:text-xl font-primary "
        >
          <Image
            src="/icons/link_secondary.svg"
            className="mr-3"
            width={30}
            height={30}
            alt="Link Icons"
          />
          Visit Website
        </Link>
        {/* <Button /> */}
      </div>
    </div>
  );
};

export default ProjectShowcase;
