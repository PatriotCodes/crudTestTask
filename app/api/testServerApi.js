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

    static updateRecipe(id, title, text, categoryID) {
        return fetch('https://test-task-server.herokuapp.com/api/v1/recipe/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "_id":id,
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

    static updateCategory(id, title, parentId = null) {
        return fetch('https://test-task-server.herokuapp.com/api/v1/category/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "_id":id,
                "title":title,
                "parentId":parentId
            }),
        }).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static recipesByCategory(id) {
        return fetch('https://test-task-server.herokuapp.com/api/v1/recipe/byCategory/' + id, {
            method: "GET",
        }).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static articlesByCategory(id) {
        return fetch('https://test-task-server.herokuapp.com/api/v1/article/byCategory/' + id, {
            method: "GET",
        }).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

}

export default testServerApi;