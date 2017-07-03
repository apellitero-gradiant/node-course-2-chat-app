var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'Xandre';
    let lat = 15;
    let lon = 10;
    var url = 'https://www.google.com/maps?q=15,10';

    let res = generateLocationMessage(from, lat ,lon);

    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({
      from,
      url
    });

  })

});