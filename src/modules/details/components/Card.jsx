import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// import MainStore from "../stores/main";

//material
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ImgMediaCard = ({ data, detailsAbilities }) => {
	const navigate = useNavigate();

	const Abilities = () => {
		const abilities = data.abilities && data.abilities || [];
		const sortedAbilities = abilities.sort((a, b) => {
			if (a.ability.name > b.ability.name) return 1;
			if (a.ability.name < b.ability.name) return -1;

			return 0;
		});

		return <>
			<Typography gutterBottom variant="h6" component="div">
        ABILITIES:
			</Typography>
			{sortedAbilities.map((item, index) => {
				const effect = detailsAbilities.find(effect => effect.name === item.ability.name);

				return <Typography key={index} variant="subtitle2" component="p">
					{item.ability.name} - {effect && effect.effectDetails && effect.effectDetails.effect}
				</Typography>;
			})}
		</>;
	};


	return (
		<Card sx={{ display: "flex", flexDirection: "column", width: "40%", height: "80%" }}>
			<CardMedia
				component="img"
				alt={data.name}
				height="300"
				image={data && data.sprites && data.sprites.front_default}
				sx={{ objectFit: "contain" }}
			/>
			<CardContent sx={{ height: "100%" }}>
				<Typography gutterBottom variant="h4" component="div">
					{data.name && data.name.toUpperCase()}
				</Typography>
				<Abilities />
			</CardContent>
			<CardActions sx={{ display: "flex", justifyContent: "end", alignItems: "stretch" }}>
				<Button size="Large" variant="outlined" onClick={() => navigate("/")}>BACK</Button>
				<Button size="Large" variant="contained">ADD POKEDEX</Button>
			</CardActions>
		</Card>
	);
};

ImgMediaCard.propTypes = {
	data: PropTypes.object,
	flavorText: PropTypes.string,
	detailsAbilities: PropTypes.array,
};

export default ImgMediaCard;