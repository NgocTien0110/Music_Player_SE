import axios from '../utils/axios';

const getArtist = async (name) => {
    try {
        return await axios.get('/artist', {
            params: {
                name: name,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

export { getArtist };
