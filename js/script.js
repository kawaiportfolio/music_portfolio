$(function () {

var logo = jQuery('.profile');
jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 500) { //スクロールが500pxを越えたら
    logo.addClass('invert');
  } else { //スクロールが500pxを越えなければ
    logo.removeClass('invert');
  }
});

var logo = jQuery('.profile');
	var height = jQuery(window).height(); //ウィンドウの高さ
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > height) { //スクロールが画面の高さを越えたら
			logo.addClass('invert');
		} else { //スクロールが画面の高さを越えなければ
			logo.removeClass('invert');
		}
	});

//テキストのカウントアップの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	strokeWidth: 0,//進捗ゲージの太さ
	duration: 1500,//時間指定(1000＝1秒)
	trailWidth: 0,//線の太さ
	text: {//テキストの形状を直接指定	
		style: {//天地中央に配置
			position:'absolute',
			left:'50%',
			top:'50%',
			padding:'0',
			margin:'0',
			transform:'translate(-50%,-50%)',
			'font-size':'30px',
			color:'#333',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  

  //ページ内スクロール
  var $nav = $(".header");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //スクロールに応じてヘッダーの背景色が変化
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });

// smoothTriggerにsmoothTextAppearというクラス名を付ける定義
function SmoothTextAnime() {
  $('.smoothTextTrigger').each(function(){ //smoothTextTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('smoothTextAppear');// 画面内に入ったらsmoothTextAppearというクラス名を追記
    }else{
    $(this).removeClass('smoothTextAppear');// 画面外に出たらsmoothTextAppearというクラス名を外す
    }
    }); 
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  SmoothTextAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  SmoothTextAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

});

//ハンバーガーメニュー
$('#menu-button').on('click',function(){
  $('.gnav-sp-wrap').fadeToggle(500);
  $('#menu-button').toggleClass('open');
});

//メニュー内のリンククリックしたとき
$(".gnav-sp a").on("click", function() {
  $('.gnav-sp-wrap').fadeToggle(500);
});