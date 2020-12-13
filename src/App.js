import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");

  };
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
<BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">SmartMobile </Link>
        </div>
        <div className="header-links">
            <a href="cart.html">Cosul meu </a>
            <a href="signin.html"> Contul meu </a>
        </div>
    </header>
    <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="index.html">Iphone</a>

            </li>
            <li>
                <a href="index.html">Mac</a>
            </li>
            <li>
                <a href="index.html">Watch</a>
            </li>
            <li>
                <a href="index.html">Accesorii</a>
            </li>
        </ul>

    </aside>
    <main className="main">
     <div className="content">
       <Route path="/product/:id" component={ProductScreen}/>
       <Route path="/" exact = {true} component={HomeScreen} />
       
     </div>
    </main>
    <footer className="footer">
            @All rights reserved
    </footer>
</div>
</BrowserRouter>


  );
}

export default App;
