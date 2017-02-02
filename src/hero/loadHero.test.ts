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

  return require('./loadHero');
};

describe('loadHero', () => {
  let loadHero: any, FetchHero: any;

  beforeAll(() => {
    const loadHeroModule = mockUrlData();
    loadHero = loadHeroModule.default;
    FetchHero = loadHeroModule.FetchHero;
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FetchHero.Success when fetching hero has been done', () => {
    nock('http://localhost/')
      .get('/v1/public/characters/10')
      .reply(200, { code: 200, data: { results: ['do something'] }});

    const expectedActions = [
      { type: FetchHero.Request, id: 10 },
      { type: FetchHero.Success, hero: 'do something' }
    ];

    const store = mockStore({ hero: null });

    return store.dispatch(loadHero(10))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
