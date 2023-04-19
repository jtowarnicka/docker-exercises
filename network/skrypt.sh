#!/bin/bash
#>docker exec <container-name-or-id> mongoimport -d <db-name> -c <c-name> --file /tmp/xxx.js

# run -d --name database -v $(pwd)/backup:/data/db -p 27017:27017 mongo
# docker cp staff.json database:/tmp/staff.json
# docker exec database mongoimport -d staff -c staff --file /tmp/staff.json --jsonArray

# docker compose build

# docker compose up

docker network create --driver bridge backend

docker network create --driver bridge frontend

docker build -t backend ./backend

docker build -t frontend ./frontend

docker run -d --name backend --network backend backend
docker run -d --name database --network backend --link mongo

docker network connect frontend backend
docker run -d --name frontend --network frontend -p 8080:80 --link backend:backend frontend

