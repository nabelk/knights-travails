import Board from './board';

const { log, table } = console;

const board = Board();
board.knightPosition([3, 3]);

export default class BoardDom {
    removeBoard() {
        document
            .querySelectorAll('#board > div')
            .forEach((child) => child.remove());
    }

    displayBoard() {
        this.removeBoard();
        const boardArr = board.createBoard;

        boardArr.forEach((element, index) => {
            const createRow = document.createElement('div');
            createRow.className = `row-${index}`;

            element.forEach((subElement, idx) => {
                const createColumn = document.createElement('div');
                createColumn.textContent = idx + subElement;
                createColumn.dataset.coor = [index, idx];
                createRow.appendChild(createColumn);
            });

            document.querySelector('#board').appendChild(createRow);
        });
        this.boardColumnEvent();
    }

    boardColumnEvent() {
        document.querySelectorAll('#board > div').forEach((div) =>
            div.addEventListener('click', (event) => {
                board.knightPosition(
                    event.target.dataset.coor.split(',').map(Number)
                );
                this.displayBoard();
            })
        );
    }
}
