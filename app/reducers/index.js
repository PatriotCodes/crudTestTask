import { combineReducers } from 'redux';
import articlesReducer from './articles';
import recipesReducer from './recipes';
import categoriesReducer from './categories';

const rootReducer = combineReducers ({
    categoriesReducer,
    recipesReducer,
    articlesReducer,
});

export default rootReducer;