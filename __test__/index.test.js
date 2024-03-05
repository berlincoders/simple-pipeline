const request = require('supertest');
const app = require('../index');

describe("Get route", () => {
  it("page should return hello world", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("\"Hello world\"");
  });
});

afterAll(async () => {
  await app.close();
});
