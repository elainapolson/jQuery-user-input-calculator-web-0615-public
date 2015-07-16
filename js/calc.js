'use-strict';
$(function(){

  var calculator = new Calculator();

});

function Calculator() {




  $("#equals").click(function(e) {

  var number1 = parseInt($('#number1').val());
  var number2 = parseInt($('#number2').val());
  var operator = $('#operation').val();
  
    if (!($.isNumeric(number1)) || !($.isNumeric(number2))) {
      $('#result').text('Sorry, one of those is not a valid number!');
    } else if (operator != "+" && operator != "-" && operator != "*" && operator != "/" && operator != "%" ) {
      $('#result').text('Sorry, not a valid operation!');
    } else {
      $('#result').text(eval(number1 + operator + number2));
    }
  });

}