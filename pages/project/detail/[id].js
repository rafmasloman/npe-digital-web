import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import Contactus from '../../../components/container/Contactus';
import Footer from '../../../components/Footer';
import Gap from '../../../components/Gap';
import Navbar from '../../../components/Navbar';
import ProjectShowcase from '../../../components/ProjectShowcase';
import { getDetailProject } from '../../../config/api/client';
const Detail = () => {
  const { query, isReady } = useRouter();
  const [projectDetail, setProjectDetail] = useState({
    title: '',
    year: '',
    description: '',
    client: '',
    thumbnail: '',
  });

  const getProjectDetail = useCallback(async (id) => {
    const data = await getDetailProject(id);
    // console.log(data);
    setProjectDetail(data);
  }, []);

  useEffect(() => {
    if (isReady) {
      getProjectDetail(query.id);
    } else {
      console.log('router tidak tersedia');
    }
  }, [isReady]);
  return (
    <div>
      <Navbar />
      <Gap height="lg:h-70px" />
      <div className="hero px-6 flex flex-col mt-70px  items-center md:px-16 lg:px-40 xl:px-200px">
        {console.log(projectDetail)}
        <ProjectShowcase
          type="full"
          name={projectDetail.title}
          client={projectDetail.client}
          year={projectDetail.year}
          imgUrl="/images/project-02.png"
          desc={projectDetail.description}
        />
      </div>
      <Gap height="h-120px" />
      <Contactus />
      <Gap height="h-120px" />
      <Footer />
      <Gap height="h-70px" />
      {/* {getDetailProject(id)} */}
    </div>
  );
};

export default Detail;
