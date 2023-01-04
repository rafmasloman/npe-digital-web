import Image from 'next/image';
import quoteIcon from '../../public/icons/db_quote.svg';
const ClientTestimoni = ({ clientSay, name, from }) => {
  return (
    <div className="bg-gray-testimoni font-primary px-6 py-5 mt-8 rounded-2xl xl:mt-50px md:px-50px  lg:py-10 lg:w-7/12">
      <Image
        alt="Double Quote Icons"
        className="w-9 h-9 lg:w-10 lg:h-10"
        src={quoteIcon}
      />
      <p className=" text-sm mt-5 lg:text-lg w-fit lg:mt-30px h-1/2 bg-green-300">
        {clientSay}
      </p>
      <div className="client-identity flex flex-col justify-end bg-red-500 items-end text-sm">
        <h5 className="font-semibold mt-5 lg:mt-30px lg:text-lg">{name}</h5>
        <h6 className=" lg:text-base">{from}</h6>
      </div>
    </div>
  );
};

export default ClientTestimoni;
