import React from 'react';
import IconVolume from '../../Icons/Volume';
import IconVolumeMute from '../../Icons/VolumeMute';
import { useSelector, useDispatch } from 'react-redux';
import { changeIconVolume, setVolume } from '../../../redux/features/audioSlice';

const VolumeControl = ({ auRef }) => {
    const isMute = useSelector((state) => state.audio.isMute);
    // const volume = useSelector((state) => state.audio.volume)
    const dispatch = useDispatch();

    const handleMuteVolume = () => {
        if (isMute) {
            dispatch(changeIconVolume(false));
            dispatch(setVolume(Number(localStorage.getItem('volume'))));
            if (auRef) {
                auRef.volume = Number(localStorage.getItem('volume'));
            }
        } else {
            dispatch(changeIconVolume(true));
            dispatch(setVolume(0));
            if (auRef) {
                auRef.volume = 0;
            }
        }
    };

    return (
        <div onClick={handleMuteVolume}>
            {isMute ? (
                <button className="mx-2 my-0 style__buttons" title="Mute">
                    <IconVolumeMute setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
                </button>
            ) : (
                <button className="mx-2 my-0 style__buttons" title="Mute">
                    <IconVolume setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
                </button>
            )}
        </div>
    );
};

export default VolumeControl;
