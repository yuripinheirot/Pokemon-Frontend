import React, { useEffect, useState, useTransition } from "react";
import Content from "components/Content";
import MainStore from "modules/main/stores/main";
import Pokedex from "modules/main/stores/pokedex";

import GridAvailablePokemons from "../components/GridAvailablePokemons";
import SearchBar from "../components/SearchBar";

const Main = () => {
	const [data, setData] = useState([]);
	const [dataFiltered, setDataFiltered] = useState([]);
	const [pokedex, setPokedex] = useState([]);
	const [isPending, startTransition] = useTransition();

	const loadData = async () => {
		const pokemons = await MainStore.getPokemonOffset();
		const detailsPokemons = [];
		let detailsAbilities = [];

		pokemons.results.forEach((pokemon) => {
			detailsPokemons.push(MainStore.getPokemonByName(pokemon.name));
		});

		let details = await Promise.all(detailsPokemons);

		details = details.map((pokemon) => {
			return {
				name: pokemon.name,
				image: pokemon.sprites.front_default,
				abilities: pokemon.abilities,
			};
		});

		let abilitiesName = [];

		for (let pokemon of details) {
			for (let ability of pokemon.abilities) {
				if (!abilitiesName.includes(ability.ability.name)) {
					abilitiesName.push(ability.ability.name);
				}
			}
		}

		abilitiesName.forEach((ability) => {
			detailsAbilities.push(MainStore.getAbility(ability));
		});

		detailsAbilities = await Promise.all(detailsAbilities);

		details.forEach((detail) => {
			detail.abilities.forEach((ability, index) => {
				const abilityObject = detailsAbilities.find((detailAbility) => detailAbility.name === ability.ability.name);
				const { short_effect } = abilityObject.effect_entries.find((effect) => effect.language.name === "en");

				detail.abilities[index] = {
					name: ability.ability.name,
					effect: short_effect,
				};
			});
		});

		console.log({ details, detailsAbilities });
		setData(details);
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
