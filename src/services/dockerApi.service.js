import axios from 'axios';

const dockerApi = axios.create({
  baseURL: process.env.REACT_APP_DOCKER_URL,
});

dockerApi.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 404) {
      throw new Error('Serviço ou recurso não encontrado.');
    }

    return Promise.reject(error);
  },
);

export { dockerApi };
