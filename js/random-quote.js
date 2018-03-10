var api = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";

function getQuote(){
  $.getJSON(api, function(result){
    $(".quote").empty();
    $(".author").empty();
    $(".quote").append(result.quoteText);
    $(".author").append("- " + result.quoteAuthor + " -");
  });

  // $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quoteText + '" ' + quoteAuthor));
}

$(document).ready(function() { 
	getQuote(); 
	$("#getQuote").on("click", getQuote);
	 //  $('#tweetQuote').on('click', function() {
  //   if(!inIframe()) {
  //     openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quoteText + '" ' + quoteAuthor));
  //   }
  // });
});