# NODEJS-SOCKETIO-IIM-A4-DW2-NOUILLES

## Mettre en place docker
Installer Docker Desktop : https://www.docker.com/products/docker-desktop/

## Environnement de dev
Lancer `cd docker ; docker-compose up -d`

## Environnement de prod
Lancer `cd docker ; docker-compose -f docker-compose.yml -f production.yml up -d`

## Ajout d'une dépendance dans node-modules
Lancer `cd app ; npm install <modulename> ; cd ../docker ; docker-compose up -d --build`

## Retrait d'une dépendance dans node-modules
Lancer `cd app ; npm uninstall <modulename> ; cd ../docker ; docker-compose up -d --build`


## Install
`cd app` 

`npm i`

`npx sequelize-cli init`

Complete the file `config/config.json` with the informations of your database.

`
{
    "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
    },
    "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
    },
    "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
    }
}
`

Migrate the tables to your PostgreSQL database.

`npx sequelize-cli db:migrate`

npx sequelize-cli model:generate --name User --attributes email:string,password:string,role:string,firstname:string,lastname:string

npx sequelize-cli model:generate --name Article --attributes title:string,author:string,category:string

npx sequelize-cli model:generate --name Category --attributes title:string
