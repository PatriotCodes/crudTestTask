import { CREATE_RECIPE, DELETE_RECIPE, LOADING, GET_ALL_RECIPES } from '../constants/actionTypes';

let initialState = { recipes: [], loading: true };

export default recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES: {
            state = Object.assign({}, state, { recipes: action.recipes, loading: false });
            return state;
        }
        case CREATE_RECIPE: {
            return Object.assign({}, state, {
                recipes: [
                    ...state.recipes,
                    {
                        _id: action.response._id,
                        title: action.response.title,
                        text: action.response.text,
                        categoryId: action.response.categoryId,
                    }
                ],
                loading: false
            });
        }
        case LOADING: {
            return state;
        }
        case DELETE_RECIPE: {
            return {
                ...state,
                recipes: state.recipes.filter((item, index) => action.id !== item._id)
            }
        }
        default:
            return state;
    }
};