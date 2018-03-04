var api = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";

function getQuote(){
  $.getJSON(api, function(result){
    $(".quote").empty();
    $(".author").empty();
    $(".quote").append(result.quoteText);
    $(".author").append("- " + result.quoteAuthor + " -");
  });
}
// Run when the page loads
getQuote();

$(document).ready(function() {  
  $("#getQuote").on("click", function() {
    getQuote();
  });
});