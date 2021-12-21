#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build
rm -rf docs
touch docs/.nojekyll
cp -a dist docs