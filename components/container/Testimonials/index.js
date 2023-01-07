import React, { useCallback, useEffect, useState } from 'react';
import ClientTestimoni from '../../ClientTestimoni';
import { getTestimonials } from '../../../config/api/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Testimonials = () => {
  const [testimoni, setTestimoni] = useState([]);
  let [testimoniIndex, setTestimoniIndex] = useState(0);
  const getClientTestimoni = useCallback(async () => {
    const data = await getTestimonials();
    setTestimoni(data.testimonials);
  }, [getTestimonials]);

  useEffect(() => {
    getClientTestimoni();
  }, []);

  // const swiper = new Swiper('.swiper', {
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });

  // const nextSlide = () => {
  //   const newIndex =
  //     testimoniIndex === testimoni.length - 1 ? 0 : testimoniIndex + 1;
  //   setTestimoniIndex(newIndex);
  // };

  // const previousSlide = () => {
  //   const newIndex =
  //     testimoniIndex === 0 ? testimoni.length - 1 : testimoniIndex - 1;
  //   setTestimoniIndex(newIndex);
  // };
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <div className="testimonials flex flex-col items-center px-6 md:px-100px lg:px-120px ">
      <span className="font-primary text-sm text-gray-b1 text-center">
        Testimonials
      </span>
      <h2 className="font-primary font-semibold text-2xl text-center text-dark-blue-primary mt-3 md:text-3xl lg:text-4xl xl:text-5xl">
        Pendapat <span className="text-blue-primary">Klien</span> <br /> tentang
        kami
      </h2>
      {/* {testimoni.map((testi, index) => {
          if (testimoniIndex === index) {
            return (
              <ClientTestimoni
                key={testi._id}
                name={testi.clientName}
                from={testi.clientFrom}
                clientSay={testi.message}
              />
            );
          }
        })} */}
      <Swiper
        className=" w-full container mx-auto "
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 8000,
        }}
      >
        {testimoni.map((testi, index) => {
          return (
            <SwiperSlide key={testi.id} className="lg:flex lg:justify-center  ">
              <ClientTestimoni
                name={testi.clientName}
                from={testi.clientFrom}
                clientSay={testi.message}
              />
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* <button
          onClick={() => {
            nextSlide();
            console.log('Bertambah ', testimoniIndex);
          }}
        >
          Tambah
        </button>
        <button
          onClick={() => {
            previousSlide();
            console.log('Berkurang ', testimoniIndex);
          }}
        >
          Kurang
        </button> */}
      {/* {renderTestimoni()} */}
      {/* <ClientTestimoni
          key={testimoni[testimoniIndex]._id}
          name={testimoni[testimoniIndex].clientName}
          from={testimoni[testimoniIndex].clientFrom}
          clientSay={testimoni[testimoniIndex].message}
        /> */}
    </div>
  );
};

export default Testimonials;
