import React, {useEffect} from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Routing from './Routing/Routing'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    useEffect(() => {
        const links = document.querySelectorAll('a')
        links.forEach(elem => elem.addEventListener('click', (e) => {e.stopPropagation()}))

    })
    return (
        <div>
            <Router>
                <Header/>
                <Routing />
                <Footer/>
            </Router>
        </div>
      )
    }

export default App;
