import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "../components/Card";

import { Container } from "@mui/material";

const Details = () => {
	const { id } = useParams();

	return <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
		<Card pokemon={id}/>
	</Container>;
};

export default Details;