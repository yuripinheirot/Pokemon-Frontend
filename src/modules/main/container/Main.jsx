import React, { useEffect, useState, useTransition } from "react";
import Content from "components/Content";
import MainStore from "modules/main/stores/main";
import PokedexStore from "modules/main/stores/pokedex";

import GridAvailablePokemons from "../components/GridAvailablePokemons";
import SearchBar from "../components/SearchBar";

const Main = () => {
	const [data, setData] = useState([]);
	const [dataFiltered, setDataFiltered] = useState([]);
	const [pokedex, setPokedex] = useState([]);
	const [isPending, startTransition] = useTransition();

	const loadData = async () => {
		const pokemons = await MainStore.getPokemonOffset();
		const detailsPokemonsPromises = [];
		const detailsAbilitiesPromises = [];

		pokemons.results.forEach((pokemon) => {
			detailsPokemonsPromises.push(MainStore.getPokemonByName(pokemon.name));
		});

		let details = await Promise.all(detailsPokemonsPromises);

		details = await Promise.all(
			details.map(async (pokemon) => {
				return {
					name: pokemon.name,
					image: pokemon.sprites.front_default,
					abilities: pokemon.abilities,
					description: await MainStore.getFlavorText(pokemon.name),
				};
			})
		);

		let abilitiesName = [];

		for (let pokemon of details) {
			for (let ability of pokemon.abilities) {
				if (!abilitiesName.includes(ability.ability.name)) {
					abilitiesName.push(ability.ability.name);
				}
			}
		}

		abilitiesName.forEach((ability) => {
			detailsAbilitiesPromises.push(MainStore.getAbility(ability));
		});

		let detailsAbilities = await Promise.all(detailsAbilitiesPromises);

		details.forEach((detail) => {
			detail.abilities.forEach((ability, index) => {
				const abilityObject = detailsAbilities.find((detailAbility) => detailAbility.name === ability.ability.name);
				const { short_effect } = abilityObject.effect_entries.find((effect) => effect.language.name === "en");

				detail.abilities[index] = {
					name: ability.ability && ability.ability.name,
					effect: short_effect || "",
				};
			});
		});

		console.log({ details });
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
