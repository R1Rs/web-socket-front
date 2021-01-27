export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    this.members.forEach((el) => {
      if (JSON.stringify(el) === JSON.stringify(character)) {
        throw new Error('такой персонаж уже есть в команде');
      }
    });
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((pers) => {
      this.members.add(pers);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
