async function catchPokemon(event) {
event.preventDefault()
var response = await fetch("https://pokeapi.co/api/v2/pokemon/rayquaza")
var pokeData = await response.json()
console.log(pokeData.name)
pokemonContent.innerText = pokeData.name
<h1>$(pokeData.name)</h1>
<p>id:$(pokeData.id)</p>
<img>src="$(pokeData.sprites.front_default")</img>


}