import React from 'react';
import IconLyric from '../../Icons/Lyric';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenLyric } from '../../../redux/features/audioSlice';

const LyricControl = () => {
    const isLyrics = useSelector((state) => state.audio.isLyric);
    const dispatch = useDispatch();

    const handleOpenLyrics = () => {
        isLyrics ? dispatch(setOpenLyric(false)) : dispatch(setOpenLyric(true));
    };

    return (
        <div onClick={handleOpenLyrics}>
            <button className="mx-2 my-0 style__buttons" title="Lyric & Karaoke">
                <IconLyric setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
            </button>
        </div>
    );
};

export default LyricControl;
