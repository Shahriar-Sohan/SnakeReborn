export const gameConfig = (() => {
    // Access DOM elements
    const gameBoard = document.getElementById('gameBoard');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const resetBtn = document.getElementById('resetBtn');
    
    
    // Check if necessary DOM elements are found
    if (!gameBoard || !scoreDisplay || !resetBtn) {
        throw new Error('Essential HTML elements are missing from the DOM.');
    }

    // Set up the canvas contex
    const ctx = gameBoard.getContext('2d');

    return {
        gameBoard,
        scoreDisplay,
        resetBtn,
        ctx,
        
        unitSize: 24,
        speed: 3,
        objSize: 20,
        gameRunning: false,
        score: 0
    };
})();