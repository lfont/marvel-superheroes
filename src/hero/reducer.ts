import * as _ from 'lodash';

import { FetchHero } from './loadHero';

const hero = (state = {
    isFetching: false,
    data: null,
    error: null
}, action: any) => {
    switch (action.type) {

    case FetchHero.Request:
        return _.merge({}, state, {
            isFetching: true
        });

    case FetchHero.Success:
        return _.merge({}, state, {
            isFetching: false,
            data: action.hero,
            error: null
        });

    case FetchHero.Failure:
        return _.merge({}, state, {
            isFetching: false,
            data: null,
            error: action.error
        });

    default:
        return state;
    }
};

export default hero;
