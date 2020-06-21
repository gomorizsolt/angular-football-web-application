if (!process.env.FOOTBALL_API_KEY) {
  console.error("`FOOTBALL_API_KEY` environment variable is not configured, request quota is severely limited.");
}

export const environment = {
  production: true,
  apiKey: process.env.FOOTBALL_API_KEY
};
