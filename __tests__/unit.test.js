// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone number should return true', () => {
  expect(isPhoneNumber('619-111-1111')).toBe(true);
});

test('valid phone number should return true', () => {
  expect(isPhoneNumber('1-999-999-9999')).toBe(true);
});

test('invalid phone number should return false', () => {
  expect(isPhoneNumber('123-123')).toBe(false);
});

test('invalid phone number should return false', () => {
  expect(isPhoneNumber('1231231234')).toBe(false);
});

test('valid email should return true', () => {
  expect(isEmail('nicholas@gmail.com')).toBe(true);
});

test('valid email should return true', () => {
  expect(isEmail('nnn011@ucsd.edu')).toBe(true);
});


test('invalid email should return false', () => {
  expect(isEmail('cse110@ucsd')).toBe(false);
});

test('invalid email should return false', () => {
  expect(isEmail('@ucsd.edu')).toBe(false);
});

test('strong password should return true', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('strong password should return true', () => {
  expect(isStrongPassword('XyZ321123')).toBe(true);
});

test('weak password should return false', () => {
  expect(isStrongPassword('HI')).toBe(false);
});

test('weak password should return false', () => {
  expect(isStrongPassword('123')).toBe(false);
});

test('valid date should return true', () => {
  expect(isDate('05/03/2004')).toBe(true);
});

test('valid date should return true', () => {
  expect(isDate('01/01/2000')).toBe(true);
});

test('invalid date should return false', () => {
  expect(isDate('2024/05/05')).toBe(false);
});

test('invalid date should return false', () => {
  expect(isDate('01/01/12345')).toBe(false);
});

test('valid hex color should return true', () => {
  expect(isHexColor('#ff0000')).toBe(true);
});

test('valid hex color should return true', () => {
  expect(isHexColor('#6a5acd')).toBe(true);
});

test('invalid hex color should return false', () => {
  expect(isHexColor('red')).toBe(false);
});

test('invalid hex color should return false', () => {
  expect(isHexColor('#0000fff')).toBe(false);
});