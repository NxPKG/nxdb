#!/bin/bash
set -e

cd /nxdb
npm install forever -g
nohup forever start -c "node --max_old_space_size=2024" ./scripts/start-cloud-signaling-server.mjs &
