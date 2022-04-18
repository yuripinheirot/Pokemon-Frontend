import React from "react";
import { useNavigate } from "react-router-dom";
import PokemonLogo from "assets/pokemon.png";

import { Box, AppBar, Toolbar, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";

export const heightHeader = 64;

const style = {
  box: {
    flexGrow: 1,
    height: heightHeader,
  },
  toolBar: {
    height: heightHeader,
  },
  IconButton: {
    height: "100%",
  },
  img: {
    height: "100%",
  },
};

export default function Header() {
  const navigate = useNavigate();

  return (
    <Box sx={style.box}>
      <AppBar position='static'>
        <Toolbar sx={style.toolBar}>
          <Container style={style.toolBar}>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={style.IconButton}
              onClick={() => navigate("/?page=1")}
            >
              <img src={PokemonLogo} alt='pokemon.logo' style={style.img} />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
