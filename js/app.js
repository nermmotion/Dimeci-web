var chatButton = document.querySelector('.chat-widget--button');
var chatBubble = document.querySelector('.chat-widget--bubble');

chatBubble.classList.add('-hide');

setTimeout(function() {

chatButton.addEventListener('click', function() {
  void chatBubble.offsetWidth;
  chatBubble.classList.toggle('-hide');
}, false);
  }, 4000);