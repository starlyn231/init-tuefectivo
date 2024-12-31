import "./App.css";
import Layout from "./layouts/appLayout";
import Dashboard from "./pages/dashboard/dashboard";
import FileQuery from "./pages/file/fileQuery/file-query";
import FileUpload from "./pages/file/fileUpload/file-upload";
import Home from "./pages/Home/home";

import { Button, Title, Wrapper } from "./styled-components/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (

    <Routes>
    {/* Rutas principales con Layout */}
    <Route path="/" element={<Layout />}>
      {/* Rutas hijas */}
      <Route path="/home" element={<Home />} />
      <Route path="/filesUpload" element={<FileUpload />} />
      <Route path="/filesQuery" element={<FileQuery />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
 
  );
}

export default App;
