import React from "react";
import PropTypes from "prop-types";

//material
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ImgMediaCard = ({ imageUrl, name, description }) => {

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="200"
				image={imageUrl}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name && name.toUpperCase()}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions >
				<Button size="Large" >DETAILS</Button>
				<Button size="Large" >ADD POKEDEX</Button>
			</CardActions>
		</Card>
	);
};

ImgMediaCard.propTypes = {
	imageUrl: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
};

export default ImgMediaCard;