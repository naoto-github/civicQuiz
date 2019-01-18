# シビックWikiクイズ

Wikipediaのデータを利用して，ご当地クイズを自動生成するアプリです．
現状では，人口や面積などの設問のみですが，スクレイピング可能なデータであれば，問題として拡張することが可能です．

### オープンデータ（オープンソース）

- [Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8)
- [Leaflet.js](https://leafletjs.com/)
- [OpenStreetMap](https://openstreetmap.jp/)
- [Nominatim](https://nominatim.openstreetmap.org/)

### インストール方法

アンドロイド版のインストール・パッケージのみビルドしています．
packageフォルダにある**CivicWikiQuiz.apk**を，
アンドロイド端末にダウンロードし，インストールしてください．

### 使用方法

1. 実行するとトップ画面が表示されます．**スタート**をタップしてください．

<a href="https://gyazo.com/fbbea602f319434cc4cd2ed6cff0e0b2"><img width="300px" src="https://i.gyazo.com/fbbea602f319434cc4cd2ed6cff0e0b2.jpg" alt="Image from Gyazo" width="461"/></a>

2. メイン画面です．日進市のオープンストリートマップが表示されます．画面下部に操作用のインターフェイスがあります．
バス停を選択すると，選択したバス停が地図でフォーカスされ，時刻表がポップアップで表示されます．
また，スライダーを左右に動かすと，指定時間帯のバスの動きが可視化されます．
このとき，指定時刻から３分以内に到着するバス停は黄色，指定時刻にバスが到着するバス停は緑色，過去３分にバスが通り過ぎたバス停は赤色で表示されます．
スライダーの右にある**プレイ**をタップすると，スライダーは自動で動きます．

<a href="https://gyazo.com/870f85e1c5c1a2df06e6af4d05ca4e26"><img width="300px" src="https://i.gyazo.com/870f85e1c5c1a2df06e6af4d05ca4e26.jpg" alt="Image from Gyazo" width="461"/></a>

<a href="https://gyazo.com/c2e80e23bf3202c8034feacc1ef407c7"><img width="300px" src="https://i.gyazo.com/c2e80e23bf3202c8034feacc1ef407c7.jpg" alt="Image from Gyazo" width="461"/></a>

<a href="https://gyazo.com/cf794e55e4c96a663ff958d5b84ba73e"><img width="300px" src="https://i.gyazo.com/cf794e55e4c96a663ff958d5b84ba73e.jpg" alt="Image from Gyazo" width="461"/></a>