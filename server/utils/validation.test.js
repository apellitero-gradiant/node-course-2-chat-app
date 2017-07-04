var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non string-values', () => {

    let res = isRealString(98);

    expect(res).toBe(false);
  })

  it('should reject string with only spacess', () => {
    let res = isRealString('       ');

    expect(res).toBe(false);
  })

  it('should allow string with non-space characters', () => {
    let res = isRealString('asd32tfgw');

    expect(res).toBe(true);

  })
});