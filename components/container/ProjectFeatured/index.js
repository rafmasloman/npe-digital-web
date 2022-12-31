import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import ProjectCard from '../../ProjectCard';
import { getProjects } from '../../../config/api/client';
const ProjectFeatured = ({ category }) => {
  const [projectList, setProjectList] = useState([]);
  const getProjectsList = useCallback(async () => {
    const data = await getProjects();
    setProjectList(data);
  }, [getProjects]);

  useEffect(() => {
    getProjectsList();
  }, []);

  return (
    <div className="project-list grid gap-10 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-8 2xl:gap-24  justify-items-center">
      {console.log(projectList)}
      {projectList.map((project) => {
        if (
          project.category.name.toLowerCase().includes('Website'.toLowerCase())
        ) {
          return (
            <ProjectCard
              key={project._id}
              bgUrl={`bg-[url('/images/project-01.png')]`}
              name={project.title}
              year={project.year}
              category={project.category.name}
              imgUrl="/icons/link.svg"
              href={`/project/detail/${project._id}`}
            />
          );
        }
        if (
          project.category.name
            .toLowerCase()
            .includes('Mobile Apps'.toLowerCase())
        ) {
          return (
            <ProjectCard
              key={project._id}
              bgUrl={`bg-[url('/images/project-01.png')]`}
              name={project.title}
              year={project.year}
              category={project.category.name}
              imgUrl="/icons/link.svg"
              href={`/project/detail/${project._id}`}
            />
          );
        } else {
          return (
            <ProjectCard
              key={project._id}
              bgUrl={`bg-[url('/images/project-01.png')]`}
              name={project.title}
              year={project.year}
              category={project.category.name}
              imgUrl="/icons/link.svg"
              href={`/project/detail`}
            />
          );
        }
      })}
    </div>
  );
};

export default ProjectFeatured;
