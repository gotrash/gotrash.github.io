#!/bin/bash

export GIT_HASH=$(git rev-parse --verify --short HEAD)

docker build -t 192.168.1.70:32000/gotrash/webapp:$GIT_HASH $PWD
