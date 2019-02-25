#!/bin/bash -e
if [ -f ./.env ]; then export $(cat ./.env | grep -v ^# | xargs); fi
ng test ${COMPONENT_ID} --code-coverage