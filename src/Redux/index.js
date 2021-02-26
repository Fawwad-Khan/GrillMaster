import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { grillReducer } from "./Grill";
import { createLogger } from "redux-logger";

const RootReducer = combineReducers({
  grillReducer,
});

const logger = createLogger();
const middlewares = [thunk];

if (process.env.REACT_APP_STAGE === "dev") {
  middlewares.push(logger);
}
export const ConfigureStore = () => {
  return createStore(RootReducer, applyMiddleware(...middlewares));
};