#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build
rm -rf docs
mv dist docs
touch docs/.nojekyll
git add docs
git commit -m "deploy"
git push origin main