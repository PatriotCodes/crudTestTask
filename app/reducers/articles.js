import {
    ARTICLES_BY_CAT,
    CREATE_ARTICLE,
    DELETE_ARTICLE,
    GET_ALL_ARTICLES,
    LOADING,
} from '../constants/actionTypes';

let initialState = { articles: [], loading: true };

export default articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ARTICLES: {
            state = Object.assign({}, state, {articles: action.articles, loading: false});
            return state;
        }
        case CREATE_ARTICLE: {
            return Object.assign({}, state, {
                articles: [
                    ...state.articles,
                    {
                        _id: action.response._id,
                        title: action.response.title,
                        text: action.response.text,
                        categoryId: action.response.categoryId,
                        description: action.response.description,
                    }
                ],
                loading: false
            });
        }
        case LOADING: {
            return state;
        }
        case DELETE_ARTICLE: {
            return {
                ...state,
                articles: state.articles.filter((item, index) => action.id !== item._id)
            }
        }
        case ARTICLES_BY_CAT: {
            state = Object.assign({}, state, {articles: action.articles, loading: false});
            return state;
        }
        default:
            return state;
    }
};