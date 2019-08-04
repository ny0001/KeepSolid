# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# если вы публикуете по адресу https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# git push -f git@github.com:Yura747/Yura747.github.io.git master


# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
# https://yura747.github.io/todoVUE/index.html

# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:yura747.github.io/todoVUE.git master:gh-pages

cd -