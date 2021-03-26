import randomGoblin from './RandomGoblin';

export default class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.container = null;
  }

  init(container) {
    this.container = container;
    this.container.innerHTML = `
    <div> 
        <div class="board-container">
          <div data-id="board" class="board"></div>
        </div>
        <h2>Счёт
          <p> Попадания: 
            <span class="hits"></span>
          </p>
          <p> Промахи:
            <span class="misses"></span>
          </p>
        </h2>
    </div>
    `;
    this.board = document.querySelector('.board');

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      this.board.appendChild(cellEl);
    }

    this.changePositionGoblin();
    this.listenerCellMouseMoved();
    this.listenerCellClick();
  }

  changePositionGoblin() {
    const position = randomGoblin(this.boardSize ** 2);
    setInterval(() => {
      const activePosition = position.next().value;
      this.board.children.forEach((cell) => {
        cell.classList.remove("cell__active");
        cell.classList.remove("bam");
      });
      this.board.children[activePosition].classList.add("cell__active");
    }, 5000);
  }

  listenerCellMouseMoved() {
    this.board.children.forEach((cell) => {
      cell.addEventListener("mouseover", (el) => {
        // if (cell.classList.contains("cell__active")) {
        const hammer = document.createElement("div");
        hammer.classList.add("cursor__active");
        hammer.style.left = `${el.clientX - 50}px`;
        hammer.style.top = `${el.clientY - 40}px`;
        cell.insertAdjacentElement("beforebegin", hammer);
      });
      cell.addEventListener("mouseout", () => {
        const hammer = document.querySelectorAll(".cursor__active");
        hammer.forEach((elem) => elem.remove());
      });
    });
  }

  listenerCellClick() {
    this.board.children.forEach((cell) => {
      cell.addEventListener("click", (el) => {
        if (cell.classList.contains("cell__active")) {
          cell.classList.remove("cell__active");
          cell.classList.add("bam");
          let hits = document.querySelector(".hits");
          // eslint-disable-next-line no-plusplus
          hits.textContent++;
        } else {
          let misses = document.querySelector(".misses");
          // eslint-disable-next-line no-plusplus
          misses.textContent++;
          if (misses.textContent == 2) {
            alert("GAME OVER");
            new GamePlay().init(document.querySelector('.container'));
          }
        }
      });
    });
  }
}
