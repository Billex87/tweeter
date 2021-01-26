$(document).ready(function() {
  $('#tweet-text').on('input', function(event) {
  const charsLeft = (140 - $(this).val().length);
  $(this).siblings('.count').children(".counter").text(charsLeft);
  })
});




