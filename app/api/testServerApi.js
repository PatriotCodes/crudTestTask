class testServerApi {

    static getAllRecipes() {
        return fetch('https://test-task-server.herokuapp.com/api/v1/recipe/all').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

}

export default testServerApi;