// inicio de owl carousel

$(document).ready(function () {

  

 
  (function ($) {
      
      $('.eventos').owlCarousel({
          loop: false,
          margin: 10,
          nav: true,
          navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
          ],
          autoplay: true,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 3
            }
          }
        })

        $('.galeria').owlCarousel({
          loop: false,
          margin: 10,
          nav: true,
          navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
          ],
          autoplay: true,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 3
            }
          }
        })



        $('.regalos').owlCarousel({
          loop: false,
          margin: 10,
          nav: true,
          navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
          ],
          autoplay: true,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 4
            },
            1000: {
              items: 4
            }
          }
        })

        $('.padrinos').owlCarousel({
          loop: false,
          margin: 1,
          nav: true,
          navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
          ],
          autoplay: true,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            1000: {
              items: 2
            }
          }
        })

  })(jQuery);
});




$('#posicion').change(function() {

  var val = $(this).val();

  if (val == 1) {

    $('#titulos').removeClass();
    $('#titulos').addClass("d-flex justify-content-center align-items-baseline h-100 titulos");

  

  } else if (val == 2) {

    $('#titulos').removeClass();
    $('#titulos').addClass("d-flex justify-content-center align-items-center h-100 titulos");
    

  }else if (val == 3) {

  
    $('#titulos').removeClass();
    $('#titulos').addClass("d-flex justify-content-center align-items-end h-100 titulos");
   
  }



})




//div de musica en la invitacion

$('.divmusica').click(function (){


  $('#musicainput').click();


});


$("#guille").click( function() {
  
  if ($(".changePortada").css('display') == 'none') {

    $(".changePortada").show();

  }
  else{

    $(".changePortada").hide();
  }

});



// funcionamiento del count

$(document).ready(function () {

  
var timer = null;
var end;
var toZero;
var btn = document.getElementById("btn");
var oDay = document.getElementById("days");
var oHour = document.getElementById("hours");
var oMinute = document.getElementById("minutes");
var oSecond = document.getElementById("seconds");
var endtime = document.getElementById("fechaboda");
var startBtn = document.getElementsByClassName("botonfecha");


toZero = oDay.innerHTML = oHour.innerHTML = oMinute.innerHTML = oSecond.innerHTML = "00";

end = endtime.value;

console.log(end);

  if (!end) {
    alert("Please enter date！")
    return false;
  };
  countDown();
  timer = setInterval(countDown, 1000);

$('.botonfecha').click(function(){

  end = endtime.value;

  if (!end) {
    alert("Please enter date！")
    return false;
  };
  countDown();
  timer = setInterval(countDown, 1000);

  

});


function countDown() { 　     　
var timedate = new Date(Date.parse(end.replace(/-/g, "/"))); 
var now = new Date(); 
var date = (timedate.getTime() - now.getTime()) / 1000; 
var day = Math.floor(date / (60 * 60 * 24));
var _hour = date - day * 60 * 60 * 24;
var hour = Math.floor(_hour / (60 * 60));
var _minute = _hour - hour * 60 * 60;
var minute = Math.floor(_minute / (60));
var _second = _minute - minute * 60;
var second = Math.floor(_second);

function toDou(n) {
    if (n < 10) {
      return '0' + n;
    } else {
      return '' + n;
    }
  } 
if (date > 0) {
  oDay.innerHTML = toDou(day);
  oHour.innerHTML = toDou(hour);
  oMinute.innerHTML = toDou(minute);
  oSecond.innerHTML = toDou(second);
} else {
  btn.className = "";
  btn.className = "btn";
  btn.onclick = function() {
    alert("oops")
  }
  endtime.value = "";
  clearInterval(timer);
  toZero;
}
}
});

//funcion de ajustar el tamaño de los textarea

function textAreaAdjust(element) {
element.style.height = "1px";
element.style.height = (20+element.scrollHeight)+"px";
}


//ajustar los anchos de los input deacuerdo a su tamaño del contenido




$(document).ready(function() {

  // alto ajustado al scroll de los textarea
  
  
  
    $.each($("textarea"), function (i, indice) {
  
    
      var scrollHeight = parseInt(this.scrollHeight + 25);
    
      console.log(scrollHeight);
    
      if ($("this").val() != "" && isNaN(scrollHeight) == false && scrollHeight > 0 && scrollHeight > $(this).height()) {
    
          $(this).height(scrollHeight);
    
      }
    
    });
  
  
  
  //funcionamiento de swicher
  
  
  $('#yang').click(function() {
  
      
    $('.carousel-wrap').show();           
      
    $('.datosbancarios').hide(); 
      
  });
  
  $('#yin').click(function() {
  
      
    $('.carousel-wrap').hide();           
      
    $('.datosbancarios').show(); 
      
  });
  
  });


  var song = document.getElementById("audio");

  $(document).ready(function(){
    
   
    
    var isClicked = false;
  
    $('#play-pause').on('click', function(){
      isClicked = !isClicked;
      if(!isClicked){
        this.className = "pause"
        song.pause();
        console.log('pause');
      }
      if(isClicked){
        this.className = "play"
        console.log('play');
        song.play();
      }
    });
  });
  
  function setSongManually(path){
    var blobURL = URL.createObjectURL(path);
    $('#fileName').text(path.name);
    $('audio').attr('src', blobURL);
  }
  
  
  function songLoaded(audio){
    console.log(audio);
  }


var largotitulo = $('.tituloPortada').width();

console.log(largotitulo);



$('#dresscode').on('change', function() {

  var imagenes = [
    'https://media.revistagq.com/photos/5ca5fc2033e7510376153a8b/master/w_1600%2Cc_limit/dress_code_casual_chic_gq_4834.jpg',
    'https://i.pinimg.com/originals/e0/b5/35/e0b5357976b55f1c0d13c0dec8798317.jpg',
    'https://www.somosmamas.com.ar/wp-content/uploads/2020/08/Dress-code-elegante-sport-para-hombres.jpg',
    'https://sites.google.com/site/ropadehombreymujer3/_/rsrc/1467894069827/home/ropa-elegante/ro.jpg'
  ]

  var final = imagenes[this.value -1];

  console.log(final);

  var imagen3 = '<img src="'+final+'" alt="" width="400px"  height="300px"/>'


  $(".modal-body-dress").empty().append(imagen3);

});


$('#btn-portada').click(function(){

    console.log('hola mundo');

    $('#input-portada').trigger('click');
});
