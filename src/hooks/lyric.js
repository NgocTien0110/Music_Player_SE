import { useEffect, useState } from 'react';
import { getLyric } from '../api/lyric';

const useLyric = (songId) => {
    const [lyr, setLyr] = useState();

    useEffect(() => {
        (async () => {
            if (songId !== null && songId !== '') {
                const dataLyric = await getLyric(songId);

                let customLyr = [];

                dataLyric.sentences &&
                    dataLyric.sentences.forEach((e, i) => {
                        let lineLyric = '';

                        e.words.forEach((element, index) => {
                            lineLyric = lineLyric + element.data + ' ';
                        });
                        customLyr = customLyr.concat({
                            data: lineLyric,
                        });
                    });

                setLyr(customLyr);
            }
        })();
    }, [songId]);

    return lyr;
};

export default useLyric;
