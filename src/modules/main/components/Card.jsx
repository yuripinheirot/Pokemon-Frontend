import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import MainStore from "../stores/main";

//material
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ImgMediaCard = ({ pokemon, handleAddPokedex }) => {
	const [data, setData] = useState({});
	const navigate = useNavigate();

	const loadData = async () => {
		const pokemonStoraged = JSON.parse(localStorage.getItem("pokemons"));
		
		if (pokemonStoraged && pokemonStoraged[pokemon]) {
			setData(pokemonStoraged[pokemon]);
		} else {
			const data = await MainStore.pokemonDataBuilder(pokemon);
			setData(data);
		}
	};

	const onHandleAddPokedex = () => {
		handleAddPokedex(pokemon);
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia component='img' alt={pokemon + ".image"} height='300' image={data.image} sx={{ objectFit: "unset" }} />
			<CardContent>
				<Typography gutterBottom variant='subtitle1' component='div'>
					{data.name && data.name.toUpperCase()}
				</Typography>
				<Typography variant='subtitle2' color='text.secondary' sx={{ minHeight: 70 }}>
					{data.description}
				</Typography>
			</CardContent>
			<CardActions sx={{ display: "flex", justifyContent: "end", alignItems: "stretch" }}>
				<Button size='Large' variant='outlined' onClick={() => navigate(`/details/${pokemon}`)}>
					DETAILS
				</Button>
				<Button size='Large' variant='contained' onClick={onHandleAddPokedex}>
					{data.isAddedPokedex ? "REMOVE POKEDEX" : "ADD POKEDEX"}
				</Button>
			</CardActions>
		</Card>
	);
};

ImgMediaCard.propTypes = {
	pokemon: PropTypes.string,
	handleAddPokedex: PropTypes.func,
};

export default ImgMediaCard;
