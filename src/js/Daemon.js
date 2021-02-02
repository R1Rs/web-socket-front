import MagicPeople from './MagicPeople';

export default class Daemon extends MagicPeople {
  constructor(name) {
    super(name, 'Daemon');
    this.basicAttack = 25;
    this.defence = 25;
  }
}
