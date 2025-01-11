import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import Category from './components/Category';
import ProductPage from './components/ProductPage';
import "@fortawesome/fontawesome-free/css/all.css";
import ImageHoverBox from './components/ImageHoverBox';
import Footer from './components/Footer';
import Review from './components/Review';

function App() {
  const [category, setCategory] = useState(null); // Track selected category

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                {/* Main Page Content */}
                <Shop />
                
                <ImageHoverBox />
                <Category setCategory={setCategory} />

                {/* Display Product Section */}
                <div className="product-section">
                  <ProductPage category={category} />
                </div>

                {/* Reviews Section */}
                <Review />
              </>
            }
          />

          {/* About and Contact Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
