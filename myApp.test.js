require('jest');

const myApp = require('./myApp');

test('valid number', () => {
    expect(myApp.isValidNumber('123')).toBe(true);
    expect(myApp.isValidNumber('1')).toBe(true);
    expect(myApp.isValidNumber('1234567890')).toBe(true);
    expect(myApp.isValidNumber('0123456789')).toBe(true);
});

test('invalid number', () => {
    expect(myApp.isValidNumber('-123')).toBe(false);
    expect(myApp.isValidNumber('1.2')).toBe(false);
    expect(myApp.isValidNumber('12-3456-7890')).toBe(false);
    expect(myApp.isValidNumber('0123456789a')).toBe(false);
});

test('valid time', () => {
    expect(myApp.parseTime(0)).toStrictEqual({unix: 0, utc: 'Thu, 01 Jan 1970 00:00:00 GMT'});
});

test('valid date', () => {
    expect(myApp.parseTime('1970-01-01')).toStrictEqual({unix: 0, utc: 'Thu, 01 Jan 1970 00:00:00 GMT'});
});

test('invalid time', () => {
    expect(myApp.parseTime('abc')).toStrictEqual({error : "Invalid Date"});
    expect(myApp.parseTime('1970-01-0101')).toStrictEqual({error : "Invalid Date"});
});
