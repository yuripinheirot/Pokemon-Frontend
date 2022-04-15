import httpClient from "utils/httpClient";

class MainStore {
	getPokemonByName = async (name) => {
		const { data } = await httpClient.get(`/pokemon/${name}`);

		return data;
	};

	getPokemonOffset = async () => {
		const { data } = await httpClient.get("/pokemon?limit=52&offset=0");

		return data;
	};

	getFlavorText = async (pokemonId) => {
		const { data } = await httpClient.get(`/pokemon-species/${pokemonId}/`);
		const flavorText = data.flavor_text_entries.find(item => item.language.name === "en").flavor_text;
		
		return flavorText;
	};
}

export default new MainStore();
