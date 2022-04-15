import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { dark } from "constants/colors";

const DivContent = styled.div `
	background-color: ${dark.background.default};
	height: auto;
	width: 100%;
`;

const Content = ({ id, children, ...props }) => {
	return (
		<DivContent  id={id} {...props}>
			{children}
		</DivContent>
	);
};

Content.propTypes = {
	children: PropTypes.node,
	props: PropTypes.object,
	id: PropTypes.string.isRequired,
};

export default Content;