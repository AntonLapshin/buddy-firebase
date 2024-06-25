import { render } from "preact";
import { App } from "./app.tsx";
import "./index.css";
import "./firebase";

render(<App />, document.getElementById("app")!);
