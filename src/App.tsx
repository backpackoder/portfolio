import { useState } from "react";

// CSS style
import "./App.css";

// Components
import { AppConsumer } from "./AppConsumer";
import { AppProvider } from "./AppProvider";

function App() {
  return (
    <>
      <AppProvider>
        <AppConsumer />
      </AppProvider>
    </>
  );
}

export default App;
