export default function* randomGoblin(boardSize) {
  let position = null;
  while (position <= boardSize) {
    let newPosition = Math.floor(Math.random() * boardSize);
    if (newPosition === position) {
      newPosition = Math.floor(Math.random() * boardSize);
    }
    position = newPosition;
    yield position;
  }
}
