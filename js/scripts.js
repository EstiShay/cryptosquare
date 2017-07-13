//User Interface
$(document).ready(function(){
  $("#converter").submit(function(event){
    var input = $("input#originStr").val();
    //var output = numToConvert(input);
    $("#encryptStr").text(input);
    $("#result").show();
    event.preventDefault();
  });
});
