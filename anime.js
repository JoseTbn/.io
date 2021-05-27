const sourceUrl = "https://api.jikan.moe/v3"







function mangaSearch(event) {

    event.preventDefault();

const form = new FormData(search_form);
const query = form.get("manga_name");

console.log(query);


    fetch(`${sourceUrl}/search/anime?q=${query}&page=1`)
    .then(response =>  response.json())
    .then(resultsData)
    .catch(err=>console.warn(err.message))

}

function resultsData(data) {

const  postResults = document.getElementById('postResults')

    

postResults.innerHTML = data.results.sort((a,b) =>a.episodes-b.episodes).map(anime => {
        return `  <div class=" large card">
        <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${anime.image_url}">
        </div>
        <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${anime.title}<i class="material-icons right">Read</i></span>
        <p><a href="${anime.url}">myanimelist.net</a></p>
        </div>
        <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
        <p>${anime.synopsis}</p>
        <div> <img src="${anime.image_url}" alt=""> </div>
        </div>
    </div>
        `
    });
    
};


function pageLoaded(){ 
const form = document.getElementById('search_form');
form.addEventListener("submit", mangaSearch);
}

window.addEventListener("load", pageLoaded);




/* fetch('https://api.jikan.moe/v3/anime/search/anime?q=${query}&page=1',{
        headers: {
        Accept: 'application/json'
        }
    })*/ 