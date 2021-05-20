import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

test('test GameSavingLoader ', () => GameSavingLoader.load().then((saving) => {
  const data = new GameSaving(
    '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}',
  );
  expect(saving).toEqual(expect.objectContaining(data));
}));
