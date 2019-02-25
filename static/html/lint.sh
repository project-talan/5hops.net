#!/bin/bash -e
if [ -f ./.env ]; then export $(cat ./.env | grep -v ^# | xargs); fi
ng lint ${COMPONENT_ID} --format=prose --type-check=true