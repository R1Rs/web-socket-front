import MagicPeople from '../MagicPeople';

test('test attack from class MagicPeople', () => {
  const mag = new MagicPeople('Mag', 'Magician');
  mag.attack = 2;
  expect(mag.attack).toBe(9);
});

test('test attack with stoned from MagicPeople', () => {
  const mag = new MagicPeople('Mag', 'Magician');
  mag.attack = 2;
  mag.stoned = true;
  expect(mag.attack).toBe(4);
});

test('test attack = 0 from MagicPeople', () => {
  const mag = new MagicPeople('Mag', 'Magician');
  mag.attack = 1000;
  expect(mag.attack).toBe(0);
});
