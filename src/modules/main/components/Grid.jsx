import React, {useState} from "react";
import PropTypes from "prop-types";

import Card from "./Card";

import { Grid, Container } from "@mui/material";

const GridAvailablePokemons = ({ data,  handleAddRemovePokedex, pokedex }) => {

	const renderCards = data.map((pokemon) => {
		return (
			<Grid item sm={3} key={pokemon}>
				<Card
					key={pokemon}
					pokemon={pokemon}
					handleAddRemovePokedex={handleAddRemovePokedex}
					isAddedPokedex={pokedex.includes(pokemon)}
				/>
			</Grid>
		);
	});

	return (
		<Container sx={{ width: "100%", height: "100%", padding: 2 }}>
			<Grid container spacing={2} justifyContent='center'>
				{renderCards}
			</Grid>
		</Container>
	);
};

GridAvailablePokemons.propTypes = {
	data: PropTypes.array,
	handleAddRemovePokedex: PropTypes.func,
	pokedex: PropTypes.array,
};

export default GridAvailablePokemons;
