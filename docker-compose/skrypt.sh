#!/bin/bash

# docker login
# docker build -t username/flask-api .
# docker push ...

docker compose --env-file .env up
