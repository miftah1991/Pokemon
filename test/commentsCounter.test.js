import commentCounter from './commentsCounter.js';

describe('Testing comments counter function', () => {
  test('Count comments', () => {
    const items = [{
      item_id: 'item1',
      username: 'Jane',
      comment: 'Hello',
    },
    {
      item_id: 'item1',
      username: 'Sergio',
      comment: 'Helloooooo',
    }];
    const itesmLength = items.length;
    const res = commentCounter(items);
    expect(res).toBe(itesmLength);
  });
});