import pokesCounter from './itemscountMock.js';

describe('Testing items counter function', () => {
  test('Count movies', () => {
    const items = ['pok1', 'pok2', 'pok3'];
    const itesmLength = items.length;
    const res = pokesCounter(items);
    expect(res).toBe(itesmLength);
  });
});