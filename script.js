var clickTimes = 0;
$('.taiko-face').click(function() {
  clickTimes++;
  if (clickTimes % 3 === 0){
    $('.chu-arc').css("z-index", "-1");
    $('.mouth-arc').css("z-index", "2");
  }
  if (clickTimes % 3 === 1){
    $('.cheek-arc').css("z-index", "2");
  }
  if (clickTimes % 3 === 2){
    $('.mouth-arc').css("z-index", "-1");
    $('.cheek-arc').css("z-index", "-1");
    $('.chu-arc').css("z-index", "2");
  }
});

$('#redOne').click(function() {
  $('.taiko-face').css("background", "#F76943");
  $('.cheek-arc').css("background", "#F76943");
  }
);

$('#blueOne').click(function() {
  $('.taiko-face').css("background", "#69B9C4");
  $('.cheek-arc').css("background", "#69B9C4");
  }
);

 var audio = $("audio")[0];
 $('.taiko-face').click(function() {
   audio.play();
});