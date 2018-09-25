import { CREATE_CATEGORY, DELETE_CATEGORY, LOADING } from '../constants/actionTypes';

let initialState = { categories: [], loading: true };

export default categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
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