import Image from 'next/image';
import FooterLink from '../FooterLinks';
import Gap from '../Gap';

const Footer = () => {
  return (
    <div className="lg:flex">
      <div className="flex-initial w-3/5 ">
        <h4 className="font-primary text-3xl font-semibold">
          NPE <span className="text-blue-primary">Digital</span>
        </h4>
        <p className="font-secondary text-dark-blue-primary md:w-3/4 mt-2.5">
          Website yang menyedikan jasa membuat website,aplikasi dan lain-lain
          dengan tim yang berpengalaman
        </p>
        <div className="social-media flex mt-5">
          <Image
            src="/icons/facebook_ic.svg"
            alt="Facebook"
            className="facebook_icon mr-5"
            width={28}
            height={28}
          />
          <Image
            src="/icons/instagram_ic.svg"
            alt="Instagram"
            width={28}
            height={28}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-7 mt-10 lg:mt-0 xl:gap-1 xl:flex xl:flex-initial xl:w-full lg:justify-between  ">
        {/* <Gap width="w-12" /> */}
        <FooterLink
          title="Quick Link"
          linkNames={['Home', 'Services', 'Projects', 'About']}
        />
        {/* <Gap width="w-12" /> */}
        <FooterLink
          title="Contact"
          linkNames={[
            'Email : npedigital@gmail.com',
            'No.Telp : +628213229112',
          ]}
          column="col-span-2"
        />

        <FooterLink
          title="Jam Kerja"
          linkNames={['Senin-Jumat 00:00-24:00']}
          column="col-span-2"
        />
      </div>
    </div>
  );
};

export default Footer;
