import React, { useEffect } from 'react';
import './index.css';

const App: React.FC = () => {
    useEffect(() => {
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.MainButton.text = "Start Durak Game";
            window.Telegram.WebApp.MainButton.show();
            window.Telegram.WebApp.MainButton.onClick(() => {
                alert('Game is starting via Telegram button!');
                // Add game starting logic here
            });
        }
    }, []);

    const handleStartButtonClick = () => {
        alert('Game is starting!');
        // Add game starting logic here
    };

    return (
        <div className="container">
            <header>
                <h1>Durak Online</h1>
            </header>
            <main>
                <div className="game-intro">
                    <p>Welcome to the online card game "Durak". Start the game and enjoy!</p>
                    <button id="start-button" onClick={handleStartButtonClick}>
                        Start Game
                    </button>
                </div>
            </main>
        </div>
    );
};

export default App;
