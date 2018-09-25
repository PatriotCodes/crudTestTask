import {CREATE_ARTICLE, DELETE_ARTICLE, LOADING} from '../constants/actionTypes';

let initialState = { articles: [], loading: true };

export default articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ARTICLE: {
            return state;
        }
        case LOADING: {
            return state;
        }
        case DELETE_ARTICLE: {
            return state;
        }
        default:
            return state;
    }
};