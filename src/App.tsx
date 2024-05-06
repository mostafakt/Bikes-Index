import { Provider } from "react-redux";
import AppLoader from "./AppLoader";
import { store } from "src/state";
import React from "react";

const App = () => {
  return (
    <Provider store={store}>
      <AppLoader />
    </Provider>
  );
};

export default App;
