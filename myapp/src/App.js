import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import GalleryPage from './GalleryPage';
import IndexPage from './IndexPage';
import SermonsPage from './SermonsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sermons" element={<SermonsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;