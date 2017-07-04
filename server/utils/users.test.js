var expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Xandre',
      room: 'Node course'
    },{
      id: '2',
      name: 'Jen',
      room: 'Own room'
    },{
      id: '3',
      name: 'Partner',
      room: 'Node course'
    }
    ];
  });

  it('should add new user', () => {

    var users = new Users();

    var user = {
      id: '123',
      name: 'Xandre',
      room: 'The office fans'
    }

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe('2');
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for node course', () => {

    var userList = users.getUserList('Node course');

    expect(userList).toEqual(['Xandre','Partner']);
  });

  it('should return names for own room', () => {

    var userList = users.getUserList('Own room');

    expect(userList).toEqual(['Jen']);
  });

});