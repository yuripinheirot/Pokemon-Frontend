import React, { useEffect, useState } from "react";
import Content from "components/Content";
import MainStore from "modules/main/stores/main";

import GridAvailablePokemons from "../components/GridAvailablePokemons";
import SearchBar from "../components/SearchBar";

const Main = () => {
	const [data, setData] = useState([]);
	const [dataFiltered, setDataFiltered] = useState([]);

	useEffect(() => {
		MainStore.getPokemonOffset().then(res => {
			setData(res.results);
		});
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
			<GridAvailablePokemons data={dataFiltered} />
		</Content>
	);
};

export default Main;