import Example from './index';

describe('this is a suite', () => {
  it('should test the code', () => {
    expect(typeof Example).toBe('function');
  });
});
