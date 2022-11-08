'use strict';

const http = require('http');
const querystring = require('querystring');
const discord = require('discord.js');
const client = new discord.Client();
const Utils = require('./utils');
const Constants = require('./constants');
const Messages = require('./messages');
const Eris = require('eris');
let bot = new Eris(process.env.DISCORD_BOT_TOKEN);

http.createServer(function (req, res) {
  if (req.method == 'POST') {
    var data = "";
    req.on('data', function (chunk) {
      data += chunk;
    });
    req.on('end', function () {
      if (!data) {
        res.end("No post data");
        return;
      }
      var dataObject = querystring.parse(data);
      console.log("post:" + dataObject.type);
      if (dataObject.type == "wake") {
        console.log("Woke up in post");
        res.end();
        return;
      }
      res.end();
    });
  }
  else if (req.method == 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Discord Bot is active now\n');
  }
}).listen(3000);

client.on('ready', message => {
  console.log('Bot準備完了～');
  client.user.setPresence({ game: { name: 'Komiflo' } });
});

client.on('message', message => {
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }

  // GitHub
  if (message.content.match(/github|Github|GitHub/)) {
    sendMsg(message.channel.id, "https://github.com/kt0404/yukidaruma-bot");
    return;
  }

  // 占い
  if (message.content.match(/占って/)) {
    let text = "旦那bot蹴ったのに、占ってほしいとか、自己中すぎませんか？";
    sendMsg(message.channel.id, text);
    return;
  }

  // 召喚
  if (message.content.match(/召喚/)) {
    for (let i = 0; i < 10; i++) {
      //  sendMsg('803964190045634562', '早く出てこいくそロシアン！母親殺すぞ！！！！');
      //  sendMsg('803964190045634562', 'ママもここに住んでんのか？630123 Russia Novosibirsk Novosibirskay obl. 1-per street Entuziastov 10, ap. 8');
      sendMsg(Constants.CHAT_CHANNEL_ZATSUDAN, `<@!${Constants.ID_ARUTYU}> 韓国人きもい韓国人くさい韓国滅びろ`);
    }
    return;
  }

  //おみくじ
  if (message.content.match(/おみくじ/)) {
    let imageFlag = Constants.IMAGE_ON;
    let max = Messages.MESSAGE_OMIKUJI.length;
    let min = 1;

    sendMsg(message.channel.id, Utils.decideMessage(max, min, Messages.MESSAGE_OMIKUJI));
    return;
  }

  // ゆきだるまさん
  if (message.isMemberMentioned(client.user) || message.content.match(/ゆきだ|だるま/)) {
    let imageFlag = Constants.IMAGE_ON;
    let max = Messages.MESSAGE_YUKIDARUMA.length;
    let min = 1;

    if (imageFlag === Constants.IMAGE_ON) {
      max = Messages.MESSAGE_YUKIDARUMA.length + Messages.MESSAGE_YUKIDARUMA_IMAGE.length;
      let text = [...Messages.MESSAGE_YUKIDARUMA];
      for (let i = 0; i < Messages.MESSAGE_YUKIDARUMA_IMAGE.length; i++) {
        text.push(Messages.MESSAGE_YUKIDARUMA_IMAGE[i]);
      }
      sendMsg(message.channel.id, Utils.decideMessage(max, min, text));
      return;
    }

    sendMsg(message.channel.id, Utils.decideMessage(max, min, Messages.MESSAGE_YUKIDARUMA));
    return;
  }

  // ももさん
  if (message.content.match(/もも|モモ/)) {
    let imageFlag = Constants.IMAGE_OFF;
    let max = Messages.MESSAGE_MOMO.length;
    let min = 1;

    if (imageFlag === Constants.IMAGE_ON) {
      max = Messages.MESSAGE_MOMO.length + Messages.MESSAGE_MOMO_IMAGE.length;
      let text = [...Messages.MESSAGE_MOMO];
      for (let i = 0; i < Messages.MESSAGE_MOMO_IMAGE.length; i++) {
        text.push(Messages.MESSAGE_MOMO_IMAGE[i]);
      }
      sendMsg(message.channel.id, Utils.decideMessage(max, min, text));
      return;
    }

    sendMsg(message.channel.id, Utils.decideMessage(max, min, Messages.MESSAGE_MOMO));
    return;
  }

  // デビバさん
  if (message.content.match(/デビバ|でびば|えむこ/)) {
    let imageFlag = Constants.IMAGE_ON;
    let max = Messages.MESSAGE_DEVIBA.length;
    let min = 1;

    if (imageFlag === Constants.IMAGE_ON) {
      max = Messages.MESSAGE_DEVIBA.length + Messages.MESSAGE_DEVIBA_IMAGE.length;
      let text = [...Messages.MESSAGE_DEVIBA];
      for (let i = 0; i < Messages.MESSAGE_DEVIBA_IMAGE.length; i++) {
        text.push(Messages.MESSAGE_DEVIBA_IMAGE[i]);
      }
      sendMsg(message.channel.id, Utils.decideMessage(max, min, text));
      return;
    }

    sendMsg(message.channel.id, Utils.decideMessage(max, min, Messages.MESSAGE_DEVIBA));
    return;
  }

  // 旦那さん
  if (message.content.match(/だんな|旦那|おっさん/)) {
    let max = Messages.MESSAGE_DANNA_1.length;
    let min = 1;
    sendMsg(message.channel.id, Utils.decideMessage(max, min, Messages.MESSAGE_DANNA_1));
    sendMsg(Constants.CHAT_CHANNEL_SONOTA, Utils.decideMessage(max, min, Messages.MESSAGE_DANNA_2));
    return;
  }

  // ねこさん
  if (message.content.match(/ねこ|猫|ぬこ/)) {
    let imageFlag = Constants.IMAGE_ON;
    let max = Messages.MESSAGE_NEKOSUTEMI.length;
    let min = 1;

    if (imageFlag === Constants.IMAGE_ON) {
      max = Messages.MESSAGE_NEKOSUTEMI.length + Messages.MESSAGE_NEKOSUTEMI_IMAGE.length;
      let text = [...Messages.MESSAGE_NEKOSUTEMI];
      for (let i = 0; i < Messages.MESSAGE_NEKOSUTEMI_IMAGE.length; i++) {
        text.push(Messages.MESSAGE_NEKOSUTEMI_IMAGE[i]);
      }
      sendMsg(message.channel.id, Utils.decideMessage(max, min, text));
      return;
    }

    sendMsg(message.channel.id, Utils.decideMessage(max, min, Messages.MESSAGE_NEKOSUTEMI));
    return;
  }

  // メロンさん
  if (message.content.match(/めろん|メロン|MELON/)) {
    let imageFlag = Constants.IMAGE_ON;
    let max = Messages.MESSAGE_MELON.length;
    let min = 1;
    let text = [...Messages.MESSAGE_MELON];

    if (imageFlag === Constants.IMAGE_ON) {
      max = Messages.MESSAGE_MELON.length + Messages.MESSAGE_MELON_IMAGE.length;
      for (let i = 0; i < Messages.MESSAGE_MELON_IMAGE.length; i++) {
        text.push(Messages.MESSAGE_MELON_IMAGE[i]);
      }

      let tmp = Utils.decideMessage(max, min, text);
      if (tmp === 'さいころ') {
        let rnd = Math.floor(Math.random() * (5 + 1 - 1)) + 1;
        sendMsg(message.channel.id, `さいころ！${rnd}の目がでたよ！`);
        for (let i = 0; i < rnd; i++) {
          sendMsg(message.channel.id, `<@!${Constants.ID_MELON}><@!${Constants.ID_MELON}><@!${Constants.ID_MELON}>`);
        }
        return;
      }

      sendMsg(message.channel.id, tmp);
      return;
    }

    let tmp = Utils.decideMessage(max, min, Messages.MESSAGE_MELON);
    if (tmp === 'さいころ') {
      let rnd = Math.floor(Math.random() * (5 + 1 - 1)) + 1;
      sendMsg(message.channel.id, `さいころ！${rnd}の目がでたよ！`);
      for (let i = 0; i < rnd; i++) {
        sendMsg(message.channel.id, `<@!${Constants.ID_MELON}><@!${Constants.ID_MELON}><@!${Constants.ID_MELON}>`);
      }
      return;
    }

    sendMsg(message.channel.id, tmp);
    return;
  }

  // kuraharaさん
  if (message.content.match(/くらはら|藏原|kurahara/)) {
    let max = Messages.MESSAGE_KURAHARA.length;
    let min = 1;
    sendMsg(message.channel.id, Utils.decideMessage(max, min, Messages.MESSAGE_KURAHARA));
    return;
  }

  // アル中
  if (message.content.match(/アル中/)) {
    let imageFlag = Constants.IMAGE_ON;
    let max = Messages.MESSAGE_ARUTYU.length;
    let min = 1;
    let text = [...Messages.MESSAGE_ARUTYU];

    if (imageFlag === Constants.IMAGE_ON) {
      max = Messages.MESSAGE_ARUTYU.length + Messages.MESSAGE_ARUTYU_IMAGE.length;
      for (let i = 0; i < Messages.MESSAGE_ARUTYU_IMAGE.length; i++) {
        text.push(Messages.MESSAGE_ARUTYU_IMAGE[i]);
      }

      let tmp = Utils.decideMessage(max, min, text);
      if (tmp === '入隊まで残り日♪') {
        let now = new Date();
        let future = new Date(2021, 11, 30);
        let diff = (future.getTime() - now.getTime()) / 1000;
        let days = Math.floor(diff / (24 * 60 * 60));
        tmp = `入隊まで残り${days}日♪`;
      }

      sendMsg(message.channel.id, tmp);
      return;
    }

    let tmp = Utils.decideMessage(max, min, Messages.MESSAGE_ARUTYU);
    if (tmp === '入隊まで残り日♪') {
      let now = new Date();
      let future = new Date(2021, 11, 30);
      let diff = (future.getTime() - now.getTime()) / 1000;
      let days = Math.floor(diff / (24 * 60 * 60));
      tmp = `入隊まで残り${days}日♪`;
    }

    sendMsg(message.channel.id, tmp);
    return;
  }

  // kuzu
  if (message.content.match(/くず|かず|カズ/)) {
    let imageFlag = Constants.IMAGE_ON;
    let max = Messages.MESSAGE_KUZU.length;
    let min = 1;

    if (imageFlag === Constants.IMAGE_ON) {
      max = Messages.MESSAGE_KUZU.length + Messages.MESSAGE_KUZU_IMAGE.length;
      let text = [...Messages.MESSAGE_KUZU];
      for (let i = 0; i < Messages.MESSAGE_KUZU_IMAGE.length; i++) {
        text.push(Messages.MESSAGE_KUZU_IMAGE[i]);
      }
      sendMsg(message.channel.id, Utils.decideMessage(max, min, text));
      return;
    }

    sendMsg(message.channel.id, Utils.decideMessage(max, min, Messages.MESSAGE_KUZU));
    return;
  }

  //マリス
  if (message.content.match(/マリス|maris/i)) {
    let max = Messages.MESSAGE_MARIS.length;
    let min = 1;
    sendMsg(message.channel.id, Utils.decideMessage(max, min, Messages.MESSAGE_MARIS));
    return;
  }


  if (message.content.match(/殺す|ころす/)) {
    let max = 3;
    let min = 1;
    let rnd = Math.floor(Math.random() * (max + 1 - min)) + min;
    let text;
    switch (rnd) {
      case 1:
        text = '仲良しの森ですよ？仲良くしてください。';
        break;
      case 2:
        text = 'https://media.discordapp.net/attachments/836210211467034637/881885161699033169/S__14630916.jpg';
        break;
      case 3:
        text = 'あの、ぼくに殺されたいんですか？';
        break;
    }
    sendMsg(message.channel.id, text);
    return;
  }

  if (message.content.match(/はじめまして|初めまして/)) {
    let max = Messages.MESSAGE_HAJIMEMASITE.length;
    let min = 1;
    sendMsg(message.channel.id, Utils.decideMessage(max, min, Messages.MESSAGE_HAJIMEMASITE));
    return;
  }

  if (message.content.match(/おはよう/)) {
    let max = Messages.MESSAGE_OHAYOU.length;
    let min = 1;
    sendMsg(message.channel.id, Utils.decideMessage(max, min, Messages.MESSAGE_OHAYOU));
    return;
  }

  if (message.content.match(/こんにちは/)) {
    let max = Messages.MESSAGE_KONNITIHA.length;
    let min = 1;
    sendMsg(message.channel.id, Utils.decideMessage(max, min, Messages.MESSAGE_KONNITIHA));
    return;
  }

  if (message.content.match(/こんばんは/)) {
    let max = Messages.MESSAGE_KONBANHA.length;
    let min = 1;
    sendMsg(message.channel.id, Utils.decideMessage(max, min, Messages.MESSAGE_KONBANHA));
    return;
  }

  if (message.content.match(/おやすみ/)) {
    let max = Messages.MESSAGE_OYASUMI.length;
    let min = 1;
    sendMsg(message.channel.id, Utils.decideMessage(max, min, Messages.MESSAGE_OYASUMI));
    return;
  }

  if (message.content.match(/discord.gg/)) {
    let max = Messages.MESSAGE_SENDEN.length;
    let min = 1;
    sendMsg(message.channel.id, Utils.decideMessage(max, min, Messages.MESSAGE_SENDEN));
    return;
  }

  if (message.content.match(/はくさ|でくさ|草|ｗ|wwww/)) {
    let max = 3;
    let min = 1;
    let messages = [
      '笑ってられるのは今のうちですよ。',
      '楽しそうで何よりです',
      '僕も笑えるようになりたいです'
    ];
    let text = Utils.decideMessage(max, min, messages);
    sendMsg(message.channel.id, text);
    return;
  }

  if (message.content.match(/つまらん|つまんな|おもんな/)) {
    sendMsg(message.channel.id, 'お前もな');
    return;
  }

  if (message.content.match(/!rank|!levels/)) {
    sendMsg(message.channel.id, '順位とか気にしちゃってるんですか？');
    return;
  }

  if (message.content.match(/ふろ|風呂/)) {
    sendMsg(message.channel.id, 'お風呂きもちいー:hugging:');
    for (let i = 0; i < 10; i++) {
      let rnd = Math.floor(Math.random() * 12) + 1;
      if (rnd === 1) {
        sendMsg(message.channel.id, 'お風呂きもちー:hugging:');
      } else if (rnd === 2) {
        sendMsg(message.channel.id, 'ラーメンきもちー:hugging:');
      } else if (rnd === 3) {
        sendMsg(message.channel.id, 'お風呂つめたいー:sob:');
      } else if (rnd <= 7) {
        sendMsg(message.channel.id, 'お風呂きもちいー:hugging:');
      } else {
        break;
      }
    }
    return;
  }

  if (message.content.match(/プール/)) {
    sendMsg(message.channel.id, 'プールきもちいー:hugging:');
    return;
  }

  if (message.content.match(/ニャオハ/)) {
    sendMsg(message.channel.id, 'にゃおは～:tired_face: :point_right:');
    return;
  }

  if (message.content.match(/ジム/)) {
    sendMsg(message.channel.id, '今日は～～～～！？');
    let rnd = Math.floor(Math.random() * 4) + 1;
    if (rnd === 1) {
      sendMsg(message.channel.id, '\nラーメンの日:hugging:');
    } else {
      sendMsg(message.channel.id, '\nジムの日:frowning2:');
    }
    return;
  }

  if (message.content.match(/ラーメン/)) {
    if (message.author.id === Constants.ID_MELON) {
      sendMsg(message.channel.id, 'ジム行かなくていいんですか？');
    } else {
      sendMsg(message.channel.id, 'ラーメン画像まだですか？');
    }
    return;
  }
});

