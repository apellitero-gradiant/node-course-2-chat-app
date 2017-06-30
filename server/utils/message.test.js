var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Xandre';
    let text = 'All is good';

    let res = generateMessage(from, text);

    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({
      from,
      text
    });


  })
});