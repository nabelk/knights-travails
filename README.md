# Knights Travails

## General Information

-   The project is a part of The Odin Project: Full Stack JavaScript
-   This project involves finding the shortest path that a knight chess piece can take on a standard 8x8 chessboard to reach a specific target square from a given starting square.

## Algorithm Steps

1. Create a queue and add the initial node (starting position) to it.
2. Create an empty set to keep track of visited positions.
3. Perform BFS until the queue is empty.
4. Remove the first node from the queue.
5. If the current node is the target position, terminate the algorithm.
6. Generate all possible valid moves from the current node's position.
7. For each valid move, create a new node with the updated position and the path taken so far.
8. Check if the new node's position has already been visited. If not, add it to the queue and mark it as visited.
9. Repeat steps 4-8 until the target position is found or the queue is empty.
10. If the target position is found, return the path stored in the current node.

## Usage

1. Open live demo: https://nabelk.github.io/knights-travails/
2. Click Place Random Knight button.
3. Choose End.
4. Click travail & view console in DevTools to see how many moves and the paths to reach the target from starting square.

## Contact

Created by [@nabelk](https://www.linkedin.com/in/nabil-khalid-36791a241/) - feel free to contact me!
