import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";

import { Grid, Container } from "@mui/material";

const GridAvailablePokemons = ({ data }) => {

	const renderCards = data.map((item) => {
		return <Grid item sm={3} key={item.name}>
			<Card key={item.name} name={item.name} />
		</Grid>;
	});


	return <Container sx={{ width: "100%", height: "100%", padding: 2 }}>
		<Grid container spacing={2} justifyContent='center' >
			{renderCards}
		</Grid>
	</Container>;
};

GridAvailablePokemons.propTypes = {
	data: PropTypes.array,
};

export default GridAvailablePokemons;