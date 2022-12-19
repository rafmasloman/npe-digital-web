import Button from '../components/Button';
import Contactus from '../components/Contactus';
import Footer from '../components/Footer';
import Gap from '../components/Gap';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import TeamCard from '../components/TeamCard';

const Projects = () => {
  return (
    <div className="projects container mx-auto w-auto">
      <Navbar />

      <Gap height="h-70px" />
      <div className="hero px-6 md:px-16 lg:px-100px   ">
        <div className="hero-content  ">
          <h1 className="text-2xl text-dark-blue-primary font-primary font-semibold  md:text-4xl lg:text-5xl xl:text-64px">
            <span className="text-blue-primary">NPE Digital</span> Team
          </h1>
          <p className="text-gray-b1 text-xs font-secondary w-2/5  mt-2.5 mb-9 md:text-sm xl:text-base   ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus consectetur adipiscing elit
            ut aliquam, purus sit amet luctus venenatis, lectus
          </p>
        </div>
      </div>

      <Gap height="h-70px" />
      {/* Teams  */}
      <div className="px-6 md:px-16 lg:px-100px">
        <h2 className="font-primary font-medium text-lg md:text-xl lg:text-2xl xl:text-4xl">
          Meet Our Team
        </h2>
        <Gap height="h-50px" />
        <div className=" grid md:grid-cols-2 lg:grid-cols-3  gap-8 ">
          <TeamCard
            name="Rafly Masloman"
            role="Full Stack Developer"
            imgUrl="/images/raffcodes.png"
            col="start"
          />
          <TeamCard
            name="Rafly Masloman"
            role="Full Stack Developer"
            imgUrl="/images/raffcodes.png"
            col="center"
          />
          <TeamCard
            name="Rafly Masloman"
            role="Full Stack Developer"
            imgUrl="/images/raffcodes.png"
            col="end"
          />
        </div>
      </div>
      <Gap height="h-120px" />
      <Contactus />
      <Gap height="h-120px" />
      <Footer />
    </div>
  );
};

export default Projects;
