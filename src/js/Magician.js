import MagicPeople from './MagicPeople';

export default class Magician extends MagicPeople {
  constructor(name) {
    super(name, 'Magician');
    this.basicAttack = 10;
    this.defence = 25;
  }
}
