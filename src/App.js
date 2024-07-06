import { useState } from "react";
import "./App.css";
import AppRouter from "./pages/AppRouter";
import { useSelector } from "react-redux";

function App() {
  const lightMode = useSelector((state) => state.theme.isLightMode);

  return (
    <div className={lightMode ? "lightApp" : "App"}>
      <AppRouter />
    </div>
  );
}

export default App;
