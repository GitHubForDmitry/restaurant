import React from "react";
import RouterComponent from "./routes/Router";
import { AppProvider } from "./context/AppContext";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter basename="/">
        <AppProvider>
          <RouterComponent />
        </AppProvider>
    </HashRouter>
  );
};

export default App;
