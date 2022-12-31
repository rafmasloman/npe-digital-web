import Button from '../components/Button';
import Contactus from '../components/container/Contactus';
import Footer from '../components/Footer';
import Gap from '../components/Gap';
import Navbar from '../components/Navbar';
import OurTeams from '../components/container/OurTeams';
const Teams = () => {
  return (
    <div className="teams container mx-auto w-auto">
      <Navbar />

      <Gap height="h-70px" />
      <div className="hero px-6 md:px-16 lg:px-100px">
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
      <OurTeams />
      <Gap height="h-120px" />
      <Contactus />
      <Gap height="h-120px" />
      <Footer />
    </div>
  );
};

export default Teams;
