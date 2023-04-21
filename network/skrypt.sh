#!/bin/bash

# You can use docker compose or docker commands to solve this exercise :)

# docker compose build
# docker compose up

# create networks
docker network create --driver bridge backend
docker network create --driver bridge frontend

# build images
docker build -t database ./database
docker build -t backend ./backend
docker build -t frontend ./frontend

# run containers and connect them to networks
docker run -d --name backend --network backend backend
docker run -d --name database --network backend --network-alias database database
docker network connect frontend backend
docker run -d --name frontend --network frontend -p 8080:80 --network-alias backend frontend

