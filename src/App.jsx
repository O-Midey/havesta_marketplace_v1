import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import VendorStoreFront from "./pages/VendorStoreFront";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/m"
            element={
              <ErrorBoundary>
                <Marketplace />
              </ErrorBoundary>
            }
          />

          <Route
            path="/"
            element={
              <ErrorBoundary>
                <VendorStoreFront />
              </ErrorBoundary>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
