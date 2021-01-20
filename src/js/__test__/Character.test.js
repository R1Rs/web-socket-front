import Character from '../Character';

test('test level from class Character', () => {
  const person = new Character('Bow', 'Bowman');
  person.attack = 10;
  person.defence = 10;
  const expected = {
    name: 'Bow',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 10,
    defence: 10,
  };

  expect(person).toEqual(expected);
});

test('test name from class Character', () => {
  const received = () => new Character('B', 'Bowman');
  const expected = 'имя от 2 до 10 символов';

  expect(received).toThrow(expected);
});

test('test type from class Character', () => {
  const received = () => new Character('Bow', 'sadfa');
  const expected = 'тип должен быть в списке';

  expect(received).toThrow(expected);
});
