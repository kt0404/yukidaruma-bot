'use strict';

function sendMsg(channelId, text, option={}){
  client.channels.get(channelId).send(text, option)
    .then(console.log("メッセージ送信: " + text + JSON.stringify(option)))
    .catch(console.error);
}

function decideMessage(max, min, messages) {
  let num = [];
  for(let i = min; i <= max; i++) {
    num.push(i);
  }
  let rnd = Math.floor( Math.random() * (num.length + 1 - 1) );
  let text = messages[num[rnd] - 1];
  return text;
}