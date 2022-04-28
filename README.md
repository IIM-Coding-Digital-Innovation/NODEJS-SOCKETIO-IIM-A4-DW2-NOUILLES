# NODEJS-SOCKETIO-IIM-A4-DW2-MALTE

| Environment | URL                                                                                                               |
|-------------|-------------------------------------------------------------------------------------------------------------------|
| Prod        | <a href="https://node-socket-iwm-nouille-prod.herokuapp.com/">https://node-socket-iwm-nouille-prod.herokuapp.com/ |
| Pre-Prod    | <a href="https://node-socket-iwm-nouille-dev.herokuapp.com/">https://node-socket-iwm-nouille-dev.herokuapp.com/   |

## Presentation

This project is a sandbox project to learn Node.js development. We have two main goals :

-   learn how to create an API with Node.js and Express
-   follow a solid Github workflow

## Installation

-   clone the project
```
git clone git@github.com:IIM-Creative-Technology/NODEJS-SOCKETIO-IIM-A4-DW2-NOUILLES.git
```

-   enter in the app
```
cd app
```
- install the dependencies
```
npm install
```
-   init sequalize
```
npx sequelize-cli init
```

## Configuration

Complete the file config/config.json with the informations of your database.

```
{ "development": { "username": "root", "password": null, "database": "database_development", "host": "127.0.0.1", "dialect": "mysql" }, 
"test": { "username": "root", "password": null, "database": "database_test", "host": "127.0.0.1", "dialect": "mysql" }, 
"production": { "username": "root", "password": null, "database": "database_production", 
"host": "127.0.0.1", "dialect": "mysql" } }
```

## Migrations
-   Migrate the tables to your PostgreSQL database :
```
npx sequelize-cli db:migrate
```
-   Command for the creation of your migrations :
```
npx sequelize-cli model:generate --name User --attributes email:string,password:string,role:string,firstname:string,lastname:string
```
```
npx sequelize-cli model:generate --name Task --attributes title:string
```
## Technical choices

### Sequelize

We choose to use the most use ORM for Node.js : [Sequelize](https://sequelize.org/). This choice was motivated by our low technical level on Node.js environment and by the huge community arround the library.

### Deployment

Our pre-prod and prod API are host on Heroku. Deployments were greatly ease by the team great knowledge with this host.

We use the official [Heroku Postgres](https://elements.heroku.com/addons/heroku-postgresql) addon the create our databases.

### Jest

We use one of the most popular test library. It's common to use Jest in a JavaScript project. It's a relialable library and it will help us to have a solid and safe code. 

### Socket.io

It helps us to have a realtime application based on websockets. Thanks to socket.io, we have the possibility to emit, send, or even broadcast messages to the server or to one or more clients.
In our case, socket.io is used in our realtime TaskList, every users can see the TaskList and add a task.

### Prettier

Prettier is a module wich helps to have a cleaner formatted code. The shared code will be homogeneous between all collaborators. The will also be more readable make it easier to read.

### ESLint

ESLint is a JavaScript linter that helps us to solve some syntactic problems
a have a cleaner code. It add some rules that us developpers have to follow in order to have a correct syntactic code.

## Project organisation

We decided to use the github project' board. It has the same behavior as a Kanban and it helped our team to split our work in differents tasks. With that, we have clear view of the project's progress and what we did and what we have to do.

