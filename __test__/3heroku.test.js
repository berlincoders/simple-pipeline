const request = require('supertest');
require('dotenv').config();  


describe("Production Application Test", () => {
  it("should check if the application is running on production", async () => {
    // Replace 'your-heroku-app-url' with the actual URL of your Heroku app
    const herokuAppUrl = process.env.HEROKU_APP_URL;

    // Sending a GET request to a specific endpoint of your application
    const res = await request(herokuAppUrl)
      .get('/api/health') // Replace '/api/health' with the actual health check endpoint of your application
      .set('Accept', 'application/json');


    // Expecting the status code of the response to be 200
    expect(res.statusCode).toEqual(200);

    // You can add more assertions here to further verify if the application is running correctly
  });
});
