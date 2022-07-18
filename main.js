$("img").addClass("image-center");
$("p").eq(4).remove()
$("#title").css("fontSize", "95px")

$("aside").html($('<p>')).text('sorry for the list')


function changeColor {
  let $red = $('.form-control').eq(0).val();
  let $blue = $('.form-control').eq(1).val();
  let $green = $('.form-control').eq(2).val();
  let $color = `rgb(${$red},${$blue},${$green})`;
  $('body').css('backgroundColor',$color)
}

${body}.on('change',changeColor);