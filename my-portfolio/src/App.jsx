import React from "react";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Main from "./pages/Main";


function App() {
  return (
    
    <div style={{ position: "relative", minHeight: "100vh" }}>
    <BackgroundAnimation />
    <div style={{ position: "relative", zIndex: 1 }}>

      <Main/>

    </div>
  </div>
  );
}

export default App;
