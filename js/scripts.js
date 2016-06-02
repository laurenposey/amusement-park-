$(document).ready(function(){
  $("form#howTall").submit(function(event){
    event.preventDefault();

    var howTallInput = parseInt($("#thisTall").val());

    if (howTallInput < 58) {
      $("#short").show();
    } else {
      $("#tall").show();
    }
  });
});
