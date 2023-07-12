const { default: boardDom } = require('./dom');

const dom = new boardDom();
dom.displayBoard();

document
    .querySelector('.btn-mode > button:first-child')
    .addEventListener('click', () => dom.placeRandomKnight());

document
    .querySelector('.btn-mode > button:nth-child(2)')
    .addEventListener('click', () => dom.placeRandomKnightDestination());

document
    .querySelector('.btn-mode > button:nth-child(3)')
    .addEventListener('click', () => dom.travailMoveDom());
