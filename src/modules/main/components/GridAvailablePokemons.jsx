import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";

const GridAvailablePokemons = ({ data }) => {
	const renderCards = data.map((item, index) => <Card key={index} {...item} />);

	return <div>
		{renderCards}
	</div>;
};

GridAvailablePokemons.propTypes = {
	data: PropTypes.array,
};

export default GridAvailablePokemons;