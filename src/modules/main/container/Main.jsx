import React, { useEffect, useState } from "react";
import Content from "components/Content";
import MainStore from "modules/main/stores/main";

import GridAvailablePokemons from "../components/GridAvailablePokemons";

const Main = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		MainStore.getPokemonOffset(0).then(res => {
			setData(res.results);
		});
	}, []);

	return (
		<Content id="ContentMain">
			<GridAvailablePokemons data={data} />
		</Content>
	);
};

export default Main;