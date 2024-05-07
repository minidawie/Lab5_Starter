// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 

test('Test 1: isPhoneNumber should return true', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBeTruthy();
});

test('Test 2: isPhoneNumber should return true', () => {
  expect(isPhoneNumber('123-456-7890')).toBeTruthy();
});

test('Test 3: isPhoneNumber should return false', () => {
  expect(isPhoneNumber('(ad)40')).toBeFalsy();
});

test('Test 4: isPhoneNumber should return false', () => {
  expect(isPhoneNumber('ac490')).toBeFalsy();
});

//  Testing isEmail() function
test('Test 1: isEmail should return true', () => {
  expect(isEmail('good@good.com')).toBeTruthy();
});

test('Test 2: isEmail should return true', () => {
  expect(isEmail('good@good.io')).toBeTruthy();
});

test('Test 3: isEmail should return false', () => {
  expect(isEmail('good@good')).toBeFalsy();
});

test('Test 4: isEmail should return false', () => {
  expect(isEmail('goodgood.io')).toBeFalsy();
});

// Testing isStrongPassword() function
test('Test 1: isStrongPassword should return true', () => {
  expect(isStrongPassword('acb123_')).toBeTruthy();
});

test('Test 2: isStrongPassword should return true', () => {
  expect(isStrongPassword('A_B_C1_2_3')).toBeTruthy();
});

test('Test 3: isStrongPassword should return false', () => {
  expect(isStrongPassword('123abc')).toBeFalsy();
});

test('Test 4: isStrongPassword should return false', () => {
  expect(isStrongPassword('acb123_$')).toBeFalsy();
});

//  Testing isDate() function
test('Test 1: isDate should return true', () => {
  expect(isDate('1/12/2024')).toBeTruthy();
});

test('Test 2: isDate should return true', () => {
  expect(isDate('01/12/2024')).toBeTruthy();
});

test('Test 3: isDate should return false', () => {
  expect(isDate('01/12/24')).toBeFalsy();
});

test('Test 4: isDate should return false', () => {
  expect(isDate('2024/12/12')).toBeFalsy();
});

// Testing isHexColor() function
test('Test 1: isHexColor should return true', () => {
  expect(isHexColor('#ff0000')).toBeTruthy();
});

test('Test 2: isHexColor should return true', () => {
  expect(isHexColor('#fc9')).toBeTruthy();
});

test('Test 3: isHexColor should return false', () => {
  expect(isHexColor('#ggnore')).toBeFalsy();
});

test('Test 4: isHexColor should return false', () => {
  expect(isHexColor('#gg')).toBeFalsy();
});
