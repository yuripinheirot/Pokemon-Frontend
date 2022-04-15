import { httpPokeApi } from "utils/httpClient";

class MainStore {
	getPokemonByName = async (name) => {
		const { data } = await httpPokeApi.get(`/pokemon/${name}`);

		return data;
	};

	getPokemonOffset = async () => {
		const { data } = await httpPokeApi.get("/pokemon?limit=32&offset=0");

		return data;
	};

	getFlavorText = async (pokemonId) => {
		const { data } = await httpPokeApi.get(`/pokemon-species/${pokemonId}/`);
		const flavorText = data.flavor_text_entries.find((item) => item.language.name === "en").flavor_text;

		return flavorText;
	};
}

export default new MainStore();
