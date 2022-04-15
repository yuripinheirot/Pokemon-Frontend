import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsStore from "../stores/details";

import Card from "../components/Card";

import { Container } from "@mui/material";

const Details = () => {
	const { id } = useParams();
	const [data, setData] = useState({});
	const [flavorText, setFlavorText] = useState("");
	const [detailsAbilities, setDetailsAbilities] = useState([]);

	useEffect(() => {
		DetailsStore.getPokemonByName(id).then(setData);
	}, []);

	useEffect(() => {
		data.id && DetailsStore.getFlavorText(data.id).then(setFlavorText);

		data.abilities && data.abilities.forEach(ability => {
			DetailsStore.getAbilityDetails(ability.ability.name).then(res => setDetailsAbilities([...detailsAbilities, res]));
		});
	}, [data]);

	return <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
		<Card data={data} flavorText={flavorText} detailsAbilities={detailsAbilities} />
	</Container>;
};

export default Details;