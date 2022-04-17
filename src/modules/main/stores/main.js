import { httpPokeApi } from "utils/httpClient";

class MainStore {
	getPokemonByName = async (name) => {
		const { data } = await httpPokeApi.get(`/pokemon/${name}`);

		return data;
	};

	getFlavorText = async (pokemonId) => {
		const { data } = await httpPokeApi.get(`/pokemon-species/${pokemonId}/`);
		const { flavor_text } = data.flavor_text_entries.find((item) => item.language.name === "en");

		return flavor_text;
	};

	getAbility = async (ability) => {
		const { data } = await httpPokeApi.get(`/ability/${ability}`);

		return data;
	};

	pokemonDataBuilder = async (pokemon) => {
		const cachePokemons = () => JSON.parse(localStorage.getItem("pokemons"));
		if (!cachePokemons()) localStorage.setItem("pokemons", JSON.stringify({}));

		const pokemonCached = cachePokemons()[pokemon];
		if (pokemonCached) return;

		pokemon = await this.getPokemonByName(pokemon);

		const pokemonFormated = {
			name: pokemon.name,
			image: pokemon.sprites.front_default,
			abilities: pokemon.abilities,
			description: await this.getFlavorText(pokemon.name),
		};

		const abilitiesNames = pokemon.abilities.map((ability) => ability.ability.name);

		abilitiesNames.forEach((ability, index) => {
			pokemonFormated.abilities[index] = this.getAbility(ability);
		});

		const fetchedAbilities = await Promise.all(pokemonFormated.abilities);

		pokemonFormated.abilities = fetchedAbilities;

		pokemonFormated.abilities.forEach((ability, index) => {
			const { short_effect } = ability.effect_entries.find((effect) => effect.language.name === "en");

			pokemonFormated.abilities[index] = {
				name: ability.name,
				effect: short_effect || "",
			};
		});

		const newStorage = {
			...cachePokemons(),
			[pokemonFormated.name]: pokemonFormated,
		};

		localStorage.setItem("pokemons", JSON.stringify(newStorage));

		return pokemonFormated;
	};

	getPokemonOffset = async (page) => {
		const offset = (page - 1) * 24;
		const { data } = await httpPokeApi.get(`/pokemon?limit=24&offset=${offset}`);

		return data;
	};

	loadData = async (page) => {
		console.log(page);
		const { results } = await this.getPokemonOffset(page);
		return results.map((pokemon) => pokemon.name);
	};
}

export default new MainStore();
