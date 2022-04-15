import React from "react";
import { Routes, Route } from "react-router-dom";

import Details from "./container/Details";

const Layout = () => {
	return (
		<Routes>
			<Route path="/:id" element={<Details />} />
		</Routes>
	);
};

export default Layout;