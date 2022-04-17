/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useEffect, useState, useTransition } from "react";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import Content from "components/Content";
import MainStore from "modules/main/stores/main";
import PokedexStore from "modules/main/stores/pokedex";

import GridCards from "../components/Grid";
import SearchBar from "../components/SearchBar";

//material
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Pagination, Button, Grid } from "@mui/material";

const Main = () => {
	const pages = 47;
	const [data, setData] = useState([]);
	const [pokedex, setPokedex] = useState([]);
	const [params, setParams] = useSearchParams();
	const [openDialog, setOpenDialog] = useState(false);
	const currentPage = Number(params.get("page"));
	const navigate = useNavigate();

	const handleSearch = async (pokemonToSearch) => {
		pokemonToSearch = pokemonToSearch.toLowerCase();

		const pokemon = await MainStore.pokemonDataBuilder(pokemonToSearch);

		if (!pokemon) return setOpenDialog(true);

		navigate(`/details/${pokemonToSearch}`);
	};

	const handleAddRemovePokedex = async (pokemon, isAddedPokedex) => {
		if (isAddedPokedex) {
			await PokedexStore.removePokedex(pokemon);
		} else {
			await PokedexStore.addPokedex(pokemon);
		}

		PokedexStore.fecthPokedex().then(setPokedex);
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

	const AlertDialog = () => {
		const handleClose = () => {
			setOpenDialog(false);
		};

		return (
			<Dialog
				open={openDialog}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>Did you type the name correctly?</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						We didn't find any Pokemon with the term typed. Please make sure that you have entered the full name
						correctly.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Dialog>
		);
	};

	useEffect(() => {
		if (!currentPage) setParams({ page: 1 });

		MainStore.loadData(currentPage).then(setData);
		PokedexStore.fecthPokedex().then(setPokedex);
	}, [currentPage]);

	return (
		<Content id='ContentMain'>
			<Grid container spacing={2} sx={{ marginY: 2 }}>
				<Grid item sm={12}>
					<SearchBar handleSearch={handleSearch} />
				</Grid>
				<Grid item sm={12}>
					<PaginationComponent />
				</Grid>
				<Grid item sm={12} sx={{ minHeight: 2780 }}>
					<GridCards data={data} pokedex={pokedex} handleAddRemovePokedex={handleAddRemovePokedex} />
				</Grid>
				<Grid item sm={12}>
					<PaginationComponent />
				</Grid>
			</Grid>
			<AlertDialog />
		</Content>
	);
};

export default Main;
