import Board from './board';

const { log, table } = console;

const board = Board();

export default class BoardDom {
    displayBoard() {
        const boardArr = board.createBoard();

        boardArr.forEach((element, index) => {
            document.querySelector('#board').appendChild(
                Object.assign(document.createElement('div'), {
                    textContent: index,
                })
            );
        });
    }
}
