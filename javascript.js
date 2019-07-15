const search = document.getElementById('search');
const button = document.getElementById('button');
const sprite = document.getElementById('sprite');
const imgDiv = document.getElementById("imDiv");
const field = document.getElementsByClassName('field');
const statName = document.getElementsByClassName('statName');
const statField = document.getElementsByClassName('statField')

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
        console.log(response.data.id);
        field[0].innerHTML = response.data.id;
        field[1].innerHTML = response.data.name;
        field[2].innerHTML = response.data.height;
        field[3].innerHTML = response.data.weight;
        statName[0].innerHTML = response.data.stats[5].stat.name + ": ";
        statField[0].innerHTML = response.data.stats[5].base_stat;
        statName[1].innerHTML = response.data.stats[3].stat.name + ": ";
        statField[1].innerHTML = response.data.stats[3].base_stat;
        statName[2].innerHTML = response.data.stats[0].stat.name + ": ";
        statField[2].innerHTML = response.data.stats[0].base_stat;
        sprite.src = response.data.sprites.front_default;

        imgDiv.style.display = "block";


    })
}
pokedex();