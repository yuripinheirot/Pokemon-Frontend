import React, { useEffect, useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import MainStore from "../stores/main";
import pokemonLogo from "assets/pokemon.png";
import { style } from "./style";

//material
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";

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

  // eslint-disable-next-line react/prop-types
  const SkeletonFeedback = ({ children }) => {
    return (
      <Box sx={style.SkeletonFeedback}>
        <Skeleton>{children}</Skeleton>
      </Box>
    );
  };

  const renderCard = () => {
    return (
      <Fade
        in={!loading}
        style={{ transitionDelay: loading ? "500ms" : "0ms" }}
        {...(!loading ? { timeout: 1000 } : {})}
      >
        <Card sx={style.Card}>
          <Grid container spacing={0} justifyContent='center' sx={style.Grid}>
            <Grid item sm={12} sx={style.GridBox}>
              <Box sx={style.Box}>
                <img src={data.image || pokemonLogo} alt={data.name} style={style.Img} />
              </Box>
            </Grid>
            <Grid item sm={12} sx={style.GridContent}>
              <div style={style.CardContent}>
                <Typography gutterBottom variant='subtitle1' component='div' sx={style.CardContentTitle}>
                  {data.name && data.name.toUpperCase()}
                </Typography>
                <Typography variant='subtitle2' color='text.secondary' sx={style.CardContentDescription}>
                  {data.description}
                </Typography>
              </div>
            </Grid>
            <Grid item sm={12} sx={style.GridActions}>
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
            </Grid>
          </Grid>
        </Card>
      </Fade>
    );
  };

  useEffect(() => {
    startTransition(() => {
      loadData();
    });
  }, []);

  return loading ? <SkeletonFeedback>{renderCard()}</SkeletonFeedback> : renderCard();
};

ImgMediaCard.propTypes = {
  pokemon: PropTypes.string,
  handleAddRemovePokedex: PropTypes.func,
  isAddedPokedex: PropTypes.bool,
};

export default ImgMediaCard;
