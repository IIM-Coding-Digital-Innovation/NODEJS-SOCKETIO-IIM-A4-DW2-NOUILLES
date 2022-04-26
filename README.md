# NODEJS-SOCKETIO-IIM-A4-DW2-NOUILLES

## Environnement de dev
Lancer `cd docker ; docker-compose up -d`

## Environnement de prod
Lancer `cd docker ; docker-compose -f docker-compose.yml -f production.yml up -d`

## Ajout d'une dépendance dans node-modules
Lancer `cd app ; npm install <modulename> ; cd ../docker ; docker-compose up -d --build`

## Retrait d'une dépendance dans node-modules
Lancer `cd app ; npm uninstall <modulename> ; cd ../docker ; docker-compose up -d --build`