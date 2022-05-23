import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LastPrice from './pages/LastPrice.js';
import Government from './pages/Government';
import Sentiment from './pages/Sentiment';
import SiteNav from './components/nav';




function App() {
  const URL = "https://alt-data-site.herokuapp.com/"
  return (

    <Router>
      <SiteNav />
      <Routes>
        <Route exact path = "/" element = {<Home />} />
        <Route path = "/government" element = {<Government URL={URL} />} />
        <Route path = "/sentiment" element = {<Sentiment URL={URL} />} />
        <Route path = "/lastprice" element = {<LastPrice/>} />
      </Routes>
    </Router>
  );
}

export default App;
