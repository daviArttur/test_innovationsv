import { UUIDAdapter } from './UUIDAdapter';

test('should return an id', () => {
  const id = new UUIDAdapter().generate();

  expect(typeof id).toBe('string');
});
