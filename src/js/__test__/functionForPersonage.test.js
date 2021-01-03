import functionForPersonage from '../functionForPers';

test('test sort', () => {
  const object = {
    name: 'гречник',
    health: 110,
    level: 22,
    attack: 80,
    defence: 40,
  };

  const received = functionForPersonage(object, ['name', 'level']);

  const expected = [
    { key: 'name', value: 'гречник' },
    { key: 'level', value: 22 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 110 },
  ];

  expect(received).toEqual(expected);
});
