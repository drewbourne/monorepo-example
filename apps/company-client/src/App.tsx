import { useState } from "react";
import { Button } from "@company-ui/button";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<h2>Button rank</h2>
				<Button rank="primary">Button</Button>
				<Button rank="secondary">Button</Button>
				<Button rank="tertiary">Button</Button>
			</div>
			<div>
				<h2>Button size="large"</h2>
				<Button rank="primary" size="large">
					Button
				</Button>
				<Button rank="secondary" size="large">
					Button
				</Button>
				<Button rank="tertiary" size="large">
					Button
				</Button>
			</div>
			<div>
				<h2>Button size="medium"</h2>
				<Button rank="primary" size="medium">
					Button
				</Button>
				<Button rank="secondary" size="medium">
					Button
				</Button>
				<Button rank="tertiary" size="medium">
					Button
				</Button>
			</div>
			<div>
				<h2>Button size="small"</h2>
				<Button rank="primary" size="small">
					Button
				</Button>
				<Button rank="secondary" size="small">
					Button
				</Button>
				<Button rank="tertiary" size="small">
					Button
				</Button>
			</div>
		</div>
	);
}

export default App;
