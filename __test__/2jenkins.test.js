const request = require('supertest');
require('dotenv').config(); // Load environment variables

describe("Jenkins Online Test", () => {
  it("should check if Jenkins is running on the internet server", async () => {
    // Retrieve Jenkins username and password from environment variables
    const jenkinsUsername = process.env.JENKINS_USERNAME;
    const jenkinsPassword = process.env.JENKINS_PASSWORD;

    // Retrieve Jenkins server URL from environment variables
    const jenkinsURL = process.env.JENKINS_URL;

    // Sending a GET request to the root URL of Jenkins with authentication headers
    const res = await request(jenkinsURL)
      .get('/')
      .auth(jenkinsUsername, jenkinsPassword) // Include authentication headers
      .set('Accept', 'text/html');

    // Expecting the status code of the response to be 200
    expect(res.statusCode).toEqual(200);

    // You can add more assertions here to further verify if Jenkins is running correctly
  });
});
