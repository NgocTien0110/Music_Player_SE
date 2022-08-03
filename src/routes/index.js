import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Top100 from '../pages/Top100';
import ChartHome from '../pages/ChartHome';

const RouterPage = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/zingchart" element={<ChartHome />} />
            <Route path="/top100" element={<Top100 />} />
        </Routes>
    );
};

export default RouterPage;