bot.on("voiceChannelJoin", (member, newChannel) => {
  // 入室処理
  let ch = newChannel.guild.defaultChannel;
  let max = 3;
  let min = 1;

  let name;
  if (member.nick === null) {
    name = member.username;
  } else {
    name = member.nick;
  }

  bot.createMessage(Constants.CHAT_CHANNEL_ZATSUDAN, Utils.decideMessage(max, min, Messages.MESSAGE_VOICE_CHANNEL_JOIN));
});

bot.on("voiceChannelLeave", (member, oldChannel) => {
  // 退室処理
  let ch = oldChannel.guild.defaultChannel;
  let max = 2;
  let min = 1;

  let name;
  if (member.nick === null) {
    name = member.username;
  } else {
    name = member.nick;
  }

  bot.createMessage(Constants.CHAT_CHANNEL_ZATSUDAN, Utils.decideMessage(max, min, Messages.MESSAGE_VOICE_CHANNEL_LEAVE));
});

bot.on("voiceChannelSwitch", (member, newChannel, oldChannel) => {
  bot.createMessage(Constants.CHAT_CHANNEL_ZATSUDAN, 'なにチャンネル移動しようとしてるんですか？まさか寝ようとしてますか？');
});

// Discord に接続します。 
bot.connect();

if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.log('DISCORD_BOT_TOKENが設定されていません。');
  process.exit(0);
}

client.login(process.env.DISCORD_BOT_TOKEN);

function sendReply(message, text) {
  message.reply(text)
    .then(console.log("リプライ送信: " + text))
    .catch(console.error);
}

function sendMsg(channelId, text, option = {}) {
  client.channels.get(channelId).send(text, option)
    .then(console.log("メッセージ送信: " + text + JSON.stringify(option)))
    .catch(console.error);
}
