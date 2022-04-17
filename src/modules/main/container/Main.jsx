import React, { useEffect, useState, useTransition } from "react";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import Content from "components/Content";
import MainStore from "modules/main/stores/main";
import PokedexStore from "modules/main/stores/pokedex";

import { Pagination } from "@mui/material";
import GridAvailablePokemons from "../components/GridAvailablePokemons";
import SearchBar from "../components/SearchBar";

const Main = () => {
	const pages = 47;
	const [data, setData] = useState([]);
	const [params, setParams] = useSearchParams();
	const currentPage = Number(params.get("page"));

	const handleSearch = async (pokemonToSearch) => {
		const pokemon = await MainStore.pokemonDataBuilder(pokemonToSearch);

		if (!pokemon) {
			console.log("nao achou");
		}
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
		if (!currentPage) setParams({ page: 1 });

		MainStore.loadData(currentPage).then(setData);
	}, [currentPage]);

	return (
		<Content id='ContentMain' sx={{ paddingBottom: 2 }}>
			<SearchBar handleSearch={handleSearch} />
			<PaginationComponent />
			<GridAvailablePokemons data={data} />
			<PaginationComponent />
		</Content>
	);
};

export default Main;
