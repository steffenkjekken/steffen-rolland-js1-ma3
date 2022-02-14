
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=19e389c37b7f45c6b8466b4e736406db";

const resultsContainer = document.querySelector(".results")
const html = [];

async function getGames() {

    const response = await fetch(url);

    const data = await response.json();

    const games = data.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
        console.log(games[i].name);

        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result"> 
        <strong>Game: </strong/>${games[i].name} <br>
        <strong/>Rating: </strong/> ${games[i].rating} <br> 
        <strong/>Tags: </strong/>${games[i].tags.length} </div>`;
    }
}


getGames();