import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Gap from '../components/Gap';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-contact-us-page bg-cover  bg-fixed bg-no-repeat bg-center w-full">
        <Head>
          <title>
            Contact NPE - Hubungi kami jika membutuhkan penjelasan langsung dari
            tim
          </title>
        </Head>
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
              <Link href="https://www.linkedin.com/company/npe-digital/about/">
                <Image
                  src="/icons/linkedin_ic.svg"
                  alt="Linkedin"
                  className="facebook_icon mr-5"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href="https://www.instagram.com/npe.digital/">
                <Image
                  src="/icons/instagram_ic.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </Link>
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
      <Gap height="h-64 lg:h-200px" />
      <Gap height="h-64 lg:h-200px" />
      <Gap height="h-64 lg:h-0" />
      <Gap height="h-64 lg:h-0" />
      <Footer />
      <Gap height="h-70px" />
    </div>
  );
};

export default Contact;
