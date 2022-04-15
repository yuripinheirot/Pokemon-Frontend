import React, { useState } from "react";
import PropTypes from "prop-types";

import { Box, TextField, Button } from "@mui/material";

const SearchBar = ({ handleSearch }) => {
	const handleOnChangeSearch = (e) => {
		handleSearch(e.target.value);
	};

	return <Box
		component="form"
		sx={{ paddingY: 1, marginX: 3, width: "96%", display: "flex", alignItems: "stretch", justifyContent: "center" }}
		noValidate
		autoComplete="off"
	>
		<TextField id="outlined-basic" label="Search for the full name" variant="outlined" fullWidth onChange={handleOnChangeSearch} />
	</Box>;
};

SearchBar.propTypes = {
	handleSearch: PropTypes.func,
};

export default SearchBar;