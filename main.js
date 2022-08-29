// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const like = document.querySelectorAll('.like-glyph')
const error =  document.getElementById('modal')

for(let item of like){
  item.addEventListener('click', () => {
    mimicServerCall('http://mimicServer.example.com')
    .then(() => {
      if(item.innerText === EMPTY_HEART){
        item.innerText = FULL_HEART;
        item.className = "activated-heart";
      } else {
        item.innerText = EMPTY_HEART;
      }
    })
    .catch((message) => {
      errorText.className = ''
      errorText.innerText = message
      setTimeout(() => errorText.className = 'hidden', 3000);
    })
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
