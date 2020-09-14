# Monorepo + Docker

This is an example to understand how to use dockerfile and docker-compose to build an api and web container with a monorepo architecture.

- [x] Development Environment
- [ ] Deploy Environment

## What's inside?

As the purpose of this example isn't about coding an api or a web interface, there's only the minimal needed code inside each package.

The api package is an [Express](https://expressjs.com/) server.

The web package is a React application built with [Snowpack](https://www.snowpack.dev/)

The common package is a custom `console.log` so we assert that Lerna can correctly handle dependencies in the container.

> Common package has been removed from api as on the real world scenario that inspired this repo we'll not use the shared repo on the server

The whole application is inside a [Docker](https://www.docker.com/) container.

> There's a commented block on docker-compose which is about the database.

## How to run this repository?

You must have Docker daemon running in order to start the application

1. Clone this repository: `git clone https://github.com/luizeboli/monorepo-docker`
2. Navigate to the project folder
3. Run `docker-compose up`
4. Access `http://localhost:3333` for the API and `http://localhost:8080` for the WEB interface
