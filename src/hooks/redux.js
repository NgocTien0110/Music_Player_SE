import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import { RootState, AppDispatch } from "../redux/store"
import store from '../redux/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => {
    store.dispatch = useDispatch;
};

// UNSOLVED

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
