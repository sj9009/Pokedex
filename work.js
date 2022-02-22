function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

const colors = {
	fire: '#ff7b08',grass: '#13c23c',electric: '#fffb00',
	water: '#146eff',ground: '#d6c26f',rock: '#d5d5d4',
	fairy: '#fceaff',poison: '#d52af7',bug: '#b8f065',
	dragon: '#97b3e6',psychic: '#eaeda1',flying: '#99c0ff',
	fighting: '#E6E0D4',normal: '#F5F5F5'
};
const main_types = Object.keys(colors);

const poke_container = document.getElementById('poke_container');
const fetchPokemons = async () => {
	for (let i = 1; i <= 40; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');
 	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	
  	const poke_types = pokemon.types.map(type => type.type.name);
  	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	const color = colors[type];
  	pokemonEl.style.background = color;

	// const typebord = main_types.find(type => poke_types.indexOf(type) > 0);
	// const bordcolor = colors[typebord];
  // pokemonEl.style.borderColor = bordcolor;

	const pokeInnerHTML = `
        <div class="img-container" id="img_con">
        <div id="divOne"class="colOne"></div>
        <div class="colTwo"></div>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}" />
        </div>
        <h3 class="name">${name}</h3>
    `;
	
  	pokemonEl.innerHTML = pokeInnerHTML;
	poke_container.appendChild(pokemonEl);

  // document.getElementById('img_con').style.color = "linear-gradient(90deg, color,bordcolor)";
}

fetchPokemons();