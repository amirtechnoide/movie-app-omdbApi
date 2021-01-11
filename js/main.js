// const axios = require('axios');
$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText) {
    axios.get(`http://www.omdbapi.com/?s=${searchText}&apikey=f58c3042`)
        .then((response) => {
            console.log('====================================');
            console.log(response.data.Search);
            console.log('====================================');

            let movies = response.data.Search;
            let output = '';
            $.each(movies, (movie, index) => {
                output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="${movie.Poster}">
                        <h5>${movie.Tittle}</h5>
                        <a 
                    </div>
                </div>`
            })
        })
        .catch((err) => {
            console.log(err);
        });
}

getMovies()
// function getData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/')
//   .then(response => response.json())
//   .then(json => console.table(json))
//   .catch((e) => console.error(e))
// }


// getData()