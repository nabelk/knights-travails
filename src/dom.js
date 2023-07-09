import Algorithm from './algo';

const { log, table } = console;

const algo = Algorithm();
const board = algo.board;
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
        for (let rowIdx = boardArr.length - 1; rowIdx >= 0; rowIdx--) {
            const createRow = document.createElement('div');
            createRow.className = `row-${rowIdx}`;

            boardArr[rowIdx].forEach((subElement, idx) => {
                const createColumn = document.createElement('div');
                if (subElement === 'K')
                    createColumn.style.backgroundColor = 'green';
                createColumn.textContent = idx + subElement;
                createColumn.dataset.coor = [rowIdx, idx];
                createRow.appendChild(createColumn);
            });

            document.querySelector('#board').appendChild(createRow);
        }
        this.boardColumnEvent();
    }

    boardColumnEvent() {
        document.querySelectorAll('#board > div > div').forEach((div) =>
            div.addEventListener('click', (event) => {
                board.knightPosition(
                    event.target.dataset.coor.split(',').map(Number)
                );
                this.displayBoard();
            })
        );
    }

    travailMoveDom() {
        const findPath = algo.knightTravail([3, 3], [0, 5]);

        findPath.forEach((path, index) => {
            setTimeout(() => {
                board.knightPosition(path);

                this.displayBoard();
            }, index * 500);
        });
    }
}
