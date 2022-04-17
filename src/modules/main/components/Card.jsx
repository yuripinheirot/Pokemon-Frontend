import React, { useEffect, useState, useTransition, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import MainStore from "../stores/main";
import pokemonLogo from "assets/pokemon.png";
import { style } from "./style";

//material
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Fade from "@mui/material/Fade";

const ImgMediaCard = ({ pokemon, handleAddRemovePokedex, isAddedPokedex }) => {
	const [data, setData] = useState({});
	const [isPeding, startTransition] = useTransition();
	const navigate = useNavigate();
	const loading = isPeding && !data.name;

	const loadData = async () => {
		const pokemonStoraged = JSON.parse(localStorage.getItem("pokemons"));

		if (pokemonStoraged && pokemonStoraged[pokemon]) {
			setData(pokemonStoraged[pokemon]);
		} else {
			const data = await MainStore.pokemonDataBuilder(pokemon);
			setData(data);
		}
	};

	const onHandleAddRemovePokedex = () => {
		handleAddRemovePokedex(pokemon, isAddedPokedex);
	};

	const SkeletonFeedback = () => {
		return (
			<Box sx={style.SkeletonFeedback}>
				<Skeleton width='100%' height={430} />
			</Box>
		);
	};

	useEffect(() => {
		startTransition(() => {
			loadData();
		});
	}, []);

	return loading ? (
		<SkeletonFeedback />
	) : (
		<Fade in={!loading} style={{ transitionDelay: loading ? "500ms" : "0ms" }} {...(!loading ? { timeout: 1000 } : {})}>
			<Card sx={style.Card}>
				<Box sx={style.Box}>
					<CardMedia
						component='img'
						alt={pokemon + ".image"}
						height='100%'
						image={data.image || pokemonLogo}
						sx={{ objectFit: "unset" }}
					/>
				</Box>
				<CardContent sx={style.CardContent}>
					<Typography gutterBottom variant='subtitle1' component='div'>
						{data.name && data.name.toUpperCase()}
					</Typography>
					<Typography variant='subtitle2' color='text.secondary' sx={style.Description}>
						{data.description}
					</Typography>
				</CardContent>
				<CardActions sx={style.CardActions}>
					<Button size='Large' variant='outlined' onClick={() => navigate(`/details/${pokemon}`)}>
						DETAILS
					</Button>
					<Button
						size='Large'
						variant='contained'
						onClick={onHandleAddRemovePokedex}
						color={isAddedPokedex ? "error" : "primary"}
					>
						{isAddedPokedex ? "RMV POKEDEX" : "ADD POKEDEX"}
					</Button>
				</CardActions>
			</Card>
		</Fade>
	);
};

ImgMediaCard.propTypes = {
	pokemon: PropTypes.string,
	handleAddRemovePokedex: PropTypes.func,
	isAddedPokedex: PropTypes.bool,
};

export default ImgMediaCard;
