export const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
      api_url: 'http://localhost:7777/api/',
  }
};

export default config[env];
