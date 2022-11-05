'use strict';

function decideMessage(max, min, messages) {
  let num = [];
  for(let i = min; i <= max; i++) {
    num.push(i);
  }
  let rnd = Math.floor( Math.random() * (num.length + 1 - 1) );
  let text = messages[num[rnd] - 1];
  return text;
}

module.exports = {
  decideMessage
};