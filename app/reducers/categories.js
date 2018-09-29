import { CREATE_CATEGORY, DELETE_CATEGORY, GET_ALL_CATEGORIES, LOADING } from '../constants/actionTypes';

let initialState = { categories: [], loading: true };

export default categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES: {
            state = Object.assign({}, state, { categories: action.categories, loading: false });
            return state;
        }
        case CREATE_CATEGORY: {
            return state;
        }
        case LOADING: {
            return state;
        }
        case DELETE_CATEGORY: {
            return state;
        }
        default:
            return state;
    }
};