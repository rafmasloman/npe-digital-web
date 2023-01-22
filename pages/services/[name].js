import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Button from '../../components/Button';
import Contactus from '../../components/container/Contactus';
import Footer from '../../components/Footer';
import Gap from '../../components/Gap';
import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';
import TeamCard from '../../components/TeamCard';
import { getServicePage } from '../../config/api/client';
const Service = () => {
  const { query, isReady } = useRouter();
  console.log(query);
  const [service, setService] = useState({
    name: '',
    image: '',
    description: '',
    detailDescription: '',
  });

  const [projects, setProject] = useState([]);
  const getService = useCallback(async (name) => {
    const data = await getServicePage(name);
    setService(data.service);
    setProject(data.project);
  }, []);

  useEffect(() => {
    if (isReady) {
      getService(query.name);
    } else {
      console.log('router tidak tersedia');
    }
  }, [isReady]);

  const serviceHeader = service.name;
  const titleHeader = `${service.name} Service NPE - Layanan Pembuatan ${service.name} untuk perusahaan anda`;
  const serviceName = service.name.split(' ');
  return (
    <div className="container mx-auto">
      <Head>
        <link rel="npe icon" href="/illustrations/logonpe.svg" />
        <title>{titleHeader}</title>
      </Head>
      <Navbar />
      <Gap height="h-70px" />
      {/* {console.log(project)} */}
      <div className="hero  lg:flex px-6 md:px-16 lg:px-100px lg:flex-row ">
        <div className="hero-content ">
          <h1 className="text-2xl text-dark-blue-primary font-primary font-semibold  md:text-4xl lg:text-5xl xl:text-64px">
            {serviceName[0]}
            <span className="text-blue-primary"> {serviceName[1]}</span>
          </h1>
          <p className="text-dark-blue-primary text-xs font-primary w-full mt-2.5 mb-9 md:text-sm xl:text-lg lg:w-3/4  ">
            {service.detailDescription}
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG}/services/${service.image}`}
            className="w-3/6 h-full "
            width={0}
            height={0}
            quality={100}
            alt="Mobile Development Illustrations"
          />
        </div>
      </div>

      <Gap height="h-70px" />
      {/* Teams  */}
      <div className="px-6 md:px-16 lg:px-100px">
        <h2 className="font-primary font-semibold text-center text-lg md:text-xl lg:text-2xl xl:text-4xl">
          {service.name} <br />{' '}
          <span className="text-blue-primary">Project</span> dari{' '}
          <span className="text-blue-primary">NPE</span>
        </h2>
        <Gap height="h-50px" />
        <div className="project-list grid gap-10 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-8 2xl:gap-24  justify-items-center ">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project._id}
                bgUrl={`${process.env.NEXT_PUBLIC_IMG}/projects/${project.thumbnail}`}
                name={project.title}
                year={project.year}
                category={project.category.name}
                imgUrl="/icons/link.svg"
                href={`/project/detail/${project._id}`}
              />
            );
          })}
        </div>
        <Gap height="h-70px" />
        <div className="flex justify-center">
          <Button url="/projects" text="Lihat Semua" color="secondary" />
        </div>
      </div>
      <Gap height="h-120px" />
      <Contactus />
      <Gap height="h-120px" />
      <Footer />
    </div>
  );
};

export default Service;
