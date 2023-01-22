import Head from 'next/head';
import React, { use, useCallback, useEffect, useState } from 'react';
import Button from '../components/Button';
import CategoriesProject from '../components/CategoriesProject';
import Contactus from '../components/container/Contactus';
import ProjectFeatured from '../components/container/ProjectFeatured';
import Footer from '../components/Footer';
import Gap from '../components/Gap';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { getProjects, getServices } from '../config/api/client';

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const [categoryServices, setCategoryServices] = useState([]);
  const [categoryProject, setCategoryProject] = useState('all');
  const [activeButton, setActiveButton] = useState('');

  const getProjectsList = useCallback(async () => {
    const data = await getProjects();
    setProjectList(data);
  }, [getProjects]);

  const getCategoryService = useCallback(async () => {
    const data = await getServices();

    setCategoryServices(data);
  }, [getServices]);

  useEffect(() => {
    getProjectsList();
    getCategoryService();
  }, []);

  // const categoryFilter = (category) => {
  //   const filterCategory = projectList.filter((project) => {
  //     return project.category.name === 'Mobile Apps';
  //   });
  //   return filterCategory;
  // };

  return (
    <div className="projects container mx-auto w-auto">
      <Head>
        <link rel="npe icon" href="/illustrations/logonpe.svg" />
        <title>Project - Portfolio dari NPE Digital</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      {console.log(categoryServices)}
      <div className="hero flex flex-col mt-70px items-center ">
        <div className="hero-content flex flex-col items-center">
          <h1 className="text-2xl text-dark-blue-primary font-primary font-semibold text-center md:text-4xl lg:text-5xl xl:text-64px">
            Portfolio <span className="text-blue-primary">Kami</span>
          </h1>
          <p className="text-dark-blue-primary  text-xs text-center w-3/4 font-primary  mt-2.5 mb-9 md:text-sm xl:text-base   ">
            Aplikasi dan Website yang pernah dikerjakan oleh Tim NPE, ayo bangun
            aplikasi anda bersama NPE Digital
          </p>
        </div>
      </div>

      {/* Projects Card */}
      <div className="projects-container  px-6 md:px-16 lg:px-100px ">
        {/* <CategoriesProject /> */}
        <div className="flex items-center w-full justify-center">
          <Button
            text="Semua"
            type="filter"
            action={() => {
              setCategoryProject('All'.toLowerCase());
              if (activeButton !== 'active') {
                setActiveButton('active');
              } else {
                setActiveButton('');
              }
            }}
            status={categoryProject == 'all' ? 'active' : ''}
          />
          {categoryServices.map((service) => {
            return (
              <>
                <Gap width="w-10" />
                <Button
                  key={service._id}
                  text={service.name}
                  type="filter"
                  action={() => {
                    setCategoryProject(service.name.toLowerCase());
                    if (activeButton !== 'active') {
                      setActiveButton('active');
                    } else {
                      setActiveButton('');
                    }
                  }}
                  status={
                    categoryProject.includes(service.name.toLowerCase())
                      ? 'active'
                      : ''
                  }
                />
              </>
            );
          })}
          {/* <Button
            text="Semua"
            type="filter"
            action={() => {
              setCategoryProject('All'.toLowerCase());
              if (activeButton !== 'active') {
                setActiveButton('active');
              } else {
                setActiveButton('');
              }
            }}
            status={categoryProject == 'all' ? 'active' : ''}
          />
          <Gap width="w-16" />
          <Button
            text="Mobile"
            type="filter"
            action={() => {
              setCategoryProject('Mobile Apps'.toLowerCase());
              if (activeButton !== 'active') {
                setActiveButton('active');
              } else {
                setActiveButton('');
              }
            }}
            status={
              categoryProject == 'Mobile Apps'.toLowerCase() ? 'active' : ''
            }
          />
          <Gap width="w-16" />
          <Button
            text="Website"
            type="filter"
            action={() => {
              setCategoryProject('Website'.toLowerCase());
              if (activeButton !== 'active') {
                setActiveButton('active');
              } else {
                setActiveButton('');
              }
            }}
            status={categoryProject == 'Website'.toLowerCase() ? 'active' : ''}
          /> */}
        </div>
        <Gap height="h-12" />
        {/* <div className="project-list grid gap-10 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-8 2xl:gap-24  justify-items-center"> */}
        <ProjectFeatured category={categoryProject} projectList={projectList} />
        {/* </div> */}
      </div>

      <Gap height="h-120px" />
      <Contactus />

      <Gap height="h-120px" />
      <Footer />
    </div>
  );
};

export default Projects;
