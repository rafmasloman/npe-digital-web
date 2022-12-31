import React from 'react';
import Gap from '../../Gap';
import ServiceCard from '../../ServiceCard';
import websiteIcons from '../../../public/icons/website_ic.svg';
import uiuxIcons from '../../../public/icons/course_ic.svg';
import mobileIcons from '../../../public/icons/mobile_ic.svg';

const Services = () => {
  return (
    <div className="services flex flex-col items-center px-6 md:px-16 lg:px-100px ">
      <div className="flex flex-col items-center">
        <span className="font-primary text-sm text-gray-b1">Our Services</span>
        <h2 className="font-primary font-semibold text-2xl text-center text-dark-blue-primary mt-3 md:text-3xl lg:text-4xl xl:text-5xl">
          We provide best <br />{' '}
          <span className="text-blue-primary">services</span> for you
        </h2>
        <p className="service-content font-secondary text-center text-gray-b1 text-xs mt-4 md:text-sm md:w-2/3 desktop:w-2/4">
          Sebagai Softwarehouse yang berpengalaman, NPE Digital bukan hanya
          berfokus pada tahap awal implementasi, layanan yang kami berikan juga
          mencakup pelatihan, pendampingan dan sosialisasi terkait dengan
          teknologi/software yang diterapkan
        </p>
      </div>
      <div className="all-service flex flex-col lg:flex-row lg:justify-center  items-center w-full ">
        <ServiceCard
          title="Website"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
          urlImage={websiteIcons}
          url="/services/web"
          width={90}
          height={90}
          colSpan={1}
        />
        <Gap width="w-200px" />
        <ServiceCard
          title="Mobile Apps"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
          urlImage="/icons/mobile_ic.svg"
          url="/services/mobile"
          width={40}
          height={40}
          colSpan={1}
        />
        <Gap width="w-200px" />
        <ServiceCard
          title="UI/UX Design"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
          urlImage={uiuxIcons}
          url="/services/uiux"
          width={90}
          height={90}
          colSpan={1}
        />
      </div>
    </div>
  );
};

export default Services;
