import { init } from '../src/app';

describe('App', () => {
  it('should return "S2 TYPESCRIPT MODULE INITIALIZED"', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    init();
    expect(consoleSpy).toHaveBeenCalledWith('S2 TYPESCRIPT MODULE INITIALIZED');
  });
});
