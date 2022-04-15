import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { PokedexProvider } from "components/PokedexContext/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<PokedexProvider>
			<App />
		</PokedexProvider>
	</React.StrictMode>
);
