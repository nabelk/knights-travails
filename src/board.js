export default function Board() {
    function createBoard() {
        return new Array(8).fill(new Array(8).fill(''));
    }

    return { createBoard };
}
