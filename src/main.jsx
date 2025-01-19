import "./index.css";
import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
// 1. Імпортуємо провайдер
import { Provider } from "react-redux";
// 2. Імпортуємо створений раніше стор
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <App />
    </Provider>
  </React.StrictMode>
);
