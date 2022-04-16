import React, { useEffect, useState, useContext } from "react";
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

const ImgMediaCard = ({ data, handleAddPokedex, flavorText, isAddedPokedex }) => {
	const navigate = useNavigate();

	const onHandleAddPokedex = () => {
		handleAddPokedex(data.name);
	};

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt={data && data.name}
				height="300"
				image={data && data.sprites && data.sprites.front_default}
				sx={{ objectFit: "unset" }}
			/>
			<CardContent>
				<Typography gutterBottom variant="subtitle1" component="div">
					{data && data.name && data.name.toUpperCase()}
				</Typography>
				<Typography variant="subtitle2" color="text.secondary" sx={{ minHeight: 70 }}>
					{flavorText}
				</Typography>
			</CardContent>
			<CardActions sx={{ display: "flex", justifyContent: "end", alignItems: "stretch" }}>
				<Button size="Large" variant="outlined" onClick={() => navigate(`/details/${data.name}`)}>DETAILS</Button>
				<Button size="Large" variant="contained" onClick={onHandleAddPokedex}>{isAddedPokedex ? "REMOVE POKEDEX" : "ADD POKEDEX"}</Button>
			</CardActions>
		</Card>
	);
};

ImgMediaCard.propTypes = {
	data: PropTypes.object,
	handleAddPokedex: PropTypes.func,
	flavorText: PropTypes.string,
	isAddedPokedex: PropTypes.bool
};

export default ImgMediaCard;