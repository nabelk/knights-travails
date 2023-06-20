export default function Board() {
    function createBoard() {
        return new Array(64).fill('');
    }

    return { createBoard };
}
