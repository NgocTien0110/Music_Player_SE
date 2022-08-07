import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Top100 from '../pages/Top100';
import ChartHome from '../pages/ChartHome';
import SearchResult from '../components/Navbar/SearchBox/SearchResult';
import DetailPlaylist from '../pages/DetailPlaylist';

const RouterPage = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/zingchart" element={<ChartHome />} />
            <Route path="/top100" element={<Top100 />} />
            <Route path="/search" element={<SearchResult />}>
                <Route path=":keyword" element={<SearchResult />} />
            </Route>
            <Route path="/playlist" element={<DetailPlaylist />}>
                <Route path=":playlistId" element={<DetailPlaylist />} />
            </Route>
        </Routes>
    );
};

export default RouterPage;
