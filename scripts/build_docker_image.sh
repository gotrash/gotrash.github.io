#!/bin/bash

export GIT_HASH=$(git rev-parse --verify --short HEAD)

echo "Building docker image with tag $GIT_HASH"

docker build --build-arg AUTH_ORIGIN=https://staging.gotrash.co.uk --build-arg NUXT_AUTH_ORIGIN=https://staging.gotrash.co.uk -t 192.168.1.70:32000/gotrash/webapp:$GIT_HASH $PWD

docker push 192.168.1.70:32000/gotrash/webapp:$GIT_HASH
