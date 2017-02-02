import * as crypto from 'crypto';

import { apiKey, apiPrivateKey } from '../config';

const getUrlData = () => {
  const timestamp = Date.now();
    const hash = crypto
      .createHash('md5')
      .update(`${timestamp}${apiPrivateKey}${apiKey}`)
      .digest('hex');

  return {
      host: 'gateway.marvel.com',
      query: {
          ts: timestamp,
          apikey: apiKey,
          hash
      }
  };
};

export default getUrlData;
