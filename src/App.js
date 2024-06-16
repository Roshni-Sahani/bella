import './App.css';
import Create from './components/Create';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Now from './components/Now';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Create />
      <Now />
      <Footer />
    </div>
  );
}

export default App;
