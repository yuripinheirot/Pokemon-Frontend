import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "components/Header";
import MainContainer from "components/MainContainer";

//modules
import Main from "modules/main/Layout";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<MainContainer>
				<Routes>
					<Route path='/' element={<Main />} />
				</Routes>
			</MainContainer>
		</BrowserRouter>
	);
}
