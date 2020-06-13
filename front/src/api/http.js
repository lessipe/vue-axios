import axios from 'axios';
import store from '@/store';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API
});

instance.interceptors.request.use(function (config) {
  if (store.state.auth.token !== null) {
    config['headers'] = {
      Authorization: `Bearer ${store.state.auth.token}`
    };
  }

  return config;
});

instance.interceptors.response.use(function (response) {
  store.commit('error/setValidationError', {});

  return response;
}, function (error) {
  if (error.response.status === 422) {
    store.commit('error/setValidationError', error.response.data.data);
  } else {
    return Promise.reject(error);
  }
});

export default instance;