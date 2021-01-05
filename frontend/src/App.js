import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <Router>
      <div className='grid-container'>
        {/* Heading */}
        <header className='header'>
          <div className='brand'>
            <button onClick={openMenu}>&#9776;</button>
            <Link to='/'>Amazona</Link>
          </div>
          <div className='header-links'>
            <a href='cart.html' style={{ marginRight: '2rem' }}>
              Cart
            </a>
            <a href='signin.html'>SignIn</a>
          </div>
        </header>

        {/* Sidebar */}
        <aside className='sidebar'>
          <h3>Shopping Categories</h3>
          <button className='sidebar-close-button' onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href='index.html'>Pants</a>
            </li>
            <li>
              <a href='index.html'>Shirts</a>
            </li>
          </ul>
        </aside>

        {/* Middle portion */}
        <main className='main'>
          <div className='content'>
            <Route path='/' exact={true} component={HomeScreen} />
            <Route path='/products/:id' component={ProductScreen} />
          </div>
        </main>

        {/* Footer */}
        <footer className='footer'>All Rights Reserved</footer>
      </div>
    </Router>
  );
}

export default App;
