import React from 'react';
import IconPrevious from '../../Icons/Previous';
import { useSelector, useDispatch } from 'react-redux';
import { setSongId, setCurrentIndexPlaylist, changeIconPlay } from '../../../redux/features/audioSlice';

const PreviousControl = () => {
    const currnetIndexPlaylist = useSelector((state) => state.audio.currnetIndexPlaylist);
    const playlistSong = useSelector((state) => state.audio.playlistSong);

    const dispatch = useDispatch();

    const handleNextSong = () => {
        if (playlistSong !== undefined && playlistSong.length > 0) {
            let currentIndex;
            if (currnetIndexPlaylist === 0) {
                currentIndex = 0;
            } else {
                currentIndex = currnetIndexPlaylist - 1;
            }

            dispatch(setCurrentIndexPlaylist(currentIndex));

            dispatch(setSongId(playlistSong[currentIndex].encodeId));

            dispatch(changeIconPlay(true));
        }
    };

    return (
        <button onClick={handleNextSong} className="mx-2 my-0 style__buttons" title="Previous Song">
            <IconPrevious setColor="white" setWidth="16px" setHeight="16px" />
        </button>
    );
};

export default PreviousControl;
