function loadDatabase() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        window.movieDatabase = JSON.parse(this.response);
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/juansaab/javascript-movie-database/master/movie_list.json", true);
    xhttp.send();
}

loadDatabase();