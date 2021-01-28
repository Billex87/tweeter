$(document).ready(function() {
  $('#tweet-text').on('input', function(event) {
  const charsLeft = (140 - $(this).val().length);
  const outputTag = $(this).siblings('.count').children(".counter");
  outputTag.text(charsLeft);
  if (charsLeft < 0) { 
    alert("Too Many Characters")
    outputTag.addClass("redChars");
  } else {outputTag.removeClass("redChars")
  };
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
})
});
