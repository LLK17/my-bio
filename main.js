(function(){
$(document).ready(initialize);

function initialize(){
  alert('Clean your pc, 10000% Legit!') ;
$('button').click(changeColor);

}
function changeColor(){
    var buttoncolor = $(this).text();
    $('h1').css('color', buttoncolor);

  }
})();
