import secrets from "../secrets";

if (!secrets.apiKey) {
  console.error(
    "API key is not configured, request quota is severely limited."
  );
}

export const environment = {
  production: false,
  apiKey: secrets.apiKey,
};
