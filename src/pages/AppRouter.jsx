import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from './Home/Home';
import Footer from '../components/Footer/Footer';
import Projects from './Projects/Projects';
import About from './About/About';
import SingleProject from './SingleProject/SingleProject';
import Error from './Error/Error';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/projects' element={<Projects />}/> 
                <Route path='/projects/:id' element={<SingleProject />}/>
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Error />}/>
            </Routes>
            <Footer />
        </Router>
    )
}

export default AppRouter