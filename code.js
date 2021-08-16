const pokemonDiv = document.querySelector(".pokemon")
const POKE_URL = "https://pokeapi.co/api/v2/pokemon/"

const printPokemonName = function(name){
    let h2 = document.createElement("h2")
        h2.innerHTML = name
        pokemonDiv.append(h2)
}

const printPokemonOrder = function(order) {
    let h3 = document.createElement("h3")
    h3.innerHTML = order
    pokemonDiv.append(h3)
}

const printPokemonWeight = function(weight) {
    let h3 = document.createElement("h3")
    h3.innerHTML = weight
    pokemonDiv.append(h3)
}

const displayPokemonPicture = function(picture) {
    let img = document.createElement("img")
    img.src = picture
    pokemonDiv.append(img)
}

const fetchPokemonNames = function(name) {
    fetch(POKE_URL + name)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        printPokemonName(data.name)
        displayPokemonPicture(data.sprites.back_shiny)
        displayPokemonPicture(data.sprites.front_shiny)
        printPokemonOrder(data.order)
        printPokemonWeight(data.weight)
    })
}

//fetchPokemonNames("squirtle")
//fetchPokemonNames("bulbasaur")
//extra comment to check github stratus

    // get 1118 pokemon names an display them
const fetch100Pokemon = function(){
    let pokemonURL = POKE_URL + "?limit=1118"
    fetch(pokemonURL)
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        data.results.forEach(pokemon => fetchPokemonNames(pokemon.name))
    })
}
fetch100Pokemon()