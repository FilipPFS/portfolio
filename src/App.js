import { useState } from "react";
import "./App.css";
import AppRouter from "./pages/AppRouter";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const lightMode = useSelector((state) => state.theme.isLightMode);

  return (
    <div className={lightMode ? "lightApp" : "App"}>
      <AppRouter />
      <ToastContainer />
    </div>
  );
}

export default App;
