import { useState } from "react";

// CSS style
import "./App.css";

// Components
import { AppConsumer } from "./AppConsumer";
import { AppProvider } from "./AppProvider";
import { AppVideos } from "./AppVideos";

function App() {
  return (
    <>
      <AppProvider>
        <AppVideos>
          <AppConsumer />
        </AppVideos>
      </AppProvider>
    </>
  );
}

export default App;
