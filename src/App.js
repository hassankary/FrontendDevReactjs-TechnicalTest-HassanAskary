import "./tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail/:id" element={<Details/>} />
      </Routes>
    </Router>
  );
}

export default App;
