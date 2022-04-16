import { httpPokeApi } from "utils/httpClient";

class MainStore {
	getPokemonByName = async (name) => {
		const { data } = await httpPokeApi.get(`/pokemon/${name}`);

		return data;
	};

	getFlavorText = async (pokemonId) => {
		const { data } = await httpPokeApi.get(`/pokemon-species/${pokemonId}/`);
		const flavorText = data.flavor_text_entries.find((item) => item.language.name === "en").flavor_text;

		return flavorText;
	};

	getAbility = async (ability) => {
		const { data } = await httpPokeApi.get(`/ability/${ability}`);

		return data;
	};
}

export default new MainStore();
