const search = document.getElementById('search');
const button = document.getElementById('button');
const sprite = document.getElementById('sprite');
const imgDiv = document.getElementById("imDiv");
const field = document.getElementsByClassName('field');
const statName = document.getElementsByClassName('statName');
const statField = document.getElementsByClassName('statField');
const moves = document.getElementsByClassName("move");
const evolve = document.getElementsByClassName('evolve');



button.addEventListener("click", async function() {
    let result = search.value;
    let pokemon = result.toLowerCase();
    let api = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await axios.get(api);
    let pokeid = response.data.id;
    let evoapi = `https://pokeapi.co/api/v2/pokemon-species/${pokeid}`;
    let evoresponse = await axios.get(evoapi);
    console.log();
    var dataArray = ["name", "id", "height", "weight"]
    for (let i = 0; i < dataArray.length; i++) {
        field[i].innerHTML = response.data[dataArray[i]];
        moves[i].innerHTML = response.data.moves[i].move.name;
    }
    document.getElementById('type').innerHTML = response.data.types[0].type.name;
    statName[0].innerHTML = response.data.stats[5].stat.name + ": ";
    statField[0].innerHTML = response.data.stats[5].base_stat;
    statName[1].innerHTML = response.data.stats[3].stat.name + ": ";
    statField[1].innerHTML = response.data.stats[3].base_stat;
    statName[2].innerHTML = response.data.stats[0].stat.name + ": ";
    statField[2].innerHTML = response.data.stats[0].base_stat;
    sprite.src = response.data.sprites.front_default;

    if (evoresponse.data.evolves_from_species) {
        evolve[0].style.display = "block";
        evolve[1].style.display = "block";
        evolve[2].style.display = "block";
        let evoname = evoresponse.data.evolves_from_species.name;
        let evonameapi = `https://pokeapi.co/api/v2/pokemon/${evoname}`;
        let evonameresponse = await axios.get(evonameapi);
        evolve[1].innerHTML = evonameresponse.data.name;
        evolve[2].src = evonameresponse.data.sprites.front_default;

    } else {
        for (let y = 0; y < evolve.length; y++) {
            evolve[y].style.display = "none";
        }
    }

    imDiv.style.display = "block";


})