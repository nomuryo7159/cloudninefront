require('dotenv').config()
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // Reference a variable that was defined in the .env file and make it available at Build Time
        API_ENDPOINT: 'https://tech0-gen-8-step3-app-py-8.azurewebsites.net',
      },
}

// module.exports = nextConfig
module.exports = {
  output: 'standalone'
};