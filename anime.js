const sourceUrl = "https://api.jikan.moe/v3/anime"







function MangaSearch(event) {

    event.preventDefault;

const form = new FormData(this);
const query = form.get("manga_name");

console.log(query);


    fetch(`${sourceUrl}//?q=${query}&page=1`, {
        headers: {
        Accept: 'application/json'
        }
    }) 
    .then(response => { response.json()
    .then(updateDom)
    .catch(err=>console.warn(err.message))

})

function updateDom(data) {
    data.results.forEach(anime => {
        console.log(anime);
    });
    
}


function pageLoaded(){ 
const form = document.getElementById("search_name");
form.addEventListener("submit", MangaSearch )
}

window.addEventListener("load", pageLoaded)};