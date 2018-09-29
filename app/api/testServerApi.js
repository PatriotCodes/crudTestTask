class testServerApi {

    static getAllRecipes() {
        return fetch('https://test-task-server.herokuapp.com/api/v1/recipe/all').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getAllArticles() {
        return fetch('https://test-task-server.herokuapp.com/api/v1/article/all').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getAllCategories() {
        return fetch('https://test-task-server.herokuapp.com/api/v1/category/all').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static createRecipe(title, text, categoryID = null) {
        return fetch('https://test-task-server.herokuapp.com/api/v1/category/all', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                text: text,
                categoryID: categoryID,
            }),
        }).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

}

export default testServerApi;