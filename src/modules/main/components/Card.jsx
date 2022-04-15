import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import MainStore from "../stores/main";
import { PokedexContext } from "components/PokedexContext/ContextProvider";

//material
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ImgMediaCard = ({ name }) => {
	const { pokedex, addPokedex, fetchPokedex } = useContext(PokedexContext);
	const [data, setData] = useState({});
	const [flavorText, setFlavorText] = useState("");
	const navigate = useNavigate();

	const handleAddPokedex = (name) => {
		addPokedex(name);
		fetchPokedex();
	};

	useEffect(() => {
		MainStore.getPokemonByName(name).then(setData);
	}, []);

	useEffect(() => {
		data.id && MainStore.getFlavorText(data.id).then(setFlavorText);
	}, [data]);

	const isAddedPokedex = pokedex.indexOf(item => item.pokemon === name); 

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt={name}
				height="300"
				image={data && data.sprites && data.sprites.front_default}
				sx={{ objectFit: "unset" }}
			/>
			<CardContent>
				<Typography gutterBottom variant="subtitle1" component="div">
					{name && name.toUpperCase()}
				</Typography>
				<Typography variant="subtitle2" color="text.secondary" sx={{ minHeight: 70 }}>
					{flavorText}
				</Typography>
			</CardContent>
			<CardActions sx={{ display: "flex", justifyContent: "end", alignItems: "stretch" }}>
				<Button size="Large" variant="outlined" onClick={() => navigate(`/details/${data.name}`)}>DETAILS</Button>
				<Button size="Large" variant="contained" onClick={() => handleAddPokedex(name)}>{isAddedPokedex ? "REMOVE POKEDEX" : "ADD POKEDEX"}</Button>
			</CardActions>
		</Card>
	);
};

ImgMediaCard.propTypes = {
	name: PropTypes.string,
};

export default ImgMediaCard;