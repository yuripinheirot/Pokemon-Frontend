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

	const loadData = async () => {
		await MainStore.loadData();
		const dataStoraged = JSON.parse(localStorage.getItem("pokemons"));
		const dataValue = Object.values(dataStoraged);

		setData(dataValue);
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
			<SearchBar handleSearch={handleSearch}/>
			<GridAvailablePokemons data={data}/>
		</Content>
	);
};

export default Main;
