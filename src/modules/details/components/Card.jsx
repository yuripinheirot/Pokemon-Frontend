import React, { useState, useTransition, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import MainStore from "modules/main/stores/main";
import PokedexStore from "modules/main/stores/pokedex";

//material
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const ImgMediaCard = ({ pokemon }) => {
	const [data, setData] = useState({});
	const [addedPokedex, setAddedPokedex] = useState(false);
	const [isPeding, startTransition] = useTransition();
	const navigate = useNavigate();

	const SkeletonFeedback = () => {
		return (
			<Box sx={{ pt: 0.5, width: "100%", height: "100%" }}>
				<Skeleton width='100%' height={300} />
			</Box>
		);
	};

	const handleAddRemovePokedex = () => {
		if (addedPokedex) {
			PokedexStore.removePokedex(pokemon).then(res => setAddedPokedex(false));
		} else {
			PokedexStore.addPokedex(pokemon).then(res => setAddedPokedex(true));
		}
	};

	const Abilities = () => {
		const abilities = (data && data.abilities) || [];

		const sortedAbilities = abilities.sort((a, b) => {
			if (a.name > b.name) return 1;
			if (a.name < b.name) return -1;

			return 0;
		});

		return (
			<>
				<Typography gutterBottom variant='h6' component='div'>
					ABILITIES:
				</Typography>
				<Typography sx={{ overflowY: "auto", height: 240 }} component='div'>
					{sortedAbilities.map((item, index) => {
						const effect = abilities.find((effect) => effect.name === item.name);

						return (
							<Typography key={index} variant='subtitle2' component='p'>
								<strong>{item.name}</strong> - {effect && effect.effect}
							</Typography>
						);
					})}
				</Typography>
			</>
		);
	};

	useEffect(() => {
		startTransition(() => {
			MainStore.pokemonDataBuilder(pokemon).then(setData);

			PokedexStore.fecthPokedex().then((res) => {
				setAddedPokedex(res.includes(pokemon));
			});
		});
	}, []);

	return isPeding && !data.name ? (
		<SkeletonFeedback />
	) : (
		<Card sx={{ display: "flex", flexDirection: "column", width: "40%", height: "80%" }}>
			<CardMedia
				component='img'
				alt={data && data.name}
				height='300'
				image={data && data.image}
				sx={{ objectFit: "contain" }}
			/>
			<CardContent sx={{ height: "100%" }}>
				<Typography gutterBottom variant='h4' component='div'>
					{data && data.name && data.name.toUpperCase()}
				</Typography>
				<Abilities />
			</CardContent>
			<CardActions sx={{ display: "flex", justifyContent: "end", alignItems: "stretch" }}>
				<Button size='Large' variant='outlined' onClick={() => navigate(-1)}>
					BACK
				</Button>
				<Button size='Large' variant='contained' color={!addedPokedex ? "primary" : "error"} onClick={handleAddRemovePokedex}>
					{!addedPokedex ? "ADD POKEDEX" : "RMV POKEDEX"}
				</Button>
			</CardActions>
		</Card>
	);
};

ImgMediaCard.propTypes = {
	pokemon: PropTypes.string,
};

export default ImgMediaCard;
