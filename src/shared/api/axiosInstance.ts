import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_API_URL;
const token = import.meta.env.VITE_ACCESS_TOKEN;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});
