import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import Button from '../../components/Button';
import Contactus from '../../components/container/Contactus';
import Footer from '../../components/Footer';
import Gap from '../../components/Gap';
import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';
import TeamCard from '../../components/TeamCard';
import { getProjects } from '../../config/api/client';
const Mobile = () => {
  const [projectList, setProjectList] = useState([]);
  const getProjectsList = useCallback(async () => {
    const data = await getProjects();
    setProjectList(data);
  }, [getProjects]);

  useEffect(() => {
    getProjectsList();
  }, []);
  return (
    <div className="container mx-auto">
      <Navbar />
      <Gap height="h-70px" />
      <div className="hero  lg:flex px-6 md:px-16 lg:px-100px lg:flex-row ">
        <div className="hero-content ">
          <h1 className="text-2xl text-dark-blue-primary font-primary font-semibold  md:text-4xl lg:text-5xl xl:text-64px">
            Mobile <br /> <span className="text-blue-primary">Development</span>
          </h1>
          <p className="text-gray-b1 text-xs font-secondary w-full mt-2.5 mb-9 md:text-sm xl:text-base lg:w-3/5  ">
            Lebarkan jangkauan perusahaan anda dengan membuat mobile apps,
            Dengan tim berpengalaman dari npe digital dapat membuat aplikasi
            mobile serta memaintenance server dari aplikasi yang dibangun
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src="/illustrations/mobile_il.svg"
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
          Mobile Apps <br /> <span className="text-blue-primary">Project</span>{' '}
          dari <span className="text-blue-primary">NPE</span>
        </h2>
        <Gap height="h-50px" />
        <div className="project-list grid gap-10 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-8 2xl:gap-24  justify-items-center ">
          {console.log(projectList)}
          {projectList.map((project) => {
            if (
              project.category.name
                .toLowerCase()
                .includes('Mobile Apps'.toLowerCase())
            ) {
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
            }
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

export default Mobile;
