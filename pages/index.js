import Navbar from '../components/Navbar';

import Gap from '../components/Gap';
import Contactus from '../components/container/Contactus';
import Footer from '../components/Footer';
import Hero from '../components/container/Hero';
import Testimonials from '../components/container/Testimonials';
import Portfolio from '../components/container/Portfolio';
import Services from '../components/container/Services';
import WhatsApp from '../components/WhatsappSticky';
import Head from 'next/head';
import { Fade } from 'react-reveal';

// import project01 from '../public/'

export default function Home() {
  return (
    <div className="homepage w-auto ">
      <Head>
        <title>NPE Digital - Make your Digital Company</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <Hero />
      <Gap height="h-120px" />
      <WhatsApp />
      {/* Services */}
      <Fade top>
        <Services />
      </Fade>
      <Gap height="h-120px" />

      {/* Company Portfolio */}

      <Portfolio />

      <Gap height="h-120px" />

      <Testimonials />

      <Gap height="h-120px" />

      <Contactus />

      <Gap height="h-120px" />

      <Footer />

      <Gap height="h-70px" />
    </div>
  );
}
