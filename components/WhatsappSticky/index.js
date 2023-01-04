import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WhatsApp = () => {
  return (
    <div>
      <Link
        href="https://wa.me/6281342777362"
        className="fixed bottom-14 z-10 right-10 drop-shadow-md hover:drop-shadow-xl"
      >
        <Image
          src="/icons/whatsapp_sticky_ic.svg"
          alt="WhatsApp"
          className="w-10 scale-100 hover:scale-125 lg:w-14 transition"
          width={16}
          height={16}
        />
      </Link>
    </div>
  );
};

export default WhatsApp;
