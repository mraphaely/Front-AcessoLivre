import { Routes, Route } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Pages/Home';
import Sobre from '../Components/Pages/Sobre';
import Recursos from '../Components/Pages/Recursos';
import Blog from '../Components/Pages/Blog';
import Contato from '../Components/Pages/Contato';
import Comecar from '../Components/Pages/Comecar';
import NotFound from '../Components/Pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/comecar" element={<Comecar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
