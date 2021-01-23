#!/bin/sh

echo "start proto"

APP_ROOT=$(dirname $0)/../..

SOURCE_ROOT=${APP_ROOT}/proto
TARGET_ROOT=${APP_ROOT}/src/infra/api/rpc

rm -Rf ${TARGET_ROOT}/*

pbjs -t static-module -p ${SOURCE_ROOT} -w commonjs -o ${TARGET_ROOT}/api.js  ${SOURCE_ROOT}/*.proto
pbts -o ${TARGET_ROOT}/api.d.ts ${TARGET_ROOT}/api.js