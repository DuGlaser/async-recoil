# async-recoil
suspense + recoil による非同期通信の練習

## DEMO
[![Image from Gyazo](https://i.gyazo.com/9481828b28b23038f088b0ae7dc2b8c0.gif)](https://gyazo.com/9481828b28b23038f088b0ae7dc2b8c0)

# Features

* recoilを使ったstate管理
* suspenseを使ってloading画面を表示

## Usage 
### clone
```bash
$ git clone https://github.com/DuGlaser/async-recoil.git
```

### 初期設定
```bash
$ cd async-recoil
$ yarn
$ touch .env
```

### 環境変数(.env)の設定
OMDb APIを使用しているためAPI KEYが必要です。  
使い方は以下を参照してください。
> https://www.omdbapi.com/
```
REACT_APP_OMDB_API=https://www.omdbapi.com/?apikey=YOUR_API_KEY
```

### アプリ起動
```
$ yarn start
```

## Others
気になる点や問題点など些細なことでもいいので何かありましたら、PRやIsuueを投げていただけると幸いです。

## Licence

[MIT](https://github.com/DuGlaser/async-recoil/blob/master/LICENSE)
