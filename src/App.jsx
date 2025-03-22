import React from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/forbidden" element={<div>!!!!!!!!forbiden</div>} />
          <Route path="/addquestion" element={<div> &?addquestion</div>} />
          <Route path="/question/:id" element={<div> &&?question pages</div>} />

          <Route path="*" element={<div> Not 404 </div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
