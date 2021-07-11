# Valoriza

<h1 align="center">Valoriza</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/danielbcarvalho/valorizaNlwNode?color=orange">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/danielbcarvalho/valorizaNlwNode?color=orange">

  <img alt="License" src="https://img.shields.io/github/license/danielbcarvalho/valorizaNlwNode?color=orange">

  <img alt="Github forks" src="https://img.shields.io/github/forks/danielbcarvalho/valorizaNlwNode?color=orange" />


</p>

<h4 align="center"> 
	 Backend - NodeJS, Express, SQL, TypeORM, Bcrypt, Json Web Token
</h4> 

<hr>

<p align="center">
  <a href="#about">About</a> &#xa0; | &#xa0; 
  <a href="#features">Features</a> &#xa0; | &#xa0;
  <a href="#technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#starting">Starting</a> &#xa0; | &#xa0;
  <a href="#license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/danielbcarvalho" target="_blank">Author</a>
</p>

<br>

## About

Valoriza is a backend application built to promote recognition among teammates. 

Developed during the 'Next Level Week #6' from [Rocketseat](https://rocketseat.com.br/).


## Features
* Sign in
* Authentication
* Create and list Users
* Create and list Tags
* Create and list Compliments (receiving user and sending user)

## Business Rules
- User registration
   - It is not allowed to register more than one user with the same email
   - It is not allowed to register user without e-mail

- TAG registration
   - It is not allowed to register more than one tag with the same name
   - It is not allowed to register TAG without a name
   - Registration by users who are not administrators is not allowed

- Registration of compliments
   - A user is not allowed to register a compliment for themselves
   - It is not allowed to register praise for invalid users

## Technologies

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [JSON Web Token](https://jwt.io/)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme)
- [SQLite](https://www.sqlite.org/index.html)
  


## Requirements

Before starting, you need to have [Node.js](https://nodejs.org/en/download/).

## Starting

```bash
# Clone this project
$ git clone https://github.com/danielbcarvalho/valorizaNlwNode

# Install dependencies
$ yarn 

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:3000>

```


## License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made by <a href="https://github.com/danielbcarvalho" target="_blank">Daniel Carvalho</a>

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/danielcarvalho-dev/)](https://www.linkedin.com/in/danielcarvalho-dev/)


&#xa0;

<a href="#top">Back to top</a>
