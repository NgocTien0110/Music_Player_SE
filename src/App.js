import React from 'react';
import RouterPage from './routes';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            {/* //     <header className="App-header">
        //         <h1>React App - NTPShin</h1>
        //     </header> */}
            <Navbar />
            <RouterPage />
        </div>
    );
}

export default App;
