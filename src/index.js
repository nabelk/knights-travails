const { default: boardDom } = require('./dom');

const dom = new boardDom();
dom.displayBoard();
dom.boardColumnEvent();
