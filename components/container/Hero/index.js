import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from '../../Button';
import heroImage from '../../../public/images/brainstorming.png';
import axios from 'axios';

import { landingPage } from '../../../config/api/client';
import Gap from '../../Gap';
const Hero = () => {
  const ScrollStarted = () => {
    window.scrollTo({
      top: 120,
      behavior: 'smooth',
    });
  };

  return (
    <div className="hero px-6 flex flex-col mt-70px  items-center md:px-16 lg:px-40 xl:px-200px">
      <div className="hero-content flex flex-col items-center">
        <h1 className="text-2xl text-dark-blue-primary font-primary font-semibold text-center md:text-4xl lg:text-5xl xl:text-64px">
          Terdepan dalam Pelayanan
          <br />
          <span className="text-blue-primary">Digitalisasi</span> dan{' '}
          <span className="text-blue-primary">Teknologi</span>
        </h1>
        <Gap height="h-5" />
        <p className="text-dark-blue-primary text-sm text-center w-full font-primary  mt-2.5 mb-9 md:text-sm xl:text-lg md:w-7/12 lg:w-8/12 xl:w-3/5">
          Membantu meningkatkan kualitas perusahaan anda dengan layanan
          pembuatan aplikasi ataupun web dari kami, serta layanan untuk
          maintenance aplikasi anda dengan performa terbaik
        </p>
      </div>
      <Button
        text="Get Started"
        color="primary"
        type="submit"
        action={ScrollStarted}
      />
      <Image
        src={heroImage}
        className="object-cover mt-12 w-auto md:max-w-screen-sm xl:max-w-screen-lg"
        alt="Brainstorming"
        priority={true}
      />
    </div>
  );
};

export default Hero;
