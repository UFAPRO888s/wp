#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://UFAPRO888s.github.io
# git push -f git@github.com:UFAPRO888s/UFAPRO888s.github.io.git main

# if you are deploying to https://UFAPRO888s.github.io/wp
# git push -f git@github.com:UFAPRO888s/wp.git main:gh-pages

cd -
