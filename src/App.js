import React from 'react';
import RouterComponent from "./routes/Router";
import {AppProvider} from "./context/AppContext";

function App() {
  return (
      <AppProvider>
          <RouterComponent />
      </AppProvider>
  );
}

export default App;
