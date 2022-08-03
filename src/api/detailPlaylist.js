import axios from '../utils/axios';

const getDetailPlaylist = async (id) => {
    try {
        return await axios.get('/detailplaylist', {
            params: {
                id: id,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

export { getDetailPlaylist };
