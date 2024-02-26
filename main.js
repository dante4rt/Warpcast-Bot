require('dotenv').config();
const readlineSync = require('readline-sync');
const { getMyProfile } = require('./helper/function');

function main() {
  const action = readlineSync.question('Choose action (profile): ');

  switch (action.toLowerCase()) {
    case 'profile':
      getMyProfile(process.env.BEARER_TOKEN);
      break;
    default:
      console.log('Invalid action');
  }
}

main();
