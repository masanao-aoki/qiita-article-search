# qiita記事検索

## 必須
* node:v4.0.0
* npm:2.14.2

## react redux 勉強用

redux勉強用でQiita API v2 を使用した記事検索を作ってみた。
主に社内とかで、qiitaを見る文化を根付かせるために使用する。

## 手順
まずは、いつものを実行

```
npm install
```

root 直下に「token.js」を準備し、下記のようにトークンを記述

```
exports.token = 'トークントークン';
```

node_modulesとtoken.jsを作成したら、gulpを実行

```
gulp
```

「localhost:8888」にアクセスする