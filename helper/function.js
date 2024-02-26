const axios = require('axios');
const BASE_URL = 'https://client.warpcast.com';

async function getMyProfile(accessToken) {
  const url = BASE_URL + '/v2/onboarding-state';
  const options = {
    method: 'GET',
    headers: {
      authority: 'client.warpcast.com',
      accept: '*/*',
      'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
      authorization: `Bearer ${accessToken}`,
      'content-type': 'application/json; charset=utf-8',
      origin: 'https://warpcast.com',
      referer: 'https://warpcast.com/',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    },
  };

  try {
    const { data } = await axios(url, options);
    const user = data.result.state.user;

    console.log(`Your username is: ${user.username}`);
    console.log(`Display Name: ${user.displayName}`);
    console.log(`Profile Picture: ${user.pfp.url}`);
    console.log(`Bio: ${user.profile.bio.text}`);
    console.log(`Location: ${user.profile.location.description}`);
    console.log(`Follower Count: ${user.followerCount}`);
    console.log(`Following Count: ${user.followingCount}`);

    return data;
  } catch (error) {
    console.error('Error fetching my profile:', error);
    return null; // Or handle the error as needed
  }
}

module.exports = { getMyProfile };
