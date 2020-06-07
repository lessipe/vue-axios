import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API
});

export default instance;