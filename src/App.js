import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Generos from './pages/generos';
import EditarGenero from './controllers/EditarGenero';
import NovoGenero from './controllers/NovoGenero';

const Home = () => {
  return <h1>Home</h1>;
};

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data);
    });
  }, []);
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/generos/:id" component={EditarGenero} />
        <Route exact path="/generos/novo" component={NovoGenero} />
        <Route exact path="/generos" component={Generos} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  );
}

export default App;
