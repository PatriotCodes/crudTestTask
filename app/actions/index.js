import * as recipesActions from './recipes';
import * as articlesActions from './articles';
import * as categoriesActions from './categories';

export const ActionCreators = Object.assign({},
    recipesActions,
    articlesActions,
    categoriesActions,
);