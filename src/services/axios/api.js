import apiClient from '../axios';
import endpoint from './endpoints';

const urlBuilder = ({ query, urlApi }) => {
  if (query) {
    return Object.keys(query).reduce(
      (url, key) => url?.replace(`:${key}`, query[key]),
      urlApi,
    );
  }
  return urlApi;
};

export const API = (...args) => {
  const [urlMethod, params] = args;
  const [name, method] = urlMethod.split('.');

  const context = { ...endpoint[name][method], ...params };
  context.url = urlBuilder({ ...params, urlApi: endpoint[name][method]?.url });

  return apiClient(context);
};
