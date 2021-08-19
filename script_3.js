const prompt = require('prompt-sync')();

let choice = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function Pyramid(choice) {
  var output = '';
  for (var i = 1; i <= choice; i++) {
        for(let j = 1; j <= choice - i; j++){
        output += ' ';
      }

      for (var j = 1; j <= i; j++) {

        output += "#"
      }
      console.log(output);
      output = '';
  }
}

Pyramid(choice);