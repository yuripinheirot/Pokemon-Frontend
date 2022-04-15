import axios from "axios";
import { apiPokemon } from "config";

export const httpClient = axios.create({
	baseURL: apiPokemon,
});

export default httpClient;
