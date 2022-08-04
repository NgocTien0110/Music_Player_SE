import axios from '../utils/axios';

interface typesData {
    items: {
        sectionType: string,
    }[];
}

const getHomePlayList = async () => {
    try {
        const data = await axios.get('/home');
        return data.items.filter((e) => e.sectionType === 'playlist');
    } catch (err) {
        console.log(err);
    }
};

export { getHomePlayList };
