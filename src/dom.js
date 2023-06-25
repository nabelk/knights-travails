import Board from './board';

const { log, table } = console;

const board = Board();

export default class BoardDom {
    displayBoard() {
        const boardArr = board.createBoard();

        boardArr.forEach((element, index) => {
            const createRow = document.createElement('div');
            createRow.className = `row-${index}`;

            element.forEach((subElement, idx) => {
                const createColumn = document.createElement('div');
                createColumn.textContent = idx;

                createRow.appendChild(createColumn);
            });

            document.querySelector('#board').appendChild(createRow);
        });
    }
}
