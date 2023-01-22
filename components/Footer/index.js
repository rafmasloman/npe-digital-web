import Image from 'next/image';
import Link from 'next/link';
import FooterLink from '../FooterLinks';
import Gap from '../Gap';

const Footer = () => {
  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-100px lg:flex">
      <div className="flex-initial w-full md:w-3/5 ">
        <h4 className="font-primary text-3xl font-semibold">
          NPE <span className="text-blue-primary">Digital</span>
        </h4>
        <p className="font-secondary text-dark-blue-primary w-full md:w-3/4 mt-2.5">
          Website yang menyedikan jasa membuat website,aplikasi dan lain-lain
          dengan tim yang berpengalaman
        </p>
        <div className="social-media flex mt-5">
          <Link href="https://www.linkedin.com/company/npe-digital/about/">
            <Image
              src="/icons/linkedin_ic.svg"
              alt="Linkedin"
              className="facebook_icon mr-5"
              width={28}
              height={28}
            />
          </Link>
          <Link href="https://www.instagram.com/npe.digital/">
            <Image
              src="/icons/instagram_ic.svg"
              alt="Instagram"
              width={28}
              height={28}
            />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-7 mt-10 lg:mt-0 xl:gap-1 xl:flex xl:flex-initial xl:w-full lg:justify-between  ">
        {/* <Gap width="w-12" /> */}
        <FooterLink
          title="Quick Link"
          linkNames={['Home', 'Projects', 'Teams', 'Contact']}
          href={['/', '/projects', 'teams', '/contact']}
          type="link"
        />
        {/* <Gap width="w-12" /> */}
        <FooterLink
          title="Contact"
          linkNames={[
            'Email : npedigital@gmail.com',
            'No.Telp : +6285342578304',
          ]}
          column="col-span-2"
        />

        <FooterLink
          title="Jam Kerja"
          linkNames={['Senin-Minggu 00:00-24:00']}
          column="col-span-2"
        />
      </div>
    </div>
  );
};

export default Footer;
