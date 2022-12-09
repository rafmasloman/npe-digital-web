import Image from 'next/image';
import Button from '../Button';

const ProjectShowcase = ({ name, desc, imgUrl }) => {
  return (
    <div className="w-auto">
      <Image
        src={imgUrl}
        alt="Project Showcase"
        width="1440"
        height="0"
        className="w-auto md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg desktop:max-w-screen-xl"
      />
      <div className="project-content">
        <div className="container-text mt-5">
          <h3 className="name font-primary md:text-2xl lg:text-4xl font-semibold text-dark-blue-primary">
            {name}
          </h3>
          <p className="description text-sm lg:text-base md:w-1/2 lg:w-5/12 mt-1 text-gray-b1 font-secondary">
            {desc}
          </p>
        </div>
        {/* <Button /> */}
      </div>
    </div>
  );
};

export default ProjectShowcase;
