#!/bin/bash

docker run --name postgres-test \
    -p 5432:5432                \
    -e POSTGRES_USER=root       \
    -e POSTGRES_PASSWORD=toor   \
    -e POSTGRES_DB=test         \
    -d postgres