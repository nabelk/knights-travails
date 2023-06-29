export default function Board() {
    let createBoard = Array.from({ length: 8 }, () => new Array(8).fill(''));
    let prevPosition;

    function knightPosition(arr) {
        const n = prevPosition;
        if (prevPosition) createBoard[n[0]][n[1]] = '';
        prevPosition = [arr[0], arr[1]];
        createBoard[arr[0]][arr[1]] = 'K';
    }

    return { createBoard, knightPosition };
}
