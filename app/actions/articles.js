import {
    CREATE_ARTICLE,
    DELETE_ARTICLE,
    GET_ALL_ARTICLES,
    LOADING,
    ARTICLES_BY_CAT,
} from "../constants/actionTypes";
import testServerApi from "../api/testServerApi";

export function createArticle(title,text,categoryID,description) {
    return (dispatch) => {
        dispatch({type: LOADING});
        return testServerApi.createArticle(title,text,categoryID,description).then(response => {
            dispatch(createArticleSuccess(response));
        }).catch(error => {
            throw(error);
        });
    };
}

export function createArticleSuccess(response) {
    return (dispatch) => {
        dispatch({type: CREATE_ARTICLE, response: response});
    };
}

export function deleteArticle(id) {
    return (dispatch) => {
        dispatch({type: LOADING});
        return testServerApi.deleteArticle(id).then(() => {
            dispatch(deleteArticleSuccess(id));
        }).catch(error => {
            throw(error);
        });
    };
}

export function deleteArticleSuccess(id) {
    return (dispatch) => {
        dispatch({type: DELETE_ARTICLE, id: id});
    };
}

export function getAllArticles() {
    return (dispatch) => {
        dispatch({type: LOADING});
        return testServerApi.getAllArticles().then(articles => {
            dispatch(getAllArticlesSuccess(articles));
        }).catch(error => {
            throw(error);
        });
    };
}

export function getAllArticlesSuccess(articles) {
    return (dispatch) => {
        dispatch({type: GET_ALL_ARTICLES, articles: articles});
    };
}

export function getArticlesByCat(id) {
    return (dispatch) => {
        dispatch({type: LOADING});
        return testServerApi.articlesByCategory(id).then(articles => {
            dispatch(getArticlesByCatSuccess(articles));
        }).catch(error => {
            throw(error);
        });
    };
}

export function getArticlesByCatSuccess(articles) {
    return (dispatch) => {
        dispatch({type: ARTICLES_BY_CAT, articles: articles});
    };
}