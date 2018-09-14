#!/bin/bash -e

pushd static/html
./lint.sh
./test.sh
popd
