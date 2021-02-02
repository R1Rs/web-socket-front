import Character from './Character';

export default class MagicPeople extends Character {
  constructor(name, type) {
    super(name, type);
    this.name = name;
    this.type = type;
    this.distance = null;
    this.basicAttack = 10;
    this.defence = 10;
    this.stoned = false;
  }

  set stoned(value) {
    this.stonedMod = value;
  }

  get stoned() {
    return this.stonedMod;
  }

  get attack() {
    if (this.stoned) {
      this.attackMod -= Math.log2(this.distance) * 5;
    }
    return (this.attackMod > 0) ? Math.round(this.attackMod) : 0;
  }

  set attack(value) {
    if (value > 1) {
      this.attackMod = this.basicAttack - this.basicAttack * ((value - 1) / 10);
    } else {
      this.attackMod = this.basicAttack;
    }
    this.distance = value;
  }
}
