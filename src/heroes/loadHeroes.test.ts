import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as nock from 'nock';
import * as expect from 'expect';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const mockUrlData = () => {
  jest.mock('../api/url-data');

  const getUrlData = require('../api/url-data').default;
  getUrlData.mockImplementation(() => {
    return { host: 'localhost', query: {} };
  });

  return require('./loadHeroes');
};

describe('loadHeroes', () => {
  let loadHeroes: any, FetchHeroes: any;

  beforeAll(() => {
    const loadHeroesModule = mockUrlData();
    loadHeroes = loadHeroesModule.default;
    FetchHeroes = loadHeroesModule.FetchHeroes;
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FetchHeroes.Success when fetching heroes has been done', () => {
    nock('http://localhost/')
      .get('/v1/public/characters')
      .reply(200, { code: 200, data: { results: ['do something'] }});

    const expectedActions = [
      { type: FetchHeroes.Request },
      { type: FetchHeroes.Success, heroes: ['do something'] }
    ];

    const store = mockStore({ heroes: [] });

    return store.dispatch(loadHeroes())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
