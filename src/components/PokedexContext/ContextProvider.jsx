import React, { useState } from "react";
import PropTypes from "prop-types";
import PokedexStore from "./pokedexStore";

const PokedexContext = React.createContext();

const PokedexProvider = ({ children }) => {
	const [pokedex, setPokedex] = useState([]);

	const addPokedex = async (pokemon) => {
		await PokedexStore.addPokedex(pokemon);
	};

	const removePokedex = async (pokemon) => {
		await PokedexStore.removePokedex(pokemon);
	};

	const fetchPokedex = () => {
		PokedexStore.getPokedex().then(setPokedex);
	};

	return <PokedexContext.Provider value={{ pokedex, addPokedex, fetchPokedex }}>
		{children}
	</PokedexContext.Provider>;
};

PokedexProvider.propTypes = {
	children: PropTypes.node
};

export { PokedexProvider, PokedexContext };

