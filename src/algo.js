import Board from './board';

class Node {
    constructor(posArr, path) {
        if (this.isPositionOutOfBounds(posArr)) {
            this.pos = null;
            this.path = null;
        } else {
            this.pos = posArr;
            this.path = path;
        }
    }

    isPositionOutOfBounds(pos) {
        return pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7;
    }
}

export default function Algorithm() {
    const board = Board();

    const knightMovement = [
        [1, 2],
        [1, -2],
        [2, 1],
        [2, -1],
        [-1, 2],
        [-1, -2],
        [-2, 1],
        [-2, -1],
    ];

    function getPossibleMove(currentPos) {
        const moves = knightMovement.map((move) => [
            currentPos[0] + move[0],
            currentPos[1] + move[1],
        ]);

        return moves;
    }

    function knightTravail(start, end) {
        const initialNode = new Node(start, [start]);
        let queue = [];
        queue.push(initialNode);
        let currentNode = queue.shift();

        while (currentNode.pos[0] !== end[0] || currentNode.pos[1] !== end[1]) {
            let moves = getPossibleMove(currentNode.pos);
            moves.forEach((move) => {
                const newNode = new Node(move, currentNode.path.concat([move]));
                if (newNode.pos) queue.push(newNode);
            });
            currentNode = queue.shift();
        }

        return currentNode.path;
    }

    return { board, knightTravail };
}
