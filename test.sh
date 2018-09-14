#!/bin/bash -e

pushd static/client
./lint.sh
./test.sh
popd
