$(function(){
  var memagzHeight = 565 ; //magz width
  var memagzWidth = 800 ; //magz height
  var maxScale = 300 ;
  var memagzScale = 100 ;
  var minScale = 30 ;
  var Music = new Audio('assets/music/Tahu Bulat.mp3');
  var flipsound = new Audio('assets/music/pageflip.mp3');
  var ModeSimple = true;
  var memagz = $("#memagz");
  var magzThumb = $('.thumbnails-container');
  var magzNotif = null;
  var thumbCond = true;
  var musiCond = true;
  var blank = $('.blank');
  var helpContent = $('.helpContent');
  var magzHelpCond = true;
  var dragmode = false;
  var ThemeCerah = false;
  var color = [];
  Music.loop = true;
  Music.play();

  $(memagz).draggable({ disabled: true });

  $(magazinePage).each(function(key,obj){
		var i = key + 1 ;

		color[i] = [obj.color];

		if (i % 2 != 0) {
			if (obj.halaman != null && obj.halaman != "" ) {
				var halaman = "<p class='halaman-genap'>"+obj.halaman+"</p>";
			}else{
				var halaman = "";
			}
		}else{
			if (obj.halaman != null && obj.halaman != "" ) {
				var halaman = "<p class='halaman-ganjil'>"+obj.halaman+"</p>";
			}else{
				var halaman = "";
			}
		}

  var div = $("<div data-toggle=''></div>").css({
    "backgroundImage" : "url(\'assets/page/" + obj.page + "\')",
    "backgroundSize"  : "100% 100%"
    }).html(obj.html + halaman).appendTo(memagz);

    var li = $("<li data-toggle=\'tooltip\' title=\'" + obj.title + "\' ></li>");
    var img = $("<img src=\'assets/thumbnails/" + i + ".PNG\' data-toggle='magzTurn' data-action=" + i + ">");
    $(img).appendTo(li);
    $(li).appendTo(".slides");
  });

  $(memagz).turn({
    width : memagzWidth,
    height : memagzHeight,
    when : {
      turning : function(a , b , c){
        flipsound.play();
        window.location.hash = "#" + b ;
        magz.initTheme();
        magz.initColor(b);
      }
    }
  });

  $(document).ready(function()  {
    $(".flexslider").flexslider({
      animation : "slide",
      animationLoop : true,
      itemWidth : 150,
      itemMargin : 5,
      minItems : 3,
      maxItems : 10,
    });
  });

  function resizeMagz(size){
    i = size/100;
    if (memagzScale >= minScale && memagzScale <= maxScale) {
      $(memagz).css({
        'transform'  : 'scale('+ i +')',
        'transition' : 'all 0.5s'
      })
      return true;
    }
  }

  function notif(text){
    if (magzNotif != null) {
      clearTimeout(magzNotif.timer);
      $(magzNotif).detach();
    }

    magzNotif = document.createElement("div");
    $(magzNotif).html(text).addClass('notif').addClass('shade').appendTo($("body")).fadeIn('fast');

    magzNotif.timer = setTimeout(function()  {
      $(magzNotif).fadeOut('normal', function() {
          $(this).detach();
      });
    }, 3000);
  }

  var magz = {
    next : function(){
      $(memagz).turn('next');
    },
    prev : function(){
      $(memagz).turn('previous');
    },
    goPage : function(j){
      $(memagz).turn('page',j);
    },
    cover : function(){
      m$(memagz).turn('page',1);
    },
    backCover : function(){
      $(memagz).turn('page',$(memagz).turn('pages'));
    },
    zoomIn : function(){
      memagzScale += 10 ;
      if (!resizeMagz(memagzScale)){
        notif('You are in max scale');
        memagzScale - 10 ;
      }else{
        notif("Zoom " + memagzScale + " %" );
      }
    },
    zoomOut : function(){
      memagzScale -= 10 ;
      if (!resizeMagz(memagzScale)){
        notif('You are in min scale');
      }else{
        notif("Zoom " + memagzScale + " %" );
      }
    },
    zoomReset : function(){
      memagzScale = 100 ;
      if (!resizeMagz(memagzScale)) ;
    },
    toggleThumb : function(){
      console.log(thumbCond);
      if (thumbCond!=true) {
        i = memagzScale ;
        resizeMagz(i);
        $("#memagz-container").css({"top" : "11%","transition":"all 0.7s"});
        $(magzThumb).css({
          "bottom" : "-40%",
          "transition" : "all o.7s"
        });
        $(blank).css({"display":"none"});
        thumbCond = true ;
        ModeSimple = true;
      }else{
        thumbCond = false ;
        ModeSimple = false ;
        i = 30;
        resizeMagz(i);
        $("#memagz-container").css({"top" : "0"});
        $(magzThumb).css({
          "bottom" : "0",
          "transition" : "all 0.5s"
        });
        $(blank).css({"display":"block"});
        notif('Anda bisa menghilangkan thumbnails<br>dengan mengklik area yang buram');
      }
    },
    toggleMusic : function(){
      if (musiCond==true) {
        if (ThemeCerah==true) {
          $('#music-icon').attr('src','assets/icon/cerah/musicoff.png');
        }else{
          $('#music-icon').attr('src','assets/icon/gelap/musicoff.png');
        }
        Music.pause();
        musiCond = false ;
      }else{
        if (ThemeCerah==true) {
          $('#music-icon').attr('src','assets/icon/cerah/musicon.png');
        }else {
          $('#music-icon').attr('src','assets/icon/gelap/musicon.png');
        }
        Music.play();
        musiCond = true;
      }
    },
    toggleHelp : function(){
      if (magzHelpCond!=true) {
        $(helpContent).fadeOut('slow');
        $(".blank-2").fadeOut('fast').addClass('thumbtoggle');
        magzHelpCond = true ;
      }else{
        magzHelpCond = false ;
        $(helpContent).fadeIn('slow');
        $(".blank-2").fadeIn('fast').removeClass('thumbtoggle');
      }
    },
    dragMagz : function(){
      if (dragmode != false ) {
        $(memagz).draggable('enable');
        notif('Dragmode Off');
        dragmode = false ;
      }else {
        $(memagz).draggable('disable');
        notif('Dragmode On');
        dragmode = true;
      }
    },
    initTheme : function() {
      if(window.location.hash) {
        var hash = window.location.hash.substring(1);
        var kelas = [/*'aboutus','thumbnails','musicon','fullscreen','back','next','cover','backover'*/];
        var j = hash-1;
        if (hash > 3 && hash < magazinePage.length) {
          ThemeCerah = true;
          for(var o = 0 ; o < kelas.length ; o++){
            $('.'+kelas[o]+'').attr('src' , 'assets/icon/cerah/' + kelas[o] + '.png');
            $('.'+kelas[o]+'').addClass('animated pulse');
            $('.'+kelas[o]+'').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',function() {
              $(this).removeClass('animated pulse' );
            });
          }
          $('.themes').css({'background-color' : 'code warna','transition' : 'all 0.5s'});
          $('.bg-color').css({'background':'linear-gradient(code warna)'});
        }else{
          ThemeCerah = false;
          for(var o = 0 ; o < kelas.length ; o++){
            $('.'+kelas[o]+'').attr('src' , 'assets/icon/gelap/' + kelas[o] + '.png');
            $('.'+kelas[o]+'').addclass('animated pulse');
            $('.'+kelas[o]+'').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',function() {
              $(this).removeClass('animated pulse');
            });
          }
          $('.themes').css({'background-color' : '#6CF','transition' : 'all 0.5s'});
          $('.bg-color').css({'background':'linear-gradient(#6CF,#000)'});
        }
      }
    },

    initColor : function(hash) {
      var tema = color[hash];
      $('.themes').css({'background-color' :"'" + tema + "'",'transition' : 'all 0.5s'});
      $('.bg-color').css({'background':'linear-gradient('+tema+',#000)'});
    },

    fullscreen : function() {
      if ((document.fullScreenElement && document.fullScreenElement !== null)
        ||  (!document.mozFullScreen && !document.webkitIsFullScreen))  {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        if (ThemeCerah==true) {
          $('#fullscreen-icon').attr('src','assets/icon/cerah/normalscreen.png');
        }else{
          $('#fullscreen-icon').attr('src','assets/icon/gelap/normalscreen.png');
        }
        notif('fullscreen On');
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
        if (ThemeCerah==true) {
          $('#fullscreen-icon').attr('src','assets/icon/cerah/fullscreen.png');
        }else {
          $('#fullscreen-icon').attr('src','assets/icon/gelap/fullscreen.png');
        }
        notif('Fullscreen Off');
      }
    }
  }

  //Fungsi keyboard
  $(document).bind('keydown',function(key){
    if (thumbCond==false) {
      key.preventDefault();
    }
    if (key.keyCode == 84) {
      key.preventDefault();
      magz.toggleThumb();
    }
    if (ModeSimple) {
      switch (key.keyCode) {
        case 17:
          key.preventDefault();
          magz.dragMagz();
          break;

        case 39:
          key.preventDefault();
          magz.next();
          break;

        case 37:
          key.preventDefault();
          magz.prev();
          break;

          case 38:
  					key.preventDefault();
  					magz.zoomIn();
  					break;

  				case 40:
  					key.preventDefault();
  					magz.zoomOut();
  					break;

          case 77:
            key.preventDefault();
            magz.toggleMusic();
            break;
      }
    }
  });

  $(document).bind('keyup',function(key){
    if (key.keyCode == 17) {
      key.preventDefault();
      magz.dragMagz();
    }
  });

  //Animation and Content Extra

  $(".thumbtoogle").on('click',function(key){
    key.preventDefault();
    magz.toggleThumb();
  });

  $("[data-toggle='tooltip']").tooltip();

  $(".helpContent").on('click',function(key){
    key.preventDefault();
    magz.toggleHelp();
  });

  $("[data-toggle='magzTurn']").on('click',function(key){
    key.preventDefault();
    $(this).css({
      'cursor' : 'pointer'
    });
    var j = $(this).data('action');
    magz.goPage(j);
  });

  $('.anim').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',function(){
    $(this).removeClass('animated ' + $(this).data('action') );
  });


  setInterval(function(){
    var angka = Math.random();
    x = angka* 2000;
    y = angka*1000;
    z = angka*1234;
    a = angka*2143;
    time = angka*10;
    if ( x <= 1000 && y <= 1000 ) {
      $(".animation").css({
        'left' : x ,
        'bottom' : y ,
        'top' : z ,
        'transition' : 'all '+ time +'s'
      });
    }
  },1000);

  setInterval(function(){
    var kl = Math.random();
    var select = parseInt(kl*10);
    var animlist = ['bounce','flash','pulse','rubberBand','shake','headShake','swing','tada','wobble','jello','bounceIn'];
    console.log(select);
    if (select <= 11) {
      $('.animtime').addClass('animated ' + animlist[select]);
      $('animtime').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',function(){
        $(this).removeClass('animated ' + animlist[select]);
      });
    }
  },5000);

  setInterval(function(){
    var message = "Anda dapat menggunakan keyboard arah <br> Juga key 'M' untuk musik dan <br> 'T' untuk thumbnails";
    var wiw = Math.random();
    var wow = parseInt(wiw*10);
    if (wow == 5 ) {
      notif(message);
    }
    if (wow == 2) {
      notif('anda bisa menggeser majalah dengan menahan ctrl lalu drag')
    }
  },15000)

  $('.pagepict').hover(function(){
    var a = $(this).data('action');
    if (a != undefined) {
      $(this).addClass('animated ' + a );
      $(this).bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',function(){
        $(this).removeClass('animated ' + a);
      });
    }else {
      $(this).addClass('animated shake' );
      $(this).bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',function(){
        $(this).removeClass('animation shake ');
      });
    }
  });

  //for console letak oi
  if(window.location.hash) {
    var hash = window.location.hash.substring(1);
    magz.goPage(hash);
  }

  //Navbar and icon function
  $("#thumbnail").click(function(key){
    key.preventDefault();
    magz.toggleThumb();
  });

  $("#musiccon").click(function(key){
    key.preventDefault();
    magz.toggleMusic();
  });

  $("#zoomin").click(function(key){
    key.preventDefault();
    magz.zoomIn();
  });

  $("#zoomout").click(function(key){
    key.preventDefault();
    magz.zoomOut();
  });

  $("#zoomreset").click(function(key){
    key.preventDefault();
    magz.zoomReset();
  });

  $("#kiri").click(function(key){
    key.preventDefault();
    magz.prev();
  });

  $("#kanan").click(function(key){
    key.preventDefault();
    magz.next();
  });

  $("#fullscreencon").click(function(key){
    key.preventDefault();
    magz.fullscreen();
    notif('Tekan "esc" untuk keluar dari mode fullscreen');
  });

  $("#helpcon").click(function(key){
		key.preventDefault();
		magz.toggleHelp();
		notif('klik help konten untuk menghilangkan help konten');
	});

});
