import React, { useEffect, useRef } from 'react';
import Controls from './Control';
import { getSong, getInfoSong } from '../../api/song';
import { useSelector, useDispatch } from 'react-redux';
import {
    setInfoSongPlayer,
    setCurrentTime,
    setDuration,
    setSrcAudio,
    changeIconPlay,
} from '../../redux/features/audioSlice';
import { setSongId, setCurrentIndexPlaylist } from '../../redux/features/audioSlice';
import Lyric from './Lyric';

const Player = () => {
    const songId = useSelector((state) => state.audio.songId);
    const srcAudio = useSelector((state) => state.audio.srcAudio);
    const isLoop = useSelector((state) => state.audio.isLoop);
    const isLyric = useSelector((state) => state.audio.isLyric);
    const dispath = useDispatch();

    const currnetIndexPlaylist = useSelector((state) => state.audio.currnetIndexPlaylist);
    const playlistSong = useSelector((state) => state.audio.playlistSong);

    const dispatch = useDispatch();

    const audioRef = useRef();

    useEffect(() => {
        (async () => {
            if (songId !== null && songId !== '') {
                const src = await getSong(songId);
                src[128] ? dispath(setSrcAudio(src[128])) : dispath(setSrcAudio(''));
                const infoSong = await getInfoSong(songId);
                dispath(
                    setInfoSongPlayer({
                        title: infoSong.title,
                        thumbnail: infoSong.thumbnail,
                        artistsNames: infoSong.artistsNames,
                    }),
                );
            }
        })();
    }, [songId, dispath]);

    return (
        <>
            {songId ? (
                <div className="flex flex-col justify-around h-16 backdrop-saturate-[180%] backdrop-blur-[30px] bg-[color:var(--color-navbar-bg)] fixed inset-x-0 bottom-0 z-[100]">
                    <Controls auRef={audioRef.current} />
                </div>
            ) : (
                ''
            )}

            <audio
                ref={audioRef}
                src={srcAudio}
                className="hidden"
                loop={isLoop}
                autoPlay={true}
                hidden
                onTimeUpdate={() => {
                    if (audioRef.current) {
                        dispath(setCurrentTime(audioRef.current.currentTime));
                    }
                }}
                onLoadedData={() => {
                    if (audioRef.current) {
                        dispath(setDuration(audioRef.current.duration));
                    }
                }}
                onEnded={() => {
                    if (!isLoop) {
                        dispath(setCurrentTime(0));
                        dispath(changeIconPlay(false));

                        if (playlistSong !== undefined && playlistSong.length > 0) {
                            let currentIndex;

                            if (currnetIndexPlaylist === playlistSong.length - 1) {
                                currentIndex = 0;
                            } else {
                                currentIndex = currnetIndexPlaylist + 1;
                            }

                            dispatch(setCurrentIndexPlaylist(currentIndex));

                            dispatch(setSongId(playlistSong[currentIndex].encodeId));

                            dispatch(changeIconPlay(true));
                        }
                    }
                }}
            />

            {isLyric ? <Lyric /> : ''}
        </>
    );
};

export default Player;
