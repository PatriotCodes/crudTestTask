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

    static createRecipe(title, text, categoryID) {
        return fetch('https://test-task-server.herokuapp.com/api/v1/recipe/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title":title,
                "text":text,
                "categoryId":categoryID
            }),
        }).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static createCategory(title) {
        return fetch('https://test-task-server.herokuapp.com/api/v1/category/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title":title
            }),
        }).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static deleteRecipe(id) {
        return fetch('https://test-task-server.herokuapp.com/api/v1/recipe/' + id, {
            method: 'DELETE',
        }).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static deleteCategory(id) {
        return fetch('https://test-task-server.herokuapp.com/api/v1/category/' + id, {
            method: 'DELETE',
        }).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

}

export default testServerApi;