import React from "react";
import "./App.css";
import EntriesTable from "./components/table";
import Sidebar from "./components/sidebar";

function App() {
	return (
		<div>
			<Sidebar />
			<EntriesTable />
		</div>
	);
}

export default App;
