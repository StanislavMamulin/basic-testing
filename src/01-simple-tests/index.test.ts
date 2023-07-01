// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 70, b: 8, action: Action.Add});
    expect(result).toBe(78);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: 80, b: 2, action: Action.Subtract});
    expect(result).toBe(78);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a: 7, b: 8, action: Action.Multiply});
    expect(result).toBe(56);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a: 80, b: 2, action: Action.Divide});
    expect(result).toBe(40);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({ a: 2, b: 3, action: Action.Exponentiate});
    expect(result).toBe(8);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 2, b: 3, action: 'invalidAction' as Action});
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({ a: '2', b: '3', action: Action.Add});
    expect(result).toBeNull();
  });
});
