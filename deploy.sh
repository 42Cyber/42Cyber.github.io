#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build
rm -rf docs
mv dist docs
touch docs/.nojekyll
echo "hacku.org" > docs/CNAME
git add docs src
git commit -m "$(date)"
git push origin main