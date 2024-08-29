#!/bin/sh
set -e

rm -rf node_modules
rm -f nxdb-local.tgz
npm run preinstall
npm i --legacy-peer-deps
npm run build
