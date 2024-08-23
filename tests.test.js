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

test('Reverse 1', () => {
  expect(reverseString('hobbit')).toBe('tibboh')
})

test('Reverse 2', () => {
  expect(reverseString('to isengard')).toBe('dragnesi ot')
})

test('Reverse 3', () => {
  expect(reverseString('Mickey Mouse')).toBe('esuoM yekciM')
})

test('Add 1', () => {
  expect(calculator.add(1,2)).toBe(3)
})

test('Add 2', () => {
  expect(calculator.add(67, 13)).toBe(80)
})

test('Subtract 1', () => {
  expect(calculator.subtract(4, 2)).toBe(2)
})

test('Subtract 2', () => {
  expect(calculator.subtract(187, 50)).toBe(137)
})

test('Subtract Negative', () => {
  expect(calculator.subtract(3, 7)).toBe(-4)
})

test('Multiply 1', () => {
  expect(calculator.multiply(20, 2)).toBe(40)
})

test('Multiply Deciaml', () => {
  expect(calculator.multiply(1.5, 3)).toBe(4.5)
})

test('Divide 1', () => {
  expect(calculator.divide(20, 2)).toBe(10)
})

test('Divide Decimal', () => {
  expect(calculator.divide(4.5, 3)).toBe(1.5)
})

test('Casesar Cipher 1', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc')
})

test('Casesar Cipher Case Sensitive', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})

test('Casesar Cipher Punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('analyzeArray', () => {
  let testCases = [
    {
      input: [1,8,3,4,2,6],
      output: {
        average: 4,
        min: 1,
        max: 8,
        length: 6
     }
    },
    {
      input: [2,5,3,4,7,9],
      output: {
        average: 5,
        min: 2,
        max: 9,
        length: 6
     }
    },
  ]
  testCases.forEach((t) => {
    expect(analyzeArray(t.input)).toEqual(t.output)
  });
});