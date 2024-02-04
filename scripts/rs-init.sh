#!/bin/bash

mongod --bind_ip_all --replSet dbrs

mongosh -f /scripts/mongo-init.js --host mongo1 --port 27017

echo "****** Waiting for ${DELAY} seconds for replicaset configuration to be applied ******"

mongo < /scripts/mongo-init.js