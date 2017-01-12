# qiita記事検索

## 必須
* node:v4.0.0
* npm:2.14.2

## 手順
まずは、いつものを実行

```
npm install
```

root 配下に「token.js」を準備し、下記のようにトークンを記述

```
exports.token = 'トークントークン';
```

node_modulesとtoken.jsを作成したら、gulpを実行

```
gulp
```

「localhost:8888」にアクセスする