const loadTweets = function() {
  $.ajax('/tweets', { method: 'GET' })
    .then(function (data) {
      console.log('Success: ', data);
      renderTweets(data);
    });
};

const renderTweets = function(tweets) {
  $(".submitted-tweet").empty()
  for (let tweet of tweets) {
    $(".submitted-tweet").append(createTweetElement(tweet))
  }
};

const createTweetElement = function(tweetObjects) {
  const time = new Date(tweetObjects.created_at)
  const currentTime = Date.now()
  const dayDif = Math.floor((currentTime - time) / 1000 / 60 / 60 / 24)
  const tweet = `<article>
  <header class="tweet-header">
  <div class="tweet-user-profile">
  <img src = "${tweetObjects.user.avatars}" </img>
    <p class="username"> ${tweetObjects.user.name}</p>
  </div>
  <span class="user-handle">${tweetObjects.user.handle}</span>
  </header>
<p class="composed-tweet-message">${escape(tweetObjects.content.text)}</p>
<footer class="tweet-footer">
<p class="date-posted">${dayDif} Days Ago</p>
<div class="composed-tweeter-icons">
<i class="fas fa-flag"></i>
<i class="fas fa-retweet"></i>
<i class="fas fa-heart"></i>
</div>
</footer>
</article>`
  return tweet;
}
$(document).ready(function () {
  loadTweets();
  $("form").submit(function (event) {
    event.preventDefault() 
    if($("#tweet-text").val().length > 140) {
    let message = `<i class="fas fa-biohazard"></i>Too Many Characters<i class="fas fa-biohazard"></i>`
      $(".error").html(message) 
      $(".error").css('visibility', 'visible')
    } else {
      $(".error").text('') 
      $(".error").css('visibility', 'hidden')
    const data = $("form").serialize()
    $.post("/tweets", data, function(res){
      console.log(res);
      loadTweets() 
    })
  }
  })
});
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

