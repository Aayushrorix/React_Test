import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/index';

const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
        // sessionStorage.setItem('state', JSON.stringify(state));   // ===> For store in session storage
    } catch (e) {
        console.error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('state');
        // const stateStr = sessionStorage.getItem('state');   // ===> For store in session storage
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const preloadedState = loadFromLocalStorage();

const store = configureStore({reducer:reducers,preloadedState,middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,})})

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;