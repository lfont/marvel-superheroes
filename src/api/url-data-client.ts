import { host, port } from '../config';

const getUrlData = () => {
  return {
    host: `${host}:${port}`,
    query: {}
  };
};

export default getUrlData;
