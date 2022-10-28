import logo from './logo.svg';

import Header from './components/Header';
import Main from './components/Main'
import Recomend from './components/Recomendation';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Recomend />
      <Footer />
    </div>
  );
}

export default App;
