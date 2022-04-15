import React, { useState, useEffect } from "react";
import MainStore from "modules/main/stores/main";

//material
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard() {
	// eslint-disable-next-line no-unused-vars
	const [data, setData] = useState([]);


	const pikachu = () => {
		MainStore.getPokemonByName("pikachu").then(res => {
			console.log({ res });
			setData(res);
		});
	};

	useEffect(() => {
		pikachu();
	}, []);

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="140"
				image="/static/images/cards/contemplative-reptile.jpg"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{data.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}