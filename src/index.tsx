import { render } from "preact";
import "./style.css";
import { Shop } from "./components/Shop/Shop";

export function App() {
  return <Shop />;
}

render(<App />, document.getElementById("app"));
