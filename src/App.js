import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <>
    {/* componentes persistentes (fixos) precisam ficar fora do Switch para que os items dentro do switch apareçam */}
      <Navbar /> 
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/about' component={ About } />
        <Route exact path='/portfolio' component={ Portfolio } />
        {/* <Route path='/:id' render={ () => 'apareceu'} /> */}
        <Route path='/*' component={ Home } />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
