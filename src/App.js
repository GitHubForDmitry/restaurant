import React from 'react';
import RouterComponent from "./routes/Router";
import { AppProvider } from "./context/AppContext";
import ErrorBoundary from "./errorBoundary";

function App() {
  return (
      <ErrorBoundary>
          <AppProvider>
              <RouterComponent />
          </AppProvider>
      </ErrorBoundary>

  );
}

export default App;
