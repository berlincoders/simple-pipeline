const request = require('supertest');
const app = require('../index');

describe("Get route", () => {
  it("page should return hello world", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("\"Hello world\"");
  });
});

describe("Jenkins Local Test", () => {
  it("should check if Jenkins is running locally on port 8080", async () => {
    const res = await request('http://localhost:8080')
      .get('/')
      .set('Accept', 'text/html');

    expect(res.statusCode).toEqual(200);
    // Add more assertions as needed to check if Jenkins is running correctly
  });
});

afterAll(async () => {
  await app.close();
});
