import React from "react";
import PropTypes from "prop-types";

import { Container } from "@mui/material";

const Content = ({ id, children, ...props }) => {
  return (
    <Container id={id} {...props}>
      {children}
    </Container>
  );
};

Content.propTypes = {
  children: PropTypes.node,
  props: PropTypes.object,
  id: PropTypes.string.isRequired,
};

export default Content;
