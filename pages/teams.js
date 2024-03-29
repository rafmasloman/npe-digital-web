import Button from '../components/Button';
import Contactus from '../components/container/Contactus';
import Footer from '../components/Footer';
import Gap from '../components/Gap';
import Navbar from '../components/Navbar';
import OurTeams from '../components/container/OurTeams';
import Head from 'next/head';
const Teams = () => {
  return (
    <div className="teams container mx-auto w-auto">
      <Head>
        <link rel="npe icon" href="/illustrations/logonpe.svg" />
        <title>
          Our Teams - Bangun Aplikasi anda dengan team yang berpengalaman di
          bidangnya
        </title>
        <meta
          name="description"
          content="NPE Digital Teams dengan member yang memiliki jam terbang luas"
        />
      </Head>
      <Navbar />

      <Gap height="h-70px" />
      <div className="hero px-6 md:px-16 lg:px-100px">
        <div className="hero-content   flex flex-col items-center ">
          <h1 className="text-2xl text-dark-blue-primary font-primary font-semibold  md:text-4xl lg:text-5xl xl:text-64px">
            <span className="text-blue-primary">NPE Digital</span> Team
          </h1>
          <Gap height="h-1.5" />
          <p className="text-dark-blue-primary text-center font-primary w-full  lg:w-7/12  mt-2.5 mb-9  text-sm xl:text-base   ">
            Kami Tim NPE Digital hadir untuk menyediakan jasa layanan digital
            secara profesional dengan berbagai pengalaman kami dan pengembangan
            sumber daya manusia secara berkala untuk menciptakan tim yang
            berkualitas.
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
