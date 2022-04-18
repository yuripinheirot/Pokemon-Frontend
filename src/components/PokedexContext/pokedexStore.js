import { httpPrisma } from "utils/httpClient";

class PokedexStore {
  addPokedex = async (pokemon) => {
    const { data } = await httpPrisma.post("/pokedex", {
      pokemon,
    });

    return data;
  };

  getPokedex = async () => {
    const {
      data: { data },
    } = await httpPrisma.get("/pokedex");

    return data;
  };

  removePokedex = async (pokemon) => {
    const { data } = await httpPrisma.delete(`/pokedex/${pokemon}`);

    return data;
  };
}

export default new PokedexStore();
