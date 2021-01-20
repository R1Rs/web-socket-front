import Bowman from '../Bowman';

test('тест классы Bowman', () => {
  const person = new Bowman('Bow');
  const expected = {
    name: 'Bow',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(person).toEqual(expected);
});
