import Algorithm from './algo';

const { log, table } = console;

const algo = Algorithm();
const board = algo.board;

export default class BoardDom {
    getRandomArr() {
        const [row, column] = [
            Math.floor(Math.random() * 8),
            Math.floor(Math.random() * 8),
        ];
        return [row, column];
    }

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
                if (subElement === 'K') {
                    createColumn.innerHTML = '&#9822;';
                    createColumn.classList.add('column-knight');
                }
                if (subElement === 'E')
                    createColumn.style.backgroundColor = '#fb5454';
                createRow.appendChild(createColumn);
            });

            document.querySelector('#board').appendChild(createRow);
        }
    }

    placeRandomKnight() {
        board.knightPosition(this.getRandomArr());
        this.displayBoard();
    }

    placeRandomKnightDestination() {
        const randomArr = this.getRandomArr();
        if (randomArr === board.getCurKnightPos())
            return this.placeRandomKnightDestination();
        board.knightPosToGo(randomArr);
        this.displayBoard();
    }

    travailMoveDom() {
        const findPath = algo.knightTravail(
            board.getCurKnightPos(),
            board.getEndKnightPos()
        );

        log(`You made it in ${findPath.length - 1} moves!  Here's your path:`);

        findPath.forEach((path, index) => {
            log(path);
            setTimeout(() => {
                board.knightPosition(path);
                this.displayBoard();
            }, index * 500);
        });

        setTimeout(() => {
            location.reload();
        }, 5000);
    }
}
