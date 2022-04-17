import React, { useEffect, useState, useTransition } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import Content from "components/Content";
import MainStore from "modules/main/stores/main";
import PokedexStore from "modules/main/stores/pokedex";

import { Pagination } from "@mui/material";
import GridAvailablePokemons from "../components/GridAvailablePokemons";
import SearchBar from "../components/SearchBar";

const Main = () => {
	const pages = 47;
	const [data, setData] = useState([]);
	const [dataFiltered, setDataFiltered] = useState([]);
	const [pokedex, setPokedex] = useState([]);
	const [isPending, startTransition] = useTransition();
	const [params, setParams] = useSearchParams();
	const currentPage = Number(params.get("page"));

	const handleSearch = (value) => {
		const filtered = data.filter((item) => item.name.includes(value));

		startTransition(() => {
			setDataFiltered(filtered);
		});
	};

	const PaginationComponent = () => {
		const onHandleChangePage = (event, page) => {
			setParams({ page });

			MainStore.loadData(page).then(setData);
		};

		return (
			<Pagination
				page={currentPage}
				count={pages}
				boundaryCount={2}
				sx={{ display: "flex", justifyContent: "center" }}
				onChange={onHandleChangePage}
			/>
		);
	};

	useEffect(() => {
		MainStore.loadData(currentPage).then(setData);
	}, []);

	useEffect(() => {
		setDataFiltered(data);
	}, [data, setDataFiltered]);

	return (
		<Content id='ContentMain'>
			<SearchBar handleSearch={handleSearch} />
			<PaginationComponent />
			<GridAvailablePokemons data={data} />
			<PaginationComponent />
		</Content>
	);
};

export default Main;
