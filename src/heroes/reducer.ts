import * as _ from 'lodash';

import { FetchHeroes } from './loadHeroes';

const heroes = (state = {
    isFetching: false,
    data: [],
    error: null
}, action: any) => {
    switch (action.type) {

    case FetchHeroes.Request:
        return _.merge({}, state, {
            isFetching: true
        });

    case FetchHeroes.Success:
        return _.merge({}, state, {
            isFetching: false,
            data: action.heroes,
            error: null
        });

    case FetchHeroes.Failure:
        return _.merge({}, state, {
            isFetching: false,
            data: [],
            error: action.error
        });

    default:
        return state;
    }
};

export default heroes;
