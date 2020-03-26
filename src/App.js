import React from "react";
import RouterComponent from "./routes/Router";
import { AppProvider } from "./context/AppContext";
import ErrorBoundary from "./errorBoundary";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter basename="/">
      <ErrorBoundary>
        <AppProvider>
          <RouterComponent />
        </AppProvider>
      </ErrorBoundary>
    </HashRouter>
  );
};

export default App;
