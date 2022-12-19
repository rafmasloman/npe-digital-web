import Image from 'next/image';
import Button from '../Button';
import Gap from '../Gap';

const Contactus = () => {
  return (
    <div className="contact-us bg-contact-us bg-cover bg-fixed bg-no-repeat px-6 py-10 lg:px-200px lg:py-32 flex flex-col items-center ">
      <h1 className="text-2xl  text-white  font-primary font-semibold text-center md:text-4xl lg:text-5xl xl:text-64px">
        Pengen buat aplikasi untuk project perusahaan anda?
      </h1>
      <p className="text-sm text-white text-center w-3/4 font-secondary  mt-6 mb-9 md:text-base xl:text-lg md:w-7/12 lg:w-8/12 xl:w-5/12">
        Segera konsultasikan kebutuhan anda Dapatkan solusi terbaik dari kami
        untuk mewujudkan digitalisasi perusahaan semakin optimal
      </p>
      <Gap height="h-4 lg:h-12" />
      <Button text="Buat Sekarang" color="primary" />
    </div>
  );
};

export default Contactus;
