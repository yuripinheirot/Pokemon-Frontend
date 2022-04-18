import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainStore from "modules/main/stores/main";
import PokedexStore from "modules/main/stores/pokedex";

import Card from "../components/Card";

import { Container } from "@mui/material";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isAddedPokedex, setIsAddedPokedex] = useState(false);

  const loadData = () => {
    MainStore.pokemonDataBuilder(id).then(setData);
    PokedexStore.fecthPokedex().then((res) => {
      setIsAddedPokedex(res.includes(id));
    });
  };

  const handleAddRemovePokedex = () => {
    if (isAddedPokedex) {
      PokedexStore.removePokedex(data.name).then(() => setIsAddedPokedex(false));
    } else {
      PokedexStore.addPokedex(data.name).then(() => setIsAddedPokedex(true));
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "auto" }}>
      <Card data={data} isAddedPokedex={isAddedPokedex} handleAddRemovePokedex={handleAddRemovePokedex} />
    </Container>
  );
};

export default Details;
