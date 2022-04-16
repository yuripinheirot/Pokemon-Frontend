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

const ImgMediaCard = ({ name, image, description, handleAddPokedex, isAddedPokedex }) => {
	const navigate = useNavigate();

	const onHandleAddPokedex = () => {
		handleAddPokedex(name);
	};

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia component='img' alt={name + ".image"} height='300' image={image} sx={{ objectFit: "unset" }} />
			<CardContent>
				<Typography gutterBottom variant='subtitle1' component='div'>
					{name.toUpperCase()}
				</Typography>
				<Typography variant='subtitle2' color='text.secondary' sx={{ minHeight: 70 }}>
					{description}
				</Typography>
			</CardContent>
			<CardActions sx={{ display: "flex", justifyContent: "end", alignItems: "stretch" }}>
				<Button size='Large' variant='outlined' onClick={() => navigate(`/details/${name}`)}>
					DETAILS
				</Button>
				<Button size='Large' variant='contained' onClick={onHandleAddPokedex}>
					{isAddedPokedex ? "REMOVE POKEDEX" : "ADD POKEDEX"}
				</Button>
			</CardActions>
		</Card>
	);
};

ImgMediaCard.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.string,
	handleAddPokedex: PropTypes.func,
	isAddedPokedex: PropTypes.bool,
};

export default ImgMediaCard;
