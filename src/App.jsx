import React from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<div>home</div>} />
          <Route path="/forbidden" element={<div>!!!!!!!!forbiden</div>} />
          <Route
            path="/addquestion"
            element={<div> &&&&&&?????addquestion</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
