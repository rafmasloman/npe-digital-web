import Button from '../components/Button';
import Contactus from '../components/container/Contactus';
import ProjectFeatured from '../components/container/ProjectFeatured';
import Footer from '../components/Footer';
import Gap from '../components/Gap';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="projects container mx-auto w-auto">
      <Navbar />

      <div className="hero flex flex-col mt-70px  items-center ">
        <div className="hero-content flex flex-col items-center">
          <h1 className="text-2xl text-dark-blue-primary font-primary font-semibold text-center md:text-4xl lg:text-5xl xl:text-64px">
            Portfolio <span className="text-blue-primary">Kami</span>
          </h1>
          <p className="text-gray-b1 text-xs text-center w-3/4 font-secondary  mt-2.5 mb-9 md:text-sm xl:text-base   ">
            Wujudkan aplikasi terbaik anda bersama kami
          </p>
        </div>
      </div>

      {/* Projects Card */}
      <div className="projects-container  px-6 md:px-16 lg:px-100px ">
        {/* <div className="project-list grid gap-10 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-8 2xl:gap-24  justify-items-center"> */}
        <ProjectFeatured category="" />
        {/* </div> */}
      </div>

      <Gap height="h-120px" />
      <Contactus />

      <Gap height="h-120px" />
      <Footer />
    </div>
  );
};

export default Projects;
