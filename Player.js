const Player = (playerName) => {
    let score = 0;

    const getName = () => playerName;
    const getScore = () => score;


    const addPoint = () => score++;




    return {
        getName,
        getScore,
        addPoint
    }

}; 