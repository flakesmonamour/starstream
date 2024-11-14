import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Forum from './components/Forum';
import CreateProfile from './components/CreateProfile';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/forum" element={<Forum />} />
            <Route path="/create-profile" element={<CreateProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}