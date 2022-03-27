import { createStore } from "redux";
import reduces from "./reducers/index";

const store = createStore(reduces);
