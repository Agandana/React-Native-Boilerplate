import { api } from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.query({
      query: () => '/auth/login',
    }),
  }),
  overrideExisting: false,
});
export const { useLazyFetchOneQuery } = userApi;
