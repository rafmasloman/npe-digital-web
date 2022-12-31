import React, { useCallback, useEffect, useState } from 'react';
import ClientTestimoni from '../../ClientTestimoni';
import { getTestimonials } from '../../../config/api/client';
const Testimonials = () => {
  const [testimoni, setTestimoni] = useState([]);
  const getClientTestimoni = useCallback(async () => {
    const data = await getTestimonials();
    setTestimoni(data.testimonials);
  }, [getTestimonials]);

  useEffect(() => {
    getClientTestimoni();
  }, []);

  return (
    <div className="testimonials flex flex-col items-center px-6 md:px-100px lg:px-120px xl:px-270px">
      <span className="font-primary text-sm text-gray-b1 text-center">
        Testimonials
        {console.log(testimoni)}
      </span>
      <h2 className="font-primary font-semibold text-2xl text-center text-dark-blue-primary mt-3 md:text-3xl lg:text-4xl xl:text-5xl">
        Pendapat <span className="text-blue-primary">Klien</span> <br /> tentang
        kami
      </h2>
      {testimoni.map((testi) => {
        return (
          <ClientTestimoni
            key={testi._id}
            name={testi.clientName}
            from={testi.clientFrom}
            clientSay={testi.message}
          />
        );
      })}
    </div>
  );
};

export default Testimonials;
