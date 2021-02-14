
var request = require('request');

const usersFields = [
  'firstName','lastName','email'
]

test('Check Users: ', done => {
  request.get({
    url:     'http://localhost:3080/api/users',
    headers: {'content-type' : 'application/json'}
  }, function( error, response, body ){

    let parsed_body = JSON.parse( body );

    for (var i = 0; i < parsed_body.length; i++) {
      expect(Object.keys(parsed_body[i])).toStrictEqual(usersFields)
    }

    done();
  });
});
