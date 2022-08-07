import React from 'react';
import Slider from '../Slider';
import { useSelector } from 'react-redux';

const SongSliderControl = ({ auRef }) => {
    const currentTime = useSelector((state) => state.audio.currentTime);
    const duration = useSelector((state) => state.audio.duration);

    return (
        <Slider
            setWidth={'100%'}
            setHeight={'2px'}
            percentSlider={(currentTime / duration) * 100}
            toogleTooltip={true}
            currentTimeSongTooltip={currentTime}
            getPercentSlider={(value) => {
                if (auRef) {
                    auRef.currentTime = (value / 100) * auRef.duration;
                }
            }}
        />
    );
};

export default SongSliderControl;
