// jsを記述する際はここに記載していく

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
                $(function(){
                    $('.fadein').each(function(i){
                        $(this).delay(i * 200).queue(function(){
                            $(this).addClass('active');
                        });
                    });
                });
            }
        });
    });
});


function PageTopAnime() {

  var scroll = $(window).scrollTop(); //スクロール値を取得
  if (scroll >= 200){//200pxスクロールしたら
    $('#page-top').removeClass('DownMove');   // DownMoveというクラス名を除去して
    $('#page-top').addClass('UpMove');      // UpMoveというクラス名を追加して出現
  }else{//それ以外は
    if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
      $('#page-top').removeClass('UpMove'); //  UpMoveというクラス名を除去し
      $('#page-top').addClass('DownMove');  // DownMoveというクラス名を追加して非表示
    }
  }
  
  var wH = window.innerHeight; //画面の高さを取得
  var footerPos =  $('#footer').offset().top; //footerの位置を取得
  if(scroll+wH >= (footerPos+10)) {
    var pos = (scroll+wH) - footerPos+10 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
    $('#page-top').css('bottom',pos); //#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
  }else{//それ以外は
    if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名がついていたら
      $('#page-top').css('bottom','10px');// 下から10pxの位置にページリンクを指定
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});

// カーソルが乗ったときの色変更&カーソルが離れたとき色が戻る
$(function(){
  $('#a-about').hover(function(){
  $('#a-about').css('background','red');
  },function(){
  $('#a-about').css('background','yellow');
  });
  $('#a-course').hover(function(){
  $('#a-course').css('background','red');
  },function(){
  $('#a-course').css('background','yellow');
  });
  $('#a-news').hover(function(){
  $('#a-news').css('background','red');
  },function(){
  $('#a-news').css('background','yellow');
  });
  $('#a-access').hover(function(){
  $('#a-access').css('background','red');
  },function(){
  $('#a-access').css('background','yellow');
  });
  $('#a-contact').hover(function(){
  $('#a-contact').css('background','red');
  },function(){
  $('#a-contact').css('background','yellow');
  });
  }); 


  $(function() {
    //画面をスクロールするとイベントが発動する
    $(window).scroll(function() {
      
      //フェードインさせたい要素の位置をずらす
      $('.course-img1').css({
        'opacity': '0',
        'transform': 'translateX(30px)'
      });
      
      //スクロールバーの位置を取得
      var scroll = $(window).scrollTop();
  
      //ウィンドウの高さを取得
      var windowHeight = $(window).height();
  
      $('.course-img1').each(function() {
        //フェードインさせたい要素の縦位置を取得
        var elemPos = $(this).offset().top;
  
        //要素がウィンドウの中に入ってからさらに100pxスクロールしたら要素をフェードインする
        if (scroll > elemPos - windowHeight + 100) {
          $(this).css({
            'opacity': '1',
            'transform': 'translateX(0)'
          });
        }
      });
    });
  });

  $(function() {
    //画面をスクロールするとイベントが発動する
    $(window).scroll(function() {
      
      //フェードインさせたい要素の位置をずらす
      $('.course-img2').css({
        'opacity': '0',
        'transform': 'translateX(-30px)'
      });
      
      //スクロールバーの位置を取得
      var scroll = $(window).scrollTop();
  
      //ウィンドウの高さを取得
      var windowHeight = $(window).height();
  
      $('.course-img2').each(function() {
        //フェードインさせたい要素の縦位置を取得
        var elemPos = $(this).offset().top;
  
        //要素がウィンドウの中に入ってからさらに100pxスクロールしたら要素をフェードインする
        if (scroll > elemPos - windowHeight + 100) {
          $(this).css({
            'opacity': '1',
            'transform': 'translateX(0)'
          });
        }
      });
    });
  });

  $(function() {
    //画面をスクロールするとイベントが発動する
    $(window).scroll(function() {
      
      //フェードインさせたい要素の位置をずらす
      $('.course-img3').css({
        'opacity': '0',
        'transform': 'translateX(30px)'
      });
      
      //スクロールバーの位置を取得
      var scroll = $(window).scrollTop();
  
      //ウィンドウの高さを取得
      var windowHeight = $(window).height();
  
      $('.course-img3').each(function() {
        //フェードインさせたい要素の縦位置を取得
        var elemPos = $(this).offset().top;
  
        //要素がウィンドウの中に入ってからさらに100pxスクロールしたら要素をフェードインする
        if (scroll > elemPos - windowHeight + 100) {
          $(this).css({
            'opacity': '1',
            'transform': 'translateX(0)'
          });
        };
      });
    });
  });

  