import React, { useCallback, useEffect, useState } from 'react';
import ProjectShowcase from '../../ProjectShowcase';
import Gap from '../../Gap';
import Button from '../../Button';
import { getProjects } from '../../../config/api/client';

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
      <div className="project-list w-full flex flex-col items-center">
        {projectList.map((project) => {
          return (
            <ProjectShowcase
              key={project._id}
              name={project.title}
              desc={project.description}
              imgUrl="/images/project-01.png"
            />
          );
        })}

        {/* <Gap height="h-70px" />
        <ProjectShowcase
          name="Furniture App"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
          imgUrl="/images/project-02.png"
        /> */}
      </div>
      <Gap height="h-14 lg:h-100px" />
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
