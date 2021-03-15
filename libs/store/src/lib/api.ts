import axios, { AxiosRequestConfig } from 'axios';

const configHandler = (config: AxiosRequestConfig) => {
  if (localStorage) {
    const token = localStorage.getItem('token');
    const impersonateToken = localStorage.getItem('impersonateToken');
    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (impersonateToken) {
      config.headers.Authorization = `Bearer ${impersonateToken}`;
    }
  }
  return config;
};

axios.interceptors.request.use(configHandler);
