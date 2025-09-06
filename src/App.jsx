import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <Marketplace />
              </ErrorBoundary>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
