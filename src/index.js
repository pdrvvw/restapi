import { createRoot } from "react-dom/client";

import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.rtl.min.css"

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
