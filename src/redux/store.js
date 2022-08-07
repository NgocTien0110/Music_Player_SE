import { configureStore } from '@reduxjs/toolkit';
import audioReducer from './features/audioSlice';

const store = configureStore({
    reducer: {
        audio: audioReducer,
    },
});

export default store;
