import randomGoblin from './RandomGoblin';

export default class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.container = null;
  }

  init(container) {
    this.container = container;
    this.container.innerHTML = `
        <div class="board-container">
          <div data-id="board" class="board"></div>
        </div>
    `;
    this.board = document.querySelector('.board');

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      this.board.appendChild(cellEl);
    }

    this.changePositionGoblin();
  }

  changePositionGoblin() {
    const position = randomGoblin(this.boardSize ** 2);
    setInterval(() => {
      const activePosition = position.next().value;
      this.board.children.forEach((cell) => {
        cell.classList.remove("cell__active");
      });
      this.board.children[activePosition].classList.add("cell__active");
    }, 1000);
  }
}
