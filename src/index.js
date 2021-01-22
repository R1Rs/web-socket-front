import Team from './js/Set';
import Character from './js/Character';
import Bowman from './js/Bowman';

const Bow = new Bowman('Bow');
const Swordsman = new Character('Swo', 'Swordsman');
const TeamBowAndSwo = new Team();
TeamBowAndSwo.addAll(Bow, Swordsman);
