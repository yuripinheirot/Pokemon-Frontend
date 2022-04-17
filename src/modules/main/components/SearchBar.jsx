import React, { useState } from "react";
import PropTypes from "prop-types";

import { Box, TextField, Button } from "@mui/material";

const SearchBar = ({ handleSearch }) => {
	const [search, setSearch] = useState("");

	const handleOnChangeSearch = () => {
		handleSearch(search);
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
			<Button variant='contained' onClick={handleOnChangeSearch} sx={{ marginLeft: 2 }}>
				SEARCH
			</Button>
		</Box>
	);
};

SearchBar.propTypes = {
	handleSearch: PropTypes.func,
};

export default SearchBar;
