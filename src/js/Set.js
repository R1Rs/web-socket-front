export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    this.members.forEach((el) => {
      for (const key in el) {
        if (key in character && el[key] === character[key]) {
          throw new Error('такой персонаж уже есть в команде');
        }
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
