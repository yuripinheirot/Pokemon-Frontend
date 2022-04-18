import React, { useState, useTransition } from "react";
import PropTypes from "prop-types";

import { Box, TextField, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState("");
  const [isPeding, startTransition] = useTransition();

  const handleOnChangeSearch = () => {
    startTransition(async () => {
      await handleSearch(search);
    });
  };

  return (
    <Box
      component='form'
      sx={{ width: "100%", display: "flex", alignItems: "stretch", justifyContent: "center" }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='outlined-basic'
        label='Search for the full name'
        variant='outlined'
        fullWidth
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant='contained' onClick={handleOnChangeSearch} sx={{ marginLeft: 2, width: 100 }}>
        {isPeding ? <CircularProgress /> : "SEARCH"}
      </Button>
    </Box>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
};

export default SearchBar;
