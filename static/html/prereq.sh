#!/bin/bash -e
if [ -f ./.env ]; then export $(cat ./.env | grep -v ^# | xargs); fi
envsubst > sonar-project.properties < sonar-project.properties.template
envsubst > .env < .env.template
npm i