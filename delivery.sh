#!/bin/bash -e

pushd static/html
./build.prod.sh
./docker.build.sh
./docker.save.sh
popd
