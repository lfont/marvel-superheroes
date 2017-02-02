import * as redux from 'redux';

import { fetchHero } from '../api';

export const enum FetchHero {
    Request,
    Success,
    Failure
}

const request = (id: number) => ({
  type: FetchHero.Request,
  id
});

const success = (hero: any) => ({
  type: FetchHero.Success,
  hero
});

const failure = (id: number, error: any) => ({
  type: FetchHero.Failure,
  id,
  error
});

const loadHero = (id: number) => {
  return (dispatch: redux.Dispatch<any>) => {
    dispatch(request(id));

    return fetchHero(id)
      .then(res => dispatch(success(res.data.results[0])))
      .catch(error => dispatch(failure(id, error)));
  };
};

export default loadHero;
