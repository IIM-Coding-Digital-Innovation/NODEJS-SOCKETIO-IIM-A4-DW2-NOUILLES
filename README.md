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

## Host
That project is host with heroku.

| Environment | URL                                                                                                         |
|-------------| ----------------------------------------------------------------------------------------------------------- |
| Prod        | <a href="https://node-socket-iwm-nouille-prod.herokuapp.com/">https://node-socket-iwm-nouille-prod.herokuapp.com/       |
| Dev         | <a href="https://node-socket-iwm-nouille-dev.herokuapp.com/">https://node-socket-iwm-nouille-dev.herokuapp.com/ |