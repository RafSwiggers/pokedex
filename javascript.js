const search = document.getElementById('search')
const button = document.getElementById('button')
const sprite = document.getElementById('sprite')
const imgDiv = document.getElementById("imDiv")
const field = document.getElementsByClassName('field')

function loadpokemon() {
    document.addEventListener("load", async function(e) {
        let api = `https://pokeapi.co/api/v2/`;
        let response = await axios.get(api);
        console.log(response);

    });
}

function pokedex() {
    button.addEventListener("click", async function(e) {
        let result = search.value;
        let pokemon = result.toLowerCase();
        let api = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        let response = await axios.get(api);
        console.log(response.data)
        field[0].innerHTML = response.data.name;
        field[1].innerHTML = response.data.height;
        field[2].innerHTML = response.data.weight;
        sprite.src = response.data.sprites.front_default;
        imgDiv.style.display = "block";


    })
}
pokedex();