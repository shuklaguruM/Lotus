//import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
//import UserTree from "./OrgTree";
import PageLayout from "./pages/pageLayout";
import { useState } from "react";
//import employees from "./data";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={<LoginPage theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="/user/:username"
          element={<PageLayout theme={theme} setTheme={setTheme} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
