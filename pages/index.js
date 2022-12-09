import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import ProjectShowcase from '../components/ProjectShowcase';

import heroImage from '../public/images/brainstorming.png';
import mobileIcons from '../public/icons/mobile_ic.svg';
import websiteIcons from '../public/icons/website_ic.svg';
import courseIcons from '../public/icons/course_ic.svg';
import Gap from '../components/Gap';
import ClientTestimoni from '../components/ClientTestimoni';
import Contactus from '../components/Contactus';

// import project01 from '../public/'

export default function Home() {
  return (
    <div className="mb-20 w-auto">
      <Navbar />
      <div className="hero px-6 flex flex-col mt-70px  items-center md:px-16 lg:px-40 xl:px-200px">
        <div className="hero-content flex flex-col items-center">
          <h1 className="text-2xl text-dark-blue-primary font-primary font-semibold text-center md:text-4xl lg:text-5xl xl:text-64px">
            We Create Projects,
            <br /> For your company
          </h1>
          <p className="text-gray-b1 text-xs text-center w-3/4 font-secondary  mt-2.5 mb-9 md:text-sm xl:text-base md:w-7/12 lg:w-8/12 xl:w-3/5">
            Membantu meningkatkan kualitas perusahaan anda dengan layanan
            pembuatan aplikasi ataupun web dari kami, serta layanan untuk
            maintenance aplikasi anda dengan performa terbaik
          </p>
        </div>
        <Button
          text="Get Started"
          btnType="primary"
          action={(e) => {
            alert(e.target);
          }}
        />
        <Image
          src={heroImage}
          className="object-cover mt-12 w-auto md:max-w-screen-sm xl:max-w-screen-lg"
          alt="Brainstorming"
          priority={true}
        />
      </div>

      <Gap height="h-120px" />

      {/* Services */}
      <div className="services flex flex-col items-center px-6 md:px-16 lg:px-100px ">
        <div className="flex flex-col items-center">
          <span className="font-primary text-sm text-gray-b1">
            Our Services
          </span>
          <h2 className="font-primary font-semibold text-2xl text-center text-dark-blue-primary mt-3 md:text-3xl lg:text-4xl xl:text-5xl">
            We provide best <br />{' '}
            <span className="text-blue-primary">services</span> for you
          </h2>
          <p className="service-content font-secondary text-center text-gray-b1 text-xs mt-4 md:text-sm md:w-2/3 desktop:w-2/4">
            Sebagai Softwarehouse yang berpengalaman, NPE Digital bukan hanya
            berfokus pada tahap awal implementasi, layanan yang kami berikan
            juga mencakup pelatihan, pendampingan dan sosialisasi terkait dengan
            teknologi/software yang diterapkan
          </p>
        </div>
        <div className="all-service flex flex-col lg:flex-row lg:justify-center  items-center w-full ">
          <ServiceCard
            title="Website"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
            urlImage={websiteIcons}
            url="/websiteDetail"
            width={90}
            height={90}
            colSpan={1}
          />
          <Gap width="w-200px" />
          <ServiceCard
            title="Mobile Apps"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
            urlImage="/icons/mobile_ic.svg"
            url="/mobileDetail"
            width={40}
            height={40}
            colSpan={1}
          />
          <Gap width="w-200px" />
          <ServiceCard
            title="Programming Course"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
            urlImage={courseIcons}
            url="/courseDetail"
            width={90}
            height={90}
            colSpan={1}
          />
        </div>
      </div>

      <Gap height="h-120px" />

      {/* Company Portfolio */}
      <div className="company-portfolio flex flex-col items-center px-6 md:px-16 lg:px-100px">
        <div className="mb-10 lg:mb-70px">
          <h2 className="font-primary font-semibold text-2xl text-center text-dark-blue-primary mt-3 md:text-3xl lg:text-4xl xl:text-5xl">
            Company <span className="text-blue-primary">Portfolio</span>
          </h2>
        </div>
        <div className="project-list w-full flex flex-col items-center">
          <ProjectShowcase
            name="Moviez Project"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
            imgUrl="/images/project-01.png"
          />
          <Gap height="h-70px" />
          <ProjectShowcase
            name="Furniture App"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
            imgUrl="/images/project-02.png"
          />
        </div>
        <Gap height="h-14 lg:h-100px" />
        <Button btnType="secondary" text="Lihat Semua" />
      </div>

      <Gap height="h-120px" />

      <div className="testimonials flex flex-col items-center px-6 md:px-100px lg:px-120px xl:px-270px">
        <span className="font-primary text-sm text-gray-b1 text-center">
          Testimonials
        </span>
        <h2 className="font-primary font-semibold text-2xl text-center text-dark-blue-primary mt-3 md:text-3xl lg:text-4xl xl:text-5xl">
          Pendapat <span className="text-blue-primary">Klien</span> <br />{' '}
          tentang kami
        </h2>
        <ClientTestimoni
          name="Fauzi Asham"
          from="Universitas Hasanuddin"
          clientSay="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat gravida dignissim nunc pulvinar mi ut quam. Lacinia hac egestas id ut nunc suscipit. Lacinia hac egestas id ut nunc suscipi"
        />
      </div>

      <Gap height="h-120px" />

      <div className="bg-contact-us bg-cover bg-no-repeat px-6 py-10 lg:px-200px lg:py-32">
        <Contactus />
      </div>
    </div>
  );
}
