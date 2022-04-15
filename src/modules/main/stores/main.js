import httpClient from "utils/httpClient";

class MainStore {
	getPokemonByName = async (name) => {
		const { data } = await httpClient.get(`/pokemon/${name}`);
	
		return data;
	};

	getPokemonOffset = async (page) => {
		const offeset = page * 20;
		const { data } = await httpClient.get(`/pokemon?limit=20&offset=${offeset}`);

		return data;
	};
}

export default new MainStore();
