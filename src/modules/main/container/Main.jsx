import React from "react";
import Content from "components/Content";

import GridAvailablePokemons from "../components/GridAvailablePokemons";

const Main = () => {
	return (
		<Content id="ContentMain">
			<GridAvailablePokemons />
		</Content>
	);
};

export default Main;