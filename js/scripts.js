//Business logic
function strToConvert(userInput) {
  var strippedStr = userInput.replace(/[^\w]/g,"");
  var row = Math.ceil(Math.sqrt(strippedStr.length));
  var column = Math.floor(Math.sqrt(strippedStr.length));
  arrayOfStrings = [];
  while (strippedStr.length > 0) {
    var substring = strippedStr.slice(0, column);
    strippedStr = strippedStr.slice(column, strippedStr.length);
    arrayOfStrings.push(substring);
  }
  var output = '';
  for (var index = 0; index < column; index += 1) {
    arrayOfStrings.forEach(function(orderedStr) {
      if (orderedStr[index] !== undefined) {
      output += orderedStr[index];
      }
    });
  }
    return output;
}






//User Interface
$(document).ready(function(){
  $("#converter").submit(function(event){
    var input = $("input#originStr").val();
    var output = strToConvert(input);
    $("#encryptStr").text(output);
    $("#result").show();
    event.preventDefault();
  });
});
