import httpClient from "utils/httpClient";

class MainStore {
	getPokemonByName = async (name) => {
		const { data } = await httpClient.get(`/${name}`);
		return data;
	};
}

export default new MainStore();

