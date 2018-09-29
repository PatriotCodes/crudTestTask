import {
    CREATE_RECIPE,
    DELETE_RECIPE,
    EDIT_RECIPE,
    LOADING,
    GET_ALL_RECIPES,
    RECIPES_BY_CAT
} from '../constants/actionTypes';

let initialState = {recipes: [], loading: true};

export default recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES: {
            state = Object.assign({}, state, {recipes: action.recipes, loading: false});
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
        case EDIT_RECIPE: {
            return {
                ...state,
                recipes: updateObjectInArray(state.recipes, action.response)
            }
        }
        case RECIPES_BY_CAT: {
            state = Object.assign({}, state, {recipes: action.recipes, loading: false});
            return state;
        }
        default:
            return state;
    }
};

function updateObjectInArray(array, action) {
    return array.map((item, index) => {
        if (item._id !== action._id) {
            return item;
        }
        return {
            _id: action._id,
            title: action.title,
            text: action.text,
            categoryId: action.categoryId,
        };
    });
}