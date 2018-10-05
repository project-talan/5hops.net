#!/bin/bash -e

pushd static/html
./build.prod.sh

export $(cat ./.env | grep -v ^# | xargs)
mkdir -p ssl
pushd ssl
  echo "${SSL_KEY}" > ${COMPONENT_ID}.key
  echo "${SSL_CRT}" > ${COMPONENT_ID}.crt
popd

./docker.build.sh
./docker.save.sh
popd
