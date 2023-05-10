import axios, { AxiosError } from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: { key: 'd8af425e986245adb3d0db1099159a4a' },
});

export { AxiosError };
