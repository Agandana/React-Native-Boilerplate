import axios from 'axios';

const serviceHost = process.env.API_URL;

const apiClient = axios.create({
  baseURL: serviceHost,
});

apiClient.interceptors.request.use(
  config => {
    return config;
  },
  err => Promise.reject(err),
);

apiClient.interceptors.response.use(
  response => {
    const {
      data,
      config: { url },
    } = response;
    if (data && url?.includes('auth')) {
      const { info, status } = data;
      if (status === 'error') {
        console.log('Error : ', info.message || 'Error occurred');
      }
    }
    return Promise.resolve(response);
  },
  async error => {
    if (error.response) {
      if (error.response.status === 401) {
        return Promise.reject(error?.response?.data);
      }
    }
    return Promise.reject(error?.response?.data);
  },
);

export default apiClient;
