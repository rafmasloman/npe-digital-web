import axios from 'axios';

const getProjects = async () => {
  const PUBLIC_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = 'api/v1';
  const ENDPOINT = 'client/projects';
  const response = await axios.get(`${PUBLIC_API}/${API_VERSION}/${ENDPOINT}`);
  const result = response.data;
  return result.projects;
};

const getTeams = async () => {
  const PUBLIC_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = 'api/v1';
  const ENDPOINT = 'client/teams';
  const response = await axios.get(`${PUBLIC_API}/${API_VERSION}/${ENDPOINT}`);
  const result = response.data;
  return result;
};

const getMobileServices = async () => {
  const PUBLIC_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = 'api/v1';
  const ENDPOINT = 'client/services/mobile';
  const response = await axios.get(`${PUBLIC_API}/${API_VERSION}/${ENDPOINT}`);
  const result = response.data;
  return result;
};

const getWebsiteServices = async () => {
  const PUBLIC_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = 'api/v1';
  const ENDPOINT = 'client/services/website';
  const response = await axios.get(`${PUBLIC_API}/${API_VERSION}/${ENDPOINT}`);
  const result = response.data;
  return result;
};

const getDetailProject = async (id) => {
  const PUBLIC_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = 'api/v1';
  const ENDPOINT = `client/project/detail/${id}`;
  const URL = `${PUBLIC_API}/${API_VERSION}/${ENDPOINT}`;

  const response = await axios.get(`${PUBLIC_API}/${API_VERSION}/${ENDPOINT}`);
  const result = response.data;
  console.log(result.data);
  return result.project;
};

const getTestimonials = async () => {
  const PUBLIC_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = 'api/v1';
  const ENDPOINT = 'client/testimonials';
  const response = await axios.get(`${PUBLIC_API}/${API_VERSION}/${ENDPOINT}`);
  const result = response.data;
  return result;
};

module.exports = { getProjects, getDetailProject, getTeams, getTestimonials };
