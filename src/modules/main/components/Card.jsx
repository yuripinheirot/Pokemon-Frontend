import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MainStore from "../stores/main";

//material
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ImgMediaCard = ({ name }) => {
	const [data, setData] = useState({});

	useEffect(() => {
		MainStore.getPokemonByName(name).then(setData);
	}, [name]);

	useEffect(() => {
		if (data.id) {
			MainStore.getFlavorText(data.id).then(res => {
				setData({ ...data, description: res });
			});
		}
	}), [data];


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
				<Typography gutterBottom variant="h5" component="div">
					{name && name.toUpperCase()}
				</Typography>
				<Typography variant="body2" color="text.secondary" sx={{ minHeight: 70 }}>
					{data && data.description}
				</Typography>
			</CardContent>
			<CardActions sx={{ display: "flex", justifyContent: "end", alignItems: "stretch" }}>
				<Button size="Large" variant="outlined">DETAILS</Button>
				<Button size="Large" variant="contained">ADD POKEDEX</Button>
			</CardActions>
		</Card>
	);
};

ImgMediaCard.propTypes = {
	name: PropTypes.string,
};

export default ImgMediaCard;