// 問題数
var TOTAL_QUIZ = 3;

//正解数
var CORRECT_QUIZ = 0;

// 選択肢の生成
function generate(content, reg, unit, class_name){
  var result = content.match(reg);

  if(result){
    var answer = Math.floor(Number(result[1]));
    rand = Math.floor(Math.random() * 4);

    $(class_name).each(function(i, element){
      if(rand == i){
        $(this).text(answer);
        $(this).prev().attr("value", "true");
      }
      else{
        $(this).text(Math.floor(answer * Math.random()));
        $(this).prev().attr("value", "false");
      }
      $(this).append(unit)
    });
  }
  else{
    $(class_name).each(function(i, element){
      $(this).text("Not Found");
      $(this).prev().attr("value", "false");
    });

    $("#clear").css("visibility", "visible");
  }
};

// 回答イベントの生成
function changeAction(group_name){
  $("[name=" + group_name + "]:radio").change(function(){
    if($(this).attr("value") == "true"){
      $("#answer-" + group_name).css("color", "yellow");
      $("#answer-" + group_name).text("正解"); 
      CORRECT_QUIZ += 1;  
    }
    else{
      $("#answer-" + group_name).css("color", "red");
      $("#answer-" + group_name).text("不正解");     
    }
    $("#answer-" + group_name).css("visibility", "visible");

    if(CORRECT_QUIZ == TOTAL_QUIZ){
      $("#clear").css("visibility", "visible");
    }

  });
}

document.addEventListener("init", function(event){
  var page = event.target;

  CORRECT_QUIZ = 0;

  if(page.id == "quiz-page"){

    // 引数の取得
    var wiki_url = page.data.url;
    var city_name = page.data.city;
    var geojson = page.data.geo;

    // Wikipediaをスクレイピング
    $.ajax({
      url: wiki_url,
      type: "GET",
      dataType: "html",
    })
    .done(function(data){

      // 対象コンテンツの取得
      var html = $.parseHTML(data)
      var content = $(html).text();
      content = content.replace(/\r?\n/g, ""); //改行を除く
      content = content.replace(/\s+/g, ""); //スペースを除く
      content = content.replace(/,/g, ""); //カンマを除く

      // 市町村
      $("#city").append(city_name)

      var reg;

      // 人口
      reg = new RegExp("人口([0-9,.]+)人");
      generate(content, reg, "人", ".jinkou");

      // 面積
      reg = new RegExp("面積([0-9,.]+)km");
      generate(content, reg, "km<sup>2</sup>", ".menseki");

      // 人口密度
      reg = new RegExp("人口密度([0-9,.]+)人/km");
      generate(content, reg, "人/km<sup>2</sup>", ".mitsudo");

    })
    .fail(function(){

      $("#city").empty();
      $("#city").append("Error: Not Found");

    })

    changeAction("jinkou");
    changeAction("menseki");
    changeAction("mitsudo");

    $("#clear").click(function(){
      // ナビゲータ
      var navigator = document.getElementById("navigator");

      // GeoJsonをローカルストレージに保存
      if(!localStorage.getItem(city_name)){
        localStorage.setItem(city_name, geojson);
      }

      // 地図ページに遷移
      navigator.popPage();
    });
  }
});
