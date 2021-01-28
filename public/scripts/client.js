// Test / driver code (temporary). Eventually will get this from the server.
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd"
//     },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]
const loadTweets = function() {
  $.ajax('/tweets', { method: 'GET' })
    .then(function (sedata) {
      console.log('Success: ', sedata);
      // $button.replaceWith(data);
    });
};
loadTweets();

const renderTweets = function(tweets) {
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
<p class="composed-tweet-message">${tweetObjects.content.text}t</p>
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
  renderTweets(data);
})

