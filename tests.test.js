import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./tests";

test('Capitalize 1', () =>{
  expect(capitalize('hello')).toBe('Hello')
});

test('Capitalize 2', () =>{
  expect(capitalize('alAcaZam')).toBe('AlAcaZam')
});

test('Capitalize 3', () =>{
  expect(capitalize('rIDICULOUS')).toBe('RIDICULOUS')
});