#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

VERSION=$(grep version package.json | sed -E 's/^.*"([^"]+)".*$/\1/')

# echo "Release $VERSION"

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
echo 'www.ruizhengyun.cn' > CNAME

git init
git config user.name '江湖'
git config user.email 'jobrzy@163.com'
git add -A
git commit -m "Release $VERSION"

# 如果发布到 https://fullstackren.github.io
git push -f git@github.com:fullstackren/fullstackren.github.io.git main
# git push -f https://${TOKEN_GITHUB}@github.com/fullstackren/fullstackren.github.io.git main

# 暂时手动同步，直接push不会自动部署
# git remote add origin https://fullstackren:${GITEE_TOKEN}@gitee.com/fullstackren/fullstackren.git
# git push origin HEAD:master --force

# 同步gitee.com/fullstackren/fullstackren
# git push -f https://fullstackren:${GITEE_TOKEN}@gitee.com/fullstackren/fullstackren.git master
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -