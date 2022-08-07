import React from 'react';
import RouterPage from './routes';
import Navbar from './components/Navbar';

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
