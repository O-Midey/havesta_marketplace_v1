import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Marketplace from "./pages/Marketplace";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
