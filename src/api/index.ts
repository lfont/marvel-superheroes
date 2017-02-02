import * as promise from 'es6-promise';
promise.polyfill();

import * as fetch from 'isomorphic-fetch';
import * as _ from 'lodash';

import getUrlData from './url-data';

const expandUrl = (path: string): string => {
  const {host, query} = getUrlData();
  const queryString = _.reduce(query, (acc, value, key) => {
    return acc + (acc ? '&': '') + `${key}=${value}`;
  }, '');
  return `http://${host}${path}${queryString ? '?' : ''}${queryString}`;
};

export const fetchHeroes = (): Promise<any> => {
  const url = expandUrl('/v1/public/characters');
  return fetch(url)
      .then(response => response.json())
      .then(json => {
        if (json.code === 200) {
          return json;
        }

        throw json;
      });
};

export const fetchHero = (id: number): Promise<any> => {
  const url = expandUrl(`/v1/public/characters/${id}`);
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      if (json.code === 200) {
        return json;
      }

      throw json;
    });
};
