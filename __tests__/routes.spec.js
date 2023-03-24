const request = require('supertest');
const express = require('express');
const router = require('../routes/index.js')

const app = new express();
app.use('/', router);

// describe('GET /users', function() {
//   const response = request(app)
//     .get('/workOrder')
//     .set('Accept', 'application/json')
//     test("Finds json file", () => {
//     response
//       .expect('Content-Type', /json/)
//       .expect(200)
//     });
// });
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});


describe('GET /routes', function() {
  test('responds with json', async function() {
    const response = await request(app)
      .get('/workOrders')
      .set('Accept', 'application/json')
      .expect(200)
  });
});

  // tst('responds to /hello/:name', async () => {
  //   const res = await request(app).get('/hello/jaxnode');
  //   expect(res.header['content-type']).toBe('text/html; charset=utf-8');
  //   expect(res.statusCode).toBe(200);
  //   expect(res.text).toEqual('hello jaxnode!');
  // });

  // test('responds to /hello/Annie', async () => {
  //   const res = await request(app).get('/hello/Annie');
  //   expect(res.header['content-type']).toBe('text/html; charset=utf-8');
  //   expect(res.statusCode).toBe(200);
  //   expect(res.text).toEqual('hello Annie!');
  
// });
//});
