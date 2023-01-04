import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import ProjectCard from '../../ProjectCard';
import { getProjects } from '../../../config/api/client';
const ProjectFeatured = ({ category, projectList }) => {
  console.log(projectList);
  console.log(category);
  const categoryFilter = () => {
    const filterCategory = projectList.filter((project) => {
      return project.category.name.toLowerCase().includes(category);
    });
    return filterCategory;
  };

  console.log(categoryFilter());
  return (
    <div className="project-list grid gap-10 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-8 2xl:gap-24  justify-items-center">
      {category === 'all'
        ? projectList.map((project) => {
            return (
              <ProjectCard
                key={project._id}
                bgUrl={`${process.env.NEXT_PUBLIC_IMG}/projects/${project.thumbnail}`}
                name={project.title}
                year={project.year}
                category={project.category.name}
                imgUrl="/icons/link.svg"
                href={`/project/detail/${project._id}`}
              />
            );
          })
        : categoryFilter().map((project) => {
            return (
              <ProjectCard
                key={project._id}
                bgUrl={`${process.env.NEXT_PUBLIC_IMG}/projects/${project.thumbnail}`}
                name={project.title}
                year={project.year}
                category={project.category.name}
                imgUrl="/icons/link.svg"
                href={`/project/detail/${project._id}`}
              />
            );
          })}
    </div>
  );
};

export default ProjectFeatured;
