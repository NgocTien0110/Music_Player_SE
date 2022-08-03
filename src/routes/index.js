import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Top100 from '../pages/Top100';

const RouterPage = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/top100" element={<Top100 />} />
            {/* <Route path="/zingchart" element={<ChartHome />} /> */}
        </Routes>
    );
};

export default RouterPage;
