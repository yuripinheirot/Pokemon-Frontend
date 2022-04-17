import { httpPrisma } from "utils/httpClient";

class PokedexStore {
	addPokedex = async (pokemon) => {
		const { data } = await httpPrisma.post("/pokedex", {
			pokemon,
		});

		return data;
	};

	fecthPokedex = async () => {
		const {
			data: { data },
		} = await httpPrisma.get("/pokedex");

		return data;
	};

	removePokedex = async (pokemon) => {
		const { data } = await httpPrisma.delete("/pokedex", {
			data: {pokemon},
		});

		return data;
	};
}

export default new PokedexStore();
