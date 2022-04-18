import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";

import { Grid } from "@mui/material";

const GridAvailablePokemons = ({ data, handleAddRemovePokedex, pokedex }) => {
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
    <Grid container spacing={2} justifyContent='center'>
      {renderCards}
    </Grid>
  );
};

GridAvailablePokemons.propTypes = {
  data: PropTypes.array,
  handleAddRemovePokedex: PropTypes.func,
  pokedex: PropTypes.array,
};

export default GridAvailablePokemons;
