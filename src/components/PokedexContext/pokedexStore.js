import { httpPrisma } from "utils/httpClient";

class PokedexStore {
	addPokedex = async (pokemonName) => {
		const { data } = await httpPrisma.post("/pokedex", {
			name: pokemonName,
		});

		return data;
	};

	getPokedex = async () => {
		const { data: {data} } = await httpPrisma.get("/pokedex");

		return data;
	};
}

export default new PokedexStore();
