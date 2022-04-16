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

	useEffect(() => {
		MainStore.loadData(1).then(setData);
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
			<SearchBar handleSearch={handleSearch}/>
			<GridAvailablePokemons data={data}/>
		</Content>
	);
};

export default Main;
