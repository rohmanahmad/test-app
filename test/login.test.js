const supertest = require('supertest')
const expect = require('chai').expect

const request = supertest('https://api-beta.ripple10.com')

describe('[POST] Login User', function() {
  it('Login ketika sukses', function() {
    request
      .post('/api/v2/auth/login')
      .field('username', '')
      .field('password', '')
      .end(function (err, res) {
        if (err) throw err
        expect(res.status).equal(200)
      })
  })
})