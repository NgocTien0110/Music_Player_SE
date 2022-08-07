import React, { useEffect, useState } from 'react';
import { getCharthome } from '../api/zingchart';
import TrackPlaylist from '../components/TrackPlaylist';
import { useDispatch } from 'react-redux';
import { setPlaylistSong } from '../redux/features/audioSlice';

const ChartHome = () => {
    const [dataChartHome, setDataChartHome] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            setDataChartHome(await getCharthome());
        })();
    }, []);

    dataChartHome && dispatch(setPlaylistSong(dataChartHome.RTChart.items));

    return (
        <>
            <main className="inset-0 box-border pt-[64px] pb-[96px] px-[10vw]">
                <div className="mt-8">{dataChartHome && <TrackPlaylist items={dataChartHome.RTChart.items} />}</div>
            </main>
        </>
    );
};

export default ChartHome;
