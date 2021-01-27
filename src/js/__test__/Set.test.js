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

test('test-name', () => {
  const team = new Team();

  team.add({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  });
  const received = () => team.add({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  });
  const expected = 'такой персонаж уже есть в команде';

  expect(received).toThrow(expected);
});

test('test-name with 1 bug in property', () => {
  const team = new Team();

  team.add({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  });
  team.add({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 30,
    defence: 10,
  });
  const received = team.toArray();
  const expected = [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 30,
      defence: 10,
    }];

  expect(received).toEqual(expected);
});
