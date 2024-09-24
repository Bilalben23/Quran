import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/style.css";
import "./styles/style2.css";
import { Provider } from "react-redux";
import { store } from "./store/index";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
