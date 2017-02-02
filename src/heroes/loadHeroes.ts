import * as redux from 'redux';

import { fetchHeroes } from '../api';

export const enum FetchHeroes {
    Request,
    Success,
    Failure
}

const request = () => ({
  type: FetchHeroes.Request
});

const success = (heroes: any[]) => ({
  type: FetchHeroes.Success,
  heroes
});

const failure = (error: any) => ({
  type: FetchHeroes.Failure,
  error
});

const loadHeroes = () => {
  return (dispatch: redux.Dispatch<any>) => {
    dispatch(request());

    return fetchHeroes()
      .then(res => dispatch(success(res.data.results)))
      .catch(error => dispatch(failure(error)));
  };
};

export default loadHeroes;
