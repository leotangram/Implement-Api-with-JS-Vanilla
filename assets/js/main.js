var page = 0;

function loadDatabase() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        window.movieDatabase = JSON.parse(this.response);
        movieAddDom(page);
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/juansaab/javascript-movie-database/master/movie_list.json", true);
    xhttp.send();
}

loadDatabase();


function movieAddDom() {
    let content = document.getElementsByClassName('grid__content')[0];
    content.innerHTML="";
    let movies = window.movieDatabase;
    // const result = movies.filter((movie, index) => index < page * 12);
    // filter((movie, index) => index <= (page * 12) && index > (12 * (page - 1)))
    const result = movies.splice(page * 12, 12);
    console.log(result);
    for (let i = 0; i < result.length; i++) {
        const movie = result[i];
        content.innerHTML += `
        <div class="grid__item card">
            <img class="card__image" src="${movie.posterurl}"/>
            <h3 class="card__title">${movie.title}</h3>
        </div>` 
    }
}

function changePageUp() {
    console.log("Click en Next");
    page += 1;
    movieAddDom();
}

let buttonNext = document.getElementsByClassName('pager__next')[0];
buttonNext.addEventListener("click", changePageUp)


