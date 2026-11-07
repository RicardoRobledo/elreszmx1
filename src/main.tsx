import "@fontsource-variable/inter/wght.css";
import "@fontsource/anton/latin-400.css";
import "@fontsource/space-mono/latin-400.css";
import "@fontsource/space-mono/latin-700.css";
import "./styles/index.css";

import { ViteReactSSG } from "vite-react-ssg/single-page";
import App from "./App";

export const createRoot = ViteReactSSG(<App />);
