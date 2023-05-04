/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    USERS_API: process.env.USERS_API,
  },
};

module.exports = nextConfig;
