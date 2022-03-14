<h1 align="center" >Back End Challenge</h1>

## Description

This project is a REST API that uses data from Space Flight News and is related to the Coodesh challenge.

Repository: https://github.com/jlucaso1/back-end-challenge-2021

## Ferramentas Utilizadas

- Typescript
- NestJS a framework of NodeJS
- OpenAPI (Swagger)
- Docker
- Postgresql (in heroku free tier)
- Jest
- Axios (to fetch API)

## Installation

```
Rename .example.env to .env and fill the fields
```
```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# with docker-compose in development mode
$ docker compose up dev

# with docker-compose in production mode
$ docker compose up prod
```

Swagger Docs url: http://localhost:3000/api

## Test
obs: not implemented yet
```bash
# unit tests
$ npm run test
```

>  This is a challenge by [Coodesh](https://coodesh.com/)

