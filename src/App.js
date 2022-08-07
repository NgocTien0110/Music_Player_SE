import React from 'react';
import RouterPage from './routes';
import Navbar from './components/Navbar';
import store from './redux/store';
import Player from './components/Player';
import { Provider } from 'react-redux';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Navbar />
                <RouterPage />
                <Player />
            </Provider>
        </div>
    );
}

export default App;
