const request = require('supertest');
require('dotenv').config(); // Load environment variables

describe("Jenkins Local Test", () => {
  it("should check if Jenkins is running locally on port 8080", async () => {
    // Retrieve Jenkins username and password from environment variables
    const jenkinsUsername = process.env.JENKINS_USERNAME;
    const jenkinsPassword = process.env.JENKINS_PASSWORD;

    // Sending a GET request to the root URL of Jenkins with authentication headers
    const res = await request('http://localhost:8080')
      .get('/')
      .auth(jenkinsUsername, jenkinsPassword) // Include authentication headers
      .set('Accept', 'text/html');

    // Expecting the status code of the response to be 200
    expect(res.statusCode).toEqual(200);

    // You can add more assertions here to further verify if Jenkins is running correctly
  });
});