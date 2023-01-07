import React, { useCallback, useEffect, useState } from 'react';
import ProjectShowcase from '../../ProjectShowcase';
import Gap from '../../Gap';
import Button from '../../Button';
import { getProjects } from '../../../config/api/client';
import CategoriesProject from '../../CategoriesProject';
import { Fade } from 'react-reveal';

const Portfolio = () => {
  const [projectList, setProjectList] = useState([]);
  const getProjectsList = useCallback(async () => {
    const data = await getProjects();
    setProjectList(data);
  }, [getProjects]);

  useEffect(() => {
    getProjectsList();
  }, []);

  return (
    <div className="company-portfolio flex flex-col items-center px-6 md:px-16 lg:px-100px">
      <div className="mb-10 lg:mb-70px">
        <h2 className="font-primary font-semibold text-2xl text-center text-dark-blue-primary mt-3 md:text-3xl lg:text-4xl xl:text-5xl">
          Company <span className="text-blue-primary">Portfolio</span>
        </h2>
      </div>

      <div className="project-list container mx-auto w-full flex flex-col items-center">
        {projectList.map((project) => {
          return (
            <Fade key={project._id}>
              <ProjectShowcase
                key={project._id}
                name={project.title}
                desc={project.description}
                imgUrl={`${process.env.NEXT_PUBLIC_IMG}/projects/${project.thumbnail}`}
                url={project.urlProject}
              />
            </Fade>
          );
        })}

        {/* <Gap height="h-70px" />
        <ProjectShowcase
          name="Furniture App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
          imgUrl="/images/project-02.png"
        /> */}
      </div>
      <Gap height=" lg:h-100px" />
      <Button
        color="secondary"
        text="Lihat Semua"
        url="/projects"
        action={(e) => {
          console.log(e.target);
        }}
      />
    </div>
  );
};

export default Portfolio;
