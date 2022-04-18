import axios from "axios";
import { apiPokemon, apiPrisma } from "config";

export const httpPokeApi = axios.create({
  baseURL: apiPokemon,
});

export const httpPrisma = axios.create({
  baseURL: apiPrisma,
});

export default { httpPokeApi, httpPrisma };
