import { env } from 'vite'

const config = {
  VITE_API_KEY: 'your_api_key_here',
  VITE_BASE_URL: 'https://example.com',
};

console.log(import.meta.env.VITE_API_KEY);
console.log(import.meta.env.VITE_BASE_URL);

export default config;
