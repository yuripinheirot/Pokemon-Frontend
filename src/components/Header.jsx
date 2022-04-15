import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, AppBar, Toolbar, Typography } from "@mui/material";

export const heightHeader = 64;

const style = {
	headerAppBarUI: {
		flexGrow: 1,
		height: heightHeader,
	},
	title: {
		flexGrow: 1,
	},
	menu: {
		marginTop: 35,
	}
};

export default function Header() {
	const navigate = useNavigate();

	return (
		<Box id="headerAppBarUI" sx={style.headerAppBarUI}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={style.title} onClick={() => navigate("/")}>
            Pokemon Project
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
