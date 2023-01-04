import React, { useCallback, useEffect, useState } from 'react';
import ClientTestimoni from '../../ClientTestimoni';
import { getTestimonials } from '../../../config/api/client';

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

  // const renderTestimoni = () => {
  //   return testimoni.filter((testi, i) => {
  //     return i === testimoniIndex ? (
  //       <ClientTestimoni
  //         key={testi._id}
  //         name={testi.clientName}
  //         from={testi.clientFrom}
  //         clientSay={testi.message}
  //       />
  //     ) : (
  //       ''
  //     );
  //   });
  // };

  const nextSlide = () => {
    return (testimoniIndex =
      testimoniIndex === testimoni.length - 1
        ? 0
        : setTestimoniIndex(testimoniIndex + 1));
  };

  // const previousSlide = () => {
  //   let count =
  //     testimoniIndex < 0
  //       ? testimoni.length - 1
  //       : setTestimoniIndex(testimoniIndex - 1);
  //   return count;
  // };

  return (
    <div className="testimonials flex flex-col items-center px-6 md:px-100px lg:px-120px ">
      <span className="font-primary text-sm text-gray-b1 text-center">
        Testimonials
      </span>
      <h2 className="font-primary font-semibold text-2xl text-center text-dark-blue-primary mt-3 md:text-3xl lg:text-4xl xl:text-5xl">
        Pendapat <span className="text-blue-primary">Klien</span> <br /> tentang
        kami
      </h2>
      <div className="lg:flex  bg-red-500 w-full">
        {testimoni.map((testi, index) => {
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
        })}
        <button
          onClick={() => {
            nextSlide();
            console.log(testimoniIndex);
          }}
        >
          Tambah
        </button>
        <button>Kurang</button>
        {/* {renderTestimoni()} */}
        {/* <ClientTestimoni
          key={testimoni[testimoniIndex]._id}
          name={testimoni[testimoniIndex].clientName}
          from={testimoni[testimoniIndex].clientFrom}
          clientSay={testimoni[testimoniIndex].message}
        /> */}
      </div>
    </div>
  );
};

export default Testimonials;
