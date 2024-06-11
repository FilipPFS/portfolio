import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>

            </Routes>
            {/* <Footer /> */}
        </Router>
    )
}

export default AppRouter