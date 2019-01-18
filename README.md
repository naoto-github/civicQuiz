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

1. 実行するとオープンストリートマップが表示されます．クイズを生成したい地区をタップします．

<a href="https://gyazo.com/fbbea602f319434cc4cd2ed6cff0e0b2"><img width="300px" src="https://i.gyazo.com/fbbea602f319434cc4cd2ed6cff0e0b2.jpg" alt="Image from Gyazo" width="461"/></a>

2. タップした地区のWikipediaからスクレイピングして，クイズが自動生成されます．このバージョンでは，人口や面積などの設問を生成します．

<a href="https://gyazo.com/870f85e1c5c1a2df06e6af4d05ca4e26"><img width="300px" src="https://i.gyazo.com/870f85e1c5c1a2df06e6af4d05ca4e26.jpg" alt="Image from Gyazo" width="461"/></a>

3. オープンストリートマップの画面に戻ると，全問正解した地区が青色で表示されます．

<a href="https://gyazo.com/c2e80e23bf3202c8034feacc1ef407c7"><img width="300px" src="https://i.gyazo.com/c2e80e23bf3202c8034feacc1ef407c7.jpg" alt="Image from Gyazo" width="461"/></a>

<a href="https://gyazo.com/cf794e55e4c96a663ff958d5b84ba73e"><img width="300px" src="https://i.gyazo.com/cf794e55e4c96a663ff958d5b84ba73e.jpg" alt="Image from Gyazo" width="461"/></a>