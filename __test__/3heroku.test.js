const request = require('supertest');

describe("Production Application Test", () => {
  it("should check if the application is running on production", async () => {
    // Retrieve test URL from environment variable
    const testUrl = process.env.HEROKU_APP_URL;

    // Sending a GET request to the test URL
    const res = await request(testUrl)
      .get('/')
      .set('Accept', 'application/json');

    // Expecting the status code of the response to indicate success (2xx range)
    expect(res.statusCode).toBeGreaterThanOrEqual(200);
    expect(res.statusCode).toBeLessThan(300); // Ensure status code is in the 2xx range

    // You can add more assertions here to further verify if the application is running correctly
  });
});
