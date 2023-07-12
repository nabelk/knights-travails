export default function Board() {
    let createBoard = Array.from({ length: 8 }, () => new Array(8).fill(''));
    let prevPosition;
    let positionToGo;

    function knightPosition(arr) {
        const n = prevPosition;
        if (prevPosition) createBoard[n[0]][n[1]] = '';
        prevPosition = [arr[0], arr[1]];
        createBoard[arr[0]][arr[1]] = 'K';
    }

    function knightPosToGo(arr) {
        const n = positionToGo;
        if (positionToGo) createBoard[n[0]][n[1]] = '';
        positionToGo = [arr[0], arr[1]];
        createBoard[arr[0]][arr[1]] = 'E';
    }

    function getCurKnightPos() {
        return prevPosition;
    }

    function getEndKnightPos() {
        return positionToGo;
    }

    return {
        createBoard,
        knightPosition,
        knightPosToGo,
        getCurKnightPos,
        getEndKnightPos,
    };
}
