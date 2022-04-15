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

const ImgMediaCard = ({ data }) => {
	const navigate = useNavigate();

	return (
		<Card sx={{ display: "flex", flexDirection: "column", width: "40%", height: "80%" }}>
			<CardMedia
				component="img"
				alt={data.name}
				height="300"
				image={data && data.sprites && data.sprites.front_default}
				sx={{ objectFit: "contain" }}
			/>
			<CardContent sx={{height: "100%"}}>
				<Typography gutterBottom variant="h5" component="div">
					{data.name && data.name.toUpperCase()}
				</Typography>
				<Typography variant="body2" color="text.secondary" sx={{ minHeight: 70 }}>
					
				</Typography>
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
};

export default ImgMediaCard;