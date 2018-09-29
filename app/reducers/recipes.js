import { CREATE_RECIPE, DELETE_RECIPE, LOADING, GET_ALL_RECIPES } from '../constants/actionTypes';

let initialState = { recipes: [], loading: true };

export default recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES: {
            state = Object.assign({}, state, { recipes: action.recipes, loading: false });
            return state;
        }
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