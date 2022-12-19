import Image from 'next/image';
import Link from 'next/link';

const TeamCard = ({ name, role, imgUrl, col }) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={imgUrl} width={270} height={300} quality={100} />
      <div className="shadow-2xl  bg-white w-fit px-10 py-3 -mt-8 rounded-lg text-center">
        <h4 className="font-primary font-medium text-xl">{name}</h4>
        <p className="font-secondary text-gray-b1 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
