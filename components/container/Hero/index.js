import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from '../../Button';
import heroImage from '../../../public/images/brainstorming.png';
import axios from 'axios';
const Hero = () => {
  const [projectList, setProjectList] = useState([]);
  const consumeAPI = async () => {
    const data = await axios.get(
      'http://localhost:8000/api/v1/client/projects',
    );
    setProjectList(data.data);
  };
  useEffect(() => {
    consumeAPI();
  }, []);
  return (
    <div className="hero px-6 flex flex-col mt-70px  items-center md:px-16 lg:px-40 xl:px-200px">
      <div className="hero-content flex flex-col items-center">
        <h1 className="text-2xl text-dark-blue-primary font-primary font-semibold text-center md:text-4xl lg:text-5xl xl:text-64px">
          We Create Projects,
          <br /> For your company
        </h1>
        <p className="text-gray-b1 text-xs text-center w-3/4 font-secondary  mt-2.5 mb-9 md:text-sm xl:text-base md:w-7/12 lg:w-8/12 xl:w-3/6">
          Membantu meningkatkan kualitas perusahaan anda dengan layanan
          pembuatan aplikasi ataupun web dari kami, serta layanan untuk
          maintenance aplikasi anda dengan performa terbaik
        </p>
      </div>
      <Button
        text="Get Started"
        color="primary"
        type="submit"
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
  );
};

export default Hero;
