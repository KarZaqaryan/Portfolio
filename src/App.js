import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/layout/layout";
import Home from "./component/outlet/home/home";
import Projects from "./component/outlet/projects/projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
