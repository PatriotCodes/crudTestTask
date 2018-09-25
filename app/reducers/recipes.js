import { CREATE_RECIPE, DELETE_RECIPE, LOADING } from '../constants/actionTypes';

let initialState = { recipes: [], loading: true };

export default recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_RECIPE: {
            return state;
        }
        case LOADING: {
            return state;
        }
        case DELETE_RECIPE: {
            return state;
        }
        default:
            return state;
    }
};