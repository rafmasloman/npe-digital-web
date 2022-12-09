import Image from 'next/image';
import quoteIcon from '../../public/icons/db_quote.svg';
const ClientTestimoni = ({ clientSay, name, from }) => {
  return (
    <div className="bg-gray-testimoni font-primary px-6 py-5 mt-8 rounded-2xl xl:mt-50px md:px-50px  lg:py-10">
      <Image
        alt="Double Quote Icons"
        className="w-9 h-9 lg:w-14 lg:h-14"
        src={quoteIcon}
      />
      <p className=" text-sm mt-5 lg:text-2xl lg:mt-30px">{clientSay}</p>
      <div className="client-identity flex flex-col items-end text-sm">
        <h5 className="font-semibold mt-5 lg:mt-30px lg:text-2xl">{name}</h5>
        <h6 className=" lg:text-xl">{from}</h6>
      </div>
    </div>
  );
};

export default ClientTestimoni;
