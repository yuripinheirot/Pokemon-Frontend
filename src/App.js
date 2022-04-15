import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//modules
import Main from "modules/main/Layout";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
			</Routes>
		</BrowserRouter>
	);
}
