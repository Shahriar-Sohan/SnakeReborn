export const gameConfig = (() => {
    
    const gameBoard = document.getElementById('gameBoard');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const resetBtn = document.getElementById('resetBtn');
    
    
    // Check if necessary DOM elements are found
    if (!gameBoard || !scoreDisplay || !resetBtn) {
        throw new Error('Essential HTML elements are missing from the DOM.');
    }

    
    const ctx = gameBoard.getContext('2d');

    return {
        gameBoard,
        scoreDisplay,
        resetBtn,
        ctx,
        
        speed: 3,
        gameRunning: false,
        score: 0
    };
})();