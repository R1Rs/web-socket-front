export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('такой персонаж уже есть в команде');
    } else {
      this.members.add(character);
    }
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
