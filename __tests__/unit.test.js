// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('(111) 111-1111 is a valid phone number', () => {
  expect(isPhoneNumber('(111) 111-1111')).toBe(true);
});
test('111-111-1111 is a valid phone number', () => {
  expect(isPhoneNumber('111-111-1111')).toBe(true);
});
test('1 is NOT a valid phone number', () => {
  expect(isPhoneNumber('1')).toBe(false);
});
test('1-1-1 is NOT a valid phone number', () => {
  expect(isPhoneNumber('1-1-1')).toBe(false);
});

////////////////////////////////////////////////////

test('JimBob@satanmail.com is a valid email', () => {
  expect(isEmail('JimBob@satanmail.com')).toBe(true);
});
test('IHateUCSD@ucsd.edu is a valid email', () => {
  expect(isEmail('IHateUCSD@ucsd.edu')).toBe(true);
});
test('\"I\'m only 12 what is this\" is NOT a valid email', () => {
  expect(isEmail('I\'m only 12 what is this')).toBe(false);
});
test('whatislove@baby.donthurtme is NOT a valid email', () => {
  expect(isEmail('whatislove@baby.donthurtme')).toBe(false);
});

////////////////////////////////////////////////////

test('meow is a strong password', () => {
  expect(isStrongPassword('meow')).toBe(true);
});
test('i_like_pandas is a strong password', () => {
  expect(isStrongPassword('i_like_pandas')).toBe(true);
});
test('1337haxor is a weak password', () => {
  expect(isStrongPassword('1337haxor')).toBe(false);
});
test('</3 is a weak password', () => {
  expect(isStrongPassword('</3')).toBe(false);
});

////////////////////////////////////////////////////

test('11/11/1111 is a valid date', () => {
  expect(isDate('11/11/1111')).toBe(true);
});
test('1/1/1111 is a valid date', () => {
  expect(isDate('1/1/1111')).toBe(true);
});
test('5/7/25 is an invalid date', () => {
  expect(isDate('5/7/25')).toBe(false);
});
test('huh is an invalid date', () => {
  expect(isDate('huh')).toBe(false);
});

////////////////////////////////////////////////////

test('#FFF is a valid hex code', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('#FFFFFF is a valid hex code', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});
test('#FFFF is an invalid hex code', () => {
  expect(isHexColor('#FFFF')).toBe(false);
});
test('ZZZ is an invalid hex code', () => {
  expect(isHexColor('ZZZ')).toBe(false);
});

