import Team from '../Set';
import Bowman from '../Bowman';
import Character from '../Character';

test('test add from Team', () => {
  const Bow = new Bowman('Bow');
  const TeamBowPersons = new Team();
  TeamBowPersons.add(Bow);
  const received = () => TeamBowPersons.add(Bow);
  const expected = 'такой персонаж уже есть в команде';

  expect(received).toThrow(expected);
});

test('test toArray and from Team', () => {
  const Bow = new Bowman('Bow');
  const Swordsman = new Character('Swo', 'Swordsman');
  const TeamBowAndSwo = new Team();
  TeamBowAndSwo.addAll(Bow, Swordsman);
  const members = TeamBowAndSwo.toArray();
  const expected = [
    {
      name: 'Bow',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },

    {
      name: 'Swo',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: null,
      defence: null,
    },
  ];
  expect(members).toEqual(expected);
});
