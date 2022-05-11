import {  createStore, applyMiddleware } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./jsx/redux/rootSaga";

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [
//     ...getDefaultMiddleware(),
//     createLogger(process.env.NODE_ENV === "development")
//   ]
// });
const saga = createSagaMiddleware();

const store = createStore(rootReducer,applyMiddleware(saga));

saga.run(rootSaga);

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rootReducer", () => {
    const newRootReducer = require("./rootReducer").default;
    store.replaceReducer(newRootReducer);
  });
}
// export type AppDispatch = typeof store.dispatch;
// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
