import axios from '../utils/axios';

const getLyric = async (id) => {
    try {
        return await axios.get('/lyric', {
            params: {
                id: id,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

export { getLyric };
