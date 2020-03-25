# Project Name

Guilt Trip Advisor - Q&A Component

This is a reverse-engineered copy of a "Questions & Answers" component found on Tripadvisor.com's Restaurants section.

This component was created by Jeremy Sim in March 2020 as part of a software engineering exercise at HackReactor Seattle. The goal was to replicate an existing website module as closely as possible in looks and functionality, from scratch.

It utilizes a MongoDB database, a server written using Express, and a React architecture for the client-facing front end.

Collaborating team members, who each worked on a separate component, were Katharine Celentano, Seth Way, and Phonxay Champasouk.

## Related Projects

  - https://github.com/guilttripadvisors

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)

## Usage

This repo creates a server listening on port 3004. To get the server running, navigate to the root directory, then:

```sh
npm install
npm run seed
npm run build
npm run start
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0