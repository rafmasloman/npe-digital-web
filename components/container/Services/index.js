import React, { useCallback, useEffect, useState } from 'react';
import Gap from '../../Gap';
import ServiceCard from '../../ServiceCard';
import websiteIcons from '../../../public/icons/website_ic.svg';
import uiuxIcons from '../../../public/icons/course_ic.svg';
import mobileIcons from '../../../public/icons/mobile_ic.svg';
import { getServices } from '../../../config/api/client';

const Services = () => {
  const [services, setServices] = useState([]);

  const getServicesList = useCallback(async () => {
    const data = await getServices();
    setServices(data);
  }, [getServices]);

  useEffect(() => {
    getServicesList();
  }, []);

  return (
    <div className="services flex flex-col items-center px-6 md:px-16 lg:px-100px ">
      <div className="flex flex-col items-center">
        {console.log(services)}
        <span className="font-primary text-lg text-gray-b1">Layanan kami</span>
        <h2 className="font-primary font-semibold text-2xl text-center text-dark-blue-primary mt-3 md:text-3xl lg:text-4xl xl:text-5xl">
          <span className="text-blue-primary">Layanan Terbaik</span> <br /> dari
          NPE Digital
        </h2>
        <p className="service-content font-primary text-center text-dark-blue-primary  mt-4 text-sm lg:text-base md:w-2/3 desktop:w-2/4">
          NPE Digital sebagai softwarehouse terdepan memberikan kemudahan
          layanan yang mencakup pelatihan, pendampingan dan pengarahan terkait
          layanan teknologi yang akan digunakan.
        </p>
      </div>
      <div className="all-service container flex flex-col lg:flex-row lg:justify-center  items-center w-full ">
        {services.map((service) => {
          return (
            <ServiceCard
              key={service._id}
              title={service.name}
              content={service.description}
              urlImage={`${process.env.NEXT_PUBLIC_IMG}/services/${service.image}`}
              url={`/services/${service.name}`}
              // url="/"
              width={service.name.includes('Mobile') ? 150 : 150}
              height={service.name.includes('Mobile') ? 150 : 150}
              colSpan={1}
            />
          );
        })}
        {/* <ServiceCard
          title="Website"
          content="Menjadi solusi bagi perusahaan dalam mengembangkan bisnisnya melalui layanan berbasis website yang informatif dan inovatif"
          urlImage={websiteIcons}
          url="/services/web"
          width={90}
          height={90}
          colSpan={1}
        />
        <Gap width="w-200px" />
        <ServiceCard
          title="Mobile Apps"
          content="Fleksibilitas layanan dapat dijangkau dengan menggunakan aplikasi mobile sehingga memudahkan akses pengguna bisnis anda"
          urlImage="/icons/mobile_ic.svg"
          url="/services/mobile"
          width={40}
          height={40}
          colSpan={1}
        />
        <Gap width="w-200px" />
        <ServiceCard
          title="UI/UX Design"
          content="Membangun fitur dan aspek visual yang dapat menciptakan pengalaman menyenangkan dalam penggunaan produk bisnis anda "
          urlImage={uiuxIcons}
          url="/services/uiux"
          width={90}
          height={90}
          colSpan={1}
        /> */}
      </div>
    </div>
  );
};

export default Services;
