#!/bin/bash -e

export $(cat ./.env | grep -v ^# | xargs)

pushd static/html
./prereq.sh
popd
