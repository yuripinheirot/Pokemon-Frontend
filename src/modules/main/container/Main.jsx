import React, { useEffect, useState, useTransition } from "react";
import Content from "components/Content";
import MainStore from "modules/main/stores/main";
import PokedexStore from "modules/main/stores/pokedex";
import availablePokemons from "constants/pokemons";

import GridAvailablePokemons from "../components/GridAvailablePokemons";
import SearchBar from "../components/SearchBar";


const Main = () => {
	const [data, setData] = useState([]);
	const [dataFiltered, setDataFiltered] = useState([]);
	const [pokedex, setPokedex] = useState([]);
	const [isPending, startTransition] = useTransition();
	
	const pokemonDataBuilder = async (pokemon) => {
		const cachePokemons = () => JSON.parse(localStorage.getItem("pokemons"));
		if (!cachePokemons()) localStorage.setItem("pokemons", JSON.stringify({}));

		const pokemonCached = cachePokemons()[pokemon];
		if (pokemonCached) return;

		pokemon = await MainStore.getPokemonByName(pokemon);

		const pokemonFormated = {
			name: pokemon.name,
			image: pokemon.sprites.front_default,
			abilities: pokemon.abilities,
			description: await MainStore.getFlavorText(pokemon.name),
		};

		const abilitiesNames = pokemon.abilities.map((ability) => ability.ability.name);

		abilitiesNames.forEach((ability, index) => {
			pokemonFormated.abilities[index] = MainStore.getAbility(ability);
		});

		const fetchedAbilities = await Promise.all(pokemonFormated.abilities);

		pokemonFormated.abilities = fetchedAbilities;

		pokemonFormated.abilities.forEach((ability, index) => {
			const { short_effect } = ability.effect_entries.find((effect) => effect.language.name === "en");

			pokemonFormated.abilities[index] = {
				name: ability.name,
				effect: short_effect,
			};
		});

		const newStorage = {
			...cachePokemons(),
			[pokemonFormated.name]: pokemonFormated,
		};

		localStorage.setItem("pokemons", JSON.stringify(newStorage));
		console.log("setou");
		return pokemonFormated;
	};

	const loadData = () => {
		const data = availablePokemons.map((pokemon) => {
			return pokemonDataBuilder(pokemon);
		});

		Promise.all(data).then(setData);
	};

	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		setDataFiltered(data);
	}, [data, setDataFiltered]);

	const handleSearch = (value) => {
		const filtered = data.filter((item) => item.name.includes(value));

		startTransition(() => {
			setDataFiltered(filtered);
		});
	};

	return (
		<Content id='ContentMain'>
			<SearchBar handleSearch={handleSearch} />
			<GridAvailablePokemons data={dataFiltered} pokedex={pokedex} />
		</Content>
	);
};

export default Main;
