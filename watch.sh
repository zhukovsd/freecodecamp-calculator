#!/usr/bin/env bash

watchify app/app.js -t [babelify app] --extension=.jsx --debug -o build/app.js -v &

while true; do cp -u ./app/*.html ./app/*.css ./build/; sleep 2; done &

#browser-sync start --server build --files build/app.js --port 3000 --reload-delay 100 &
browser-sync start --server build --files build/* --port 3000 --reload-delay 100 &

wait