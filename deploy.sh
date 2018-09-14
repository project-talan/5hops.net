#!/bin/bash -e

VM=$1

ssh ${VM} << OEF
docker stop $(docker ps -a -q)
docker rm -f $(docker ps -a -q)
docker rmi -f $(docker images -q)
EOF

pushd static/html
scp ./.env root@${VM}:~/.env
scp ./*.tar root@${VM}:~/
ssh root@${VM} 'bash -s' < docker.load.sh
ssh root@${VM} 'bash -s' < docker.run.sh
popd
