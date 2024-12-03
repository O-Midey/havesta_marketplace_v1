
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MarketPlace from './pages/MarketPlace/MarketPlace';
import ScrollToTop from './common/scrollToTop';
// import UserSignup from './pages/UserSignup';

// import SideModal from './common/SideModal';
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<MarketPlace />} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
