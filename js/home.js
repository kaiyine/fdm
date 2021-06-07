$(document).ready(function(){
  //footer
  $('footer').append('<div class="container">©2005-2020 All rights reserved by Foresta Di Memoria</div>');
  
  //totop
  $('body').append('<div id="toTop"><i class="fas fa-chevron-up"></i></div>');
  $(window).scroll(function () {
      if ($(this).scrollTop() >= 200) {
          $('#toTop').fadeIn();
      } else {
          $('#toTop').fadeOut();
      }
  });
  $('#toTop').click(function () {
      $("html, body").animate({
          scrollTop : 0
      }, 600);
      return false;
  });
  
  var dataGallery = ['210606','210603','180915','180909','180217','171009','171006','160327','160305','160306','151210','151205','151201','151122','150912','150213','141221','141025','141022','140829','140825','140818','140324','140222','140216','140119','140105','131108','131103','131010','130907','130831','130827','130825','130601','130526','130415','130413','130309','130224','121104','121020','111110','110823-25','110815-19'],
      dataName = ['21/06/06','21/06/03','18/09/15','18/09/09','18/02/17','17/10/09','17/10/06','16/03/27','16/03/05','16/03/06','15/12/10','15/12/05','15/12/01','15/11/22','15/09/12','15/02/13','14/12/21','14/10/25','14/10/22','14/08/29','14/08/25','14/08/18','14/03/24','14/02/22','14/02/16','14/01/19','14/01/05','13/11/08','13/11/03','13/10/10','13/09/07','13/08/31','13/08/27','13/08/25','13/06/01','13/05/26','13/04/15','13/04/13','13/03/09','13/02/24','12/11/04','12/10/20','11/11/10','11/08/23-25','11/08/15-19'],
      albumCount = {'g53':15 ,'g52':15 ,'g51':23 ,'g50':15 ,'g49':13 ,'g48':22 ,'g47':10 ,'g46':34 ,'g45':9 ,'g44':10 ,'g43':18 ,'g42':21 ,'g41':7 ,'g40':14 ,'g39':19 ,'g38':20 ,'g37':40 ,'g36':34 ,'g35':13 ,'g34':26 ,'g33':22 ,'g32':11 ,'g31':10 ,'g30':15 ,'g29':19 ,'g28':11 ,'g27':6 ,'g26':8 ,'g25':13 ,'g24':10 ,'g23':11 ,'g22':8 ,'g21':14 ,'g20':6 ,'g19':7 ,'g18':10 ,'g17':7 ,'g16':7 ,'g15':4 ,'g14':7 ,'g13':7 ,'g12':5 ,'g11':6 ,'g10':8 ,'g09':15},
      galleryChar = ['Miyari<br>Miyaki','Miyari<br>Miyaki','Senu<br>Chisa','Senu<br>Chisa','Natsuka','Senu','Senu','Chisa','Chisa','Chisa<br>Natsuka','Miyari<br>Miyaki<br>Natsuka','Usuhana','Natsuka','Usuhana','Usuhana','Senu<br>Chisa','Natsuka','Senu<br>Chisa','Senu<br>Chisa','Chyou','Chisa','Chisa','Natsuka','Natsuka','Senu','Chisa','Senu<br>Chisa','Miyari<br>Miyaki','Senu<br>Chisa<br>Natsuka','Chyou','Natsuka','','Natsuka','Natsuka','Senu','Senu','Chisa','Senu','Chisa','Chisa','Chisa','Natsuka','Senu<br>Chisa','Senu','Senu<br>Chisa'];
      
  var albumName = [],
      getPageName = location.search,
      dataNum = dataGallery.length + 9;

  //create album list
  for(var i=0;i<dataGallery.length;i++){
    if (dataNum < 11){
      dataNum = '0'+ (dataNum - 1);
    }else{
      dataNum = dataNum - 1;
    }
    $('#album ul').append('<li class="col"><a class="' + dataGallery[i] +'" href="javascript:void(0)" title="' + dataName[i] + '"><img src="images/thumbnails/g'+dataNum+'.jpg"><p class="ga-text">' + dataName[i] + '</p><span>'+galleryChar[i]+'</span></a></li>');
  }
  if(dataGallery.length%8 > 0){
    for(var i=0;i<8-dataGallery.length%8;i++){
      $('#album ul').append('<li class="col d-lg-flex d-none"></li>');
    }
  }
  if(dataGallery.length%5 > 0){
    for(var i=0;i<5-dataGallery.length%5;i++){
      $('#album ul').append('<li class="col d-md-flex d-lg-none d-none"></li>');
    }
  }
  if(dataGallery.length%2 > 0){
    $('#album ul').append('<li class="col d-md-none"></li>');
  }


  $('#album').on('click','a',function(){
    var pageName = $(this).attr('class').replace(/&.*/,'');
    showPhoto(pageName);
    $("html, body").animate({
        scrollTop : 60
    }, 300);
  });
  $('.photo-close').click(function(){
    $('#show-photo').fadeOut();
  });

  //create Swiper
  function createSwiper(){
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
  //show photo
  function showPhoto(getPageName){
    if(dataGallery.indexOf(getPageName) > -1){
      $('#show-photo').fadeIn();
      $('.sub-title').remove();
      $('.swiper-container').remove();
      $('.album-title').after('<div class="swiper-container text-center"><div class="swiper-wrapper"></div><div class="swiper-pagination swiper-pagination-white"></div><div class="swiper-button-prev swiper-button-white"></div><div class="swiper-button-next swiper-button-white"></div></div>')
      for(var i in albumCount){
        albumName.push(i);
      }
      var album = dataGallery.indexOf(getPageName);
      //標題
      $('#gr-top').html('20'+dataName[album]);
      //產生圖片
      for (var i = 1; i<=albumCount[albumName[album]]; i++){
        if (i<10){
          i = '0'+i;
        }
        $('.swiper-wrapper').append('<div class="swiper-slide"><div class="slide-in"><img class="img'+i+'" src="images/gallery/'+albumName[album] + i +'.jpg"></div></div>');
        if(i == albumCount[albumName[album]]){
          createSwiper();
        }
      }
      //內文
      if(albumName[album] == 'g09'){
        $('.img14').after('<p>很喜歡這張的光影</p>')
      }
      if(albumName[album] == 'g10'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">跑去太魯閣玩，結果也只能在旅館拍一拍XD</p>')
      }
      if(albumName[album] == 'g11'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">日常</p>')
      }
      if(albumName[album] == 'g12'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">跟朋友去碧潭夜拍，順手把果果撈出門~</p>')
      }
      if(albumName[album] == 'g13'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">為了搭配毛頭，特別車了一頂帽子出來<br>其實前面已經失敗兩頂了，雖然這頂也不是完美<br>不過我懶得再試了(艸</p>')
      }
      if(albumName[album] == 'g14'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">皮諾丘場，主辦很用心的準備了好看的佈景<br>項鍊假髮和髮箍都是當天的戰利品</p>')
      }
      if(albumName[album] == 'g18'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">邀友人來我家和服聚&lt;3</p>')
      }
      if(albumName[album] == 'g20'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">皮諾丘和會後晚餐的照片，手機拍的渣畫質</p>')
      }
      if(albumName[album] == 'g21'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">果果的新妝，感覺長大了XD<br>樓梯架和書是皮諾丘場買的，逛攤時就覺得很漂亮<br>翻了攤位上的型錄發現這是商品，當場就拆了人家攤位佈景(艸<br>回家搭起來果然非常好看&lt;333</p>')
      }
      if(albumName[album] == 'g22'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">朋友家的孩子，小美人(♂)一枚</p>')
      }
      if(albumName[album] == 'g24'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">澄澄的新妝!</p>')
        $('.img07').after('<p>小姬：手舉起來就一樣高了!</p>')
        $('.img08').after('<p>澄：頭還是在這裡而已~<br>小姬：#</p>')
      }
      if(albumName[album] == 'g25'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">佔領了1/4書櫃的孩子們XD</p>')
      }
      if(albumName[album] == 'g26'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">好久不見的雙子</p>')
      }
      if(albumName[album] == 'g27'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">點心時間</p>')
      }
      if(albumName[album] == 'g28'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">大~風~吹~<br>同場加映友人家的小美女&lt;3</p>')
        $('.img06').after('<p>光照在風吹的髮絲上很美</p>')
      }
      if(albumName[album] == 'g29'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">皮諾丘超級敗家之旅(掩面<br>照片一半是手機拍的，一半是朋友用單眼拍的｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡</p>')
      }
      if(albumName[album] == 'g31'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">天使之里 - 霞中庵<br>感謝同行朋友幫忙預約<br>當天人滿少的，整個空間很舒適<br>當天在嵐山還有其他行程不想帶太重，所以只有果果來朝聖~</p>')
        $('.img10').after('<p>果果：分我一口~</p>')
      }
      if(albumName[album] == 'g32'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">新目瞅新衣服新項鍊新鞋<br>在皮諾丘大豐收的千紗紗XD<br>玩了奇妙的色調</p>')
      }
      if(albumName[album] == 'g33'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">在房間角落搭了景~</p>')
        $('.img08').after('<p>zzzZZZz</p>')
      }
      if(albumName[album] == 'g34'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">八拾捌茶輪番所<br>氣氛很好的地方<br>夏日炎炎老房子冷氣不夠力是美中不足之處XD</p>')
        $('.img20').after('<p>拐到帥葛格的帕里夏(咦</p>')
        $('.img26').after('<p>太熱沒人點熱茶，沒派上用場XD</p>')
      }
      if(albumName[album] == 'g35'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">\新妝新衣少女組/<br>晚上拍照各種手抖，拍十張糊八張啊TAT</p>')
      }
      if(albumName[album] == 'g36'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">士林官邸→Goodness28</p>')
        $('.img04').after('<p>忘記帶假毛的Mys葛格<br>只好整場當隱藏人物了･ﾟ･(つД｀)･ﾟ･</p>')
        $('.img15').after('<p>手牽手</p>')
      }
      if(albumName[album] == 'g37'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">久違的娃聚! 感謝威斯特太太主揪<br>好久不見啊啊啊QAQ<br>大家的孩子都相當帥氣可愛<br>不過我一如往常的手抖沒有極限(干<br>照片品質不是很好請見諒OTL</p>')
        $('.img01').after('<p>威斯特家的神山，是個帥哥///</p>')
        $('.img02').after('<p>沄婕家的MAKO，超級可愛的女生!!!</p>')
        $('.img04').after('<p>忘了帶鞋，於是果果當了一天的裸足熊孩子(艸</p>')
        $('.img07').after('<p>明明是女孩卻帥氣滿分的帕里夏，整個騙到大家XDD</p>')
        $('.img08').after('<p>威斯特家的博遠(左)和夜桜家的小教A，早知道就把澄澄帶來(捶地</p>')
        $('.img11').after('<p>威斯特家的豫書，中性臉的48番，是個美人呢&lt;3</p>')
        $('.img15').after('<p>中間是梓芯家的小雪，可愛的女孩兒////</p>')
        $('.img16').after('<p>神秘少男團體(X)，中間是梓芯家的阿玉和阿斐，兄弟檔都帥帥>w&lt;</p>')
        $('.img18').after('<p>戳(誤</p>')
        $('.img23').after('<p>自動增殖(不是</p>')
        $('.img26').after('<p>夜桜家的狛葉，很有model樣的帥哥XD</p>')
        $('.img36').after('<p>果果：賣花~一束一百~(被打</p>')
        $('.img37').after('<p>跟果果交換頭毛的帕里夏，比較有女生味了~<br>LUTS頭真小www</p>')
        $('.img40').after('<p>&#92;最後大合照/</p>')
      }
      if(albumName[album] == 'g38'){
        $('.img18').after('<p>還未有設定的新人偷偷公開-艸-</p>')
      }
      if(albumName[album] == 'g39'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">小少女們的午茶時間</p>')
        $('.img10').after('<p>小轟胎與巨貓(X</p>')
      }
      if(albumName[album] == 'g40'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">小薄花的新妝(-///▽///-)<br>軟軟萌萌的妹子最高!</p>')
      }
      if(albumName[album] == 'g41'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">買了大半年的新衣XDD</p>')
        $('.img02').after('<p>野性果果</p>')
      }
      if(albumName[album] == 'g42'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">板橋「Chatting愜庭」聚餐<br>懶人沒帶相機，所以照片都是借用朋友的GF7拍的XD<br>小薄花第一次出門~</p>')
        $('.img13').after('<p>朋友家新來的小AZONE，像是娃娃的娃娃~</p>')
        $('.img19').after('<p>偷吃葛格豆腐的歐米</p>')
      }
      if(albumName[album] == 'g43'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">雙子就是要穿雙子套裝(・´з`・)</p>')
        $('.img13').after('<p>悄悄話</p>')
        $('.img16').after('<p>果果亂入!</p>')
        $('.img17').after('<p>專心聽故事</p>')
        $('.img18').after('<p>都祈：zzzZZZ</p>')
      }
      if(albumName[album] == 'g45'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">皮諾丘當天在會場附近的照片<br>因為是借朋友相機拍的所以上傳時間比較晚XD</p>')
        $('.img01').after('<p>朋友家的新成員~<br>娃場結束就送出去改妝囉XD</p>')
      }
      if(albumName[album] == 'g44'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">3/7皮諾丘的戰利品們~<br>大娃的項鍊給幼幼做揹鍊很適合呢</p>')
      }
      if(albumName[album] == 'g46'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">淡水老街 P Café</p>')
        $('.img22').after('<p>這邊開始是朋友拍的照片~</p>')
        $('.img31').after('<p>擁有殺人眼神的帕里夏</p>')
      }
      if(albumName[album] == 'g47'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">久違的隨意拍拍</p>')
      }
      if(albumName[album] == 'g48'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">隨意拍拍第2彈~<br>姊姊還是比較適合棕髮&lt;3</p>')
      }
      if(albumName[album] == 'g49'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">&#92;難得出太陽/</p>')
      }
      if(albumName[album] == 'g50'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">期待的新衣(｀・ω・´)<br>前一天幫2人去黃化磨到手斷掉(炸)</p>')
      }
      if(albumName[album] == 'g52'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">沉迷遊戲好久沒認真拍娃照，1/4男裝又很難買<br>難得幫兩人訂了新衣服拖了半個月終於拿出來拍了<br>背景板也是買了好一陣子，大幅降低搭景難度的好物XD</p>')
        $('.img13').after('<p>順便拍拍佈景用小物~</p>')
      }
      if(albumName[album] == 'g53'){
        $('#gr-top').after('<p class="sub-title m-0 pt-1">躺了很久的兩人其實剛拿出來狀態不太好<br>花了一天整理完再拍一次 >:D</p>')
        $('.img06').after('<p>小手手可愛<3</p>')
        $('.img07').after('<p>相親相愛的兩人</p>')
        $('.img10').after('<p>很喜歡這個抱緊緊</p>')
        $('.img15').after('<p>拍累了休息</p>')
      }
    }
  }
}); 
