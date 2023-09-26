
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Projects from "./Pages/Projects/Projects";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/:id" element={<Dashboard />} />
        <Route path="/" element={<Projects />} />
      </Routes>
    </HashRouter>
    );
}

export default App;
