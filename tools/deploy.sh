#!/bin/sh
git add -A
git commit -a
npm run export
git push
