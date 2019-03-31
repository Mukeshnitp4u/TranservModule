class APICalls {
    getMovieList(url,onSuccess,onFailure){
        fetch(url).then((response) => response.json())
        .then((responseJson) => {
            onSuccess (responseJson.movies);
        })
        .catch(error => {
            onFailure(error)
        })
    }    
}

var apiCalls = new APICalls()
export default apiCalls