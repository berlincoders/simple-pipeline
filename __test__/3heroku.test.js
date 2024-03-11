const request = require('supertest');
require('dotenv').config(); // Load environment variables

const axios = require('axios');

// Function to check if a website is live
async function isWebsiteLive(url) {
  try {
    await axios.get(url);
    return true; // If request succeeds, website is live
  } catch (error) {
    return false; // If request fails, website is not live
  }
}

// Jest test case
describe('Live Website Check', () => {
  test('Heroku app is live', async () => {
    const url = process.env.HEROKU_APP_URL; // corrected variable name
    const isLive = await isWebsiteLive(url);
    expect(isLive).toBe(true);
  });

});
