

<h1 align="center">
  RentX
</h1>

<h3 align="center">
  RentX-Backend
</h3>

<p align="center">Backend written in typescript with NodeJS, that is used with the RentX app. </p>

<p align="center">
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/stelianok/rentx-backend">
  
  <a href="https://github.com/stelianok/rentx-backend/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/stelianok/rentx-backend">
  </a>
  
  <a href="https://github.com/stelianok/rentx-backend/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/stelianok/rentx-backend">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/stelianok/rentx-backend">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 👨🏻‍💻 About the project

- <p style="color: red;">

Rentx is an app that allows users to Rent cars easily using a mobile app. This is the backend of the product, a rest API with complete user authentication, that allows users to browse through a list of cars, and rent one if they want to. 

I learned a lot developing this application, some of the main concepts that I learned were:

- How to write Clean and organized code, following the SOLID principles.
- How to create an efficient and flexible architecture with modularity and well-separated responsibilities
- Using Docker to containerize parts of my application, like the API, database, and other services used in production.
- How to write automated tests with JEST, maintaining a healthy and tested codebase, that is predictable and easy to change.
- Use swagger to create a comprehensible and easy to understand documentation of the backend
- Using an ORM to manage SQL queries and keep everything organized and efficient
- Improved my knowledge of typescript overall.


</p>

To see the **mobile client**, click here: [RentX Mobile](https://github.com/stelianok/RentX-mobile)

## 🚀 Technologies

Main technologies that I've used to develop this API

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)




### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/stelianok/rentx-backend.git && cd rentx-backend
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Create the instance of postgreSQL using docker
$ docker run --name project-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=project -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Make sure the keys in 'ormconfig.json' to connect with your database
# are set up correctly.

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork stelianok/rentx-backend
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd rentx-backend

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Kauã Steliano 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/stelianok/)