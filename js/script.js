

var message={};

message.morse = "";
message.rosetta= {
    'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
    'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
    'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
    'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
    'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
    'y': '-.--',  'z': '--..',  ' ': '/',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----',
}
message.toMorse=function(){
  var self = this;

  var morseMsg = this.msg.split("").map(
        function(e){
          return self.rosetta[e.toLowerCase()];
      })
      .join(" ");
      console.log(morseMsg);
      return morseMsg;

  }
window.onload = function(){
  message.msg = prompt("what would you like to convert to morse?");

  var display = document.getElementById("display").innerHTML = message.toMorse();
}


var updateCursor = function(){

  var heading = document.getElementById("heading").innerHTML;
  headArr = heading.split("");
  if(blink){
    headArr.push("|");
  }else{
    headArr.pop();
  }


  document.getElementById("heading").innerHTML = headArr.join("");
  blink = !blink;
}
// updateCursor();
var blink = true;
setInterval(updateCursor, 700);
