# Football Web Application

This project was requested by a company as a coding challenge for a full-time job position.

## Development Resources
- [API docs](https://www.football-data.org/documentation/api)

## Deployment

![Deploy to Netlify](https://github.com/gomorizsolt/angular-football-web-application/workflows/CI/badge.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/0e5094be-5fe4-4fd3-be7a-7c647f71a82a/deploy-status)](https://app.netlify.com/sites/competent-sammet-ef70a6/deploys)

Each push to the master branch initiates an automated deployment to Netlify.

## Development

1. Request an API key from [football-data.org](https://www.football-data.org/).
2. Create a `secrets.ts` file in the `src/` directory:

```sh
cp src/secrets.example.ts src/secrets.ts
```

3. Update the `apiKey` property to the obtained API key.

## Future Improvements

- Error handling: Right now there's no convenient, reusable and user-friendly error handling. If an outgoing request fails (for instance, when either the league's or the match's unique identifier doesn't exist or the selected item is available exclusively for paid plans), then the app will keep showing the loading indicator. Even though the error is printed out to the console, it's meaningless and degrades the experience from the perspective of the user. Resources to possible solutions: [#1](https://sebastian-holstein.de/post/error-handling-angular-async-pipe/).
- Periodically refetch data (optionally also provide a button to manually do so).

## License

The project is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
