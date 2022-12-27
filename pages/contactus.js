import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Gap from '../components/Gap';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-contact-us-page bg-cover  bg-fixed bg-no-repeat bg-center w-full">
        <Navbar />
        <Gap height="h-70px" />
        <div className="hero  lg:flex px-6 md:px-16 lg:px-100px lg:flex-row ">
          <div className="hero-content ">
            <h1 className="text-3xl text-white font-primary font-semibold  md:text-4xl lg:text-5xl xl:text-64px">
              Contact us
            </h1>
            <Gap height="h-5 lg:h-30px" />
            <p className="text-white text-base font-secondary w-full mt-2.5 mb-9 md:text-sm xl:text-base lg:w-3/5  ">
              Jangan ragu untuk menghubungi kami jika Anda membutuhkan
              penjelasan yang lebih rinci langsung dari tim kami
            </p>

            <Gap height="h-5 lg:h-100px" />
            <div className="flex">
              <Image src={'/icons/instagram_ic.svg'} width={36} height={36} />
              <Gap width="w-8" />
              <Image src={'/icons/facebook_ic.svg'} width={36} height={36} />
            </div>
            <Gap height="h-50px" />
          </div>
          <div className="relative w-full">
            <Form />
          </div>

          {/* <div className="w-full flex justify-center">
          <Image
            src="/illustrations/mobile_il.svg"
            className="w-3/6 h-full "
            width={0}
            height={0}
            quality={100}
            alt="Mobile Development Illustrations"
          />
        </div> */}
        </div>
      </div>
      <Gap height="h-200px" />
      <Gap height="h-200px" />
      <Footer />
      <Gap height="h-70px" />
    </div>
  );
};

export default Contact;
