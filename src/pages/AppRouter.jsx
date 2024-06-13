import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from './Home/Home';
import Footer from '../components/Footer/Footer';
import Projects from './Projects/Projects';
import About from './About/About';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/projects' element={<Projects />}/> 
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default AppRouter