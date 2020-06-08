import { add } from '../utils/functions'

describe('Add function testing', () => {
  test('Correctly adds 2 integers together', () => {
    expect(add(1000, 2000)).toBe(3000)
  })
  test('Will add a string and number together', () => {
    expect(add(29, '1')).toBe(30)
  })
  test('Returns NaN if non numbers are passed in', () => {
    expect(add('another string', 'string')).toBeNaN()
  })
})
