export const urlConstants =
  process.env.NODE_ENV === 'production'
    ? { BASE_URL: 'https://api.yokasoft.id' }
    : { BASE_URL: 'http://localhost:9000' };
