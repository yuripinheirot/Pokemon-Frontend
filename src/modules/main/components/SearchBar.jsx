import React from "react";

import { Box, TextField, Button } from "@mui/material";

const SearchBar = () => {
	return <Box
		component="form"
		sx={{ paddingY: 1, marginX: 3, width: "96%", display: "flex", alignItems: "stretch", justifyContent: "center" }}
		noValidate
		autoComplete="off"
	>
		<TextField id="outlined-basic" label="Search for the full name" variant="outlined" fullWidth />
		<Button sx={{ paddingX: 2, marginLeft: 1 }} variant="contained">SEARCH</Button>
	</Box>;
};

export default SearchBar;