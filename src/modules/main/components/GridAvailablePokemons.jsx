import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";

import { Grid, Container } from "@mui/material";

const GridAvailablePokemons = ({ data, handleAddPokedex }) => {
	const renderCards = data.map((pokemon) => {
		return (
			<Grid item sm={3} key={pokemon}>
				<Card
					key={pokemon}
					pokemon={pokemon}
					handleAddPokedex={handleAddPokedex}
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
	handleAddPokedex: PropTypes.func,
};

export default GridAvailablePokemons;
