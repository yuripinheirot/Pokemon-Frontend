import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "components/Header";

//modules
import Main from "modules/main/Layout";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
			</Routes>
		</BrowserRouter>
	);
}
