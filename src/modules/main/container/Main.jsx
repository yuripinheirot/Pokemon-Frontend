import React, { useEffect, useState, useContext } from "react";
import Content from "components/Content";
import MainStore from "modules/main/stores/main";
import { PokedexContext } from "components/PokedexContext/ContextProvider";

import GridAvailablePokemons from "../components/GridAvailablePokemons";
import SearchBar from "../components/SearchBar";

const Main = () => {
	const { pokedex, fetchPokedex } = useContext(PokedexContext);
	const [data, setData] = useState([]);
	const [dataFiltered, setDataFiltered] = useState([]);

	useEffect(() => {
		MainStore.getPokemonOffset().then(res => {
			setData(res.results);
		});

		fetchPokedex();
	}, [setData]);

	useEffect(() => {
		setDataFiltered(data);
	}, [data, setDataFiltered]);

	const handleSearch = value => {
		const filtered = data.filter(item => item.name.includes(value));
		setDataFiltered(filtered);
	};

	return (
		<Content id="ContentMain">
			<SearchBar handleSearch={handleSearch} />
			<GridAvailablePokemons data={dataFiltered} pokedex={pokedex} />
		</Content>
	);
};

export default Main;