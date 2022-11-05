'use strict';

require('dotenv').config();
const http = require('http');
const querystring = require('querystring');
const discord = require('discord.js');
const client = new discord.Client();
const utils = require('./utils');
const constants = require('./constants');
const MESSAGES = require('./messages');
const Eris = require('eris');
let bot = new Eris(process.env.DISCORD_BOT_TOKEN);

http.createServer(function(req, res){
  if (req.method == 'POST'){
    var data = "";
    req.on('data', function(chunk){
      data += chunk;
    });
    req.on('end', function(){
      if(!data){
        res.end("No post data");
        return;
      }
      var dataObject = querystring.parse(data);
      console.log("post:" + dataObject.type);
      if(dataObject.type == "wake"){
        console.log("Woke up in post");
        res.end();
        return;
      }
      res.end();
    });
  }
  else if (req.method == 'GET'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Discord Bot is active now\n');
  }
}).listen(3000);

client.on('ready', message =>{
  console.log('Bot準備完了～');
  client.user.setPresence({ game: { name: 'Komiflo' } });
});

client.on('message', message =>{
  if (message.author.id == client.user.id || message.author.bot){
    return;
  }
  
  if(message.isMemberMentioned(client.user) || message.content.match(/ゆきだ|だるま/)){
    let max = 10;
    let min = 1;
    let text = decideMessage(max, min, MESSAGES.MESSAGE_YUKIDARUMA);
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/コマンド/)){
    //let commands = ['ゆき', 'さいころ、サイコロ', '占って', '召喚', 'もも、モモ', 'デビバ、でびば、えむこ',
    //                'だんな、旦那、おっさん', 'ねこ', 'めろん、メロン、MELON', 'アル中', 'くず、かず、カズ',
    //                '死んでください', '通話', '殺す、ころす', 'はじめまして、初めまして',
    //                'おはよう', 'こんにちは', 'こんばんは', 'おやすみ', '子供、こども', '幼い', 'PvgbPYGf8Oo'];
    let commands = 'a';
    let text = '【コマンド一覧】\n';
    commands.forEach(function(item, index, array) {
      console.log(text);
      console.log(item);
      text = text + item + '\n';
    })
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/占って/)){
    let text = "旦那bot蹴ったのに、占ってほしいとか、自己中すぎませんか？";
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/召喚/)){
    for (let i = 0; i < 10; i++){
    //  utils.sendMsg('803964190045634562', '早く出てこいくそロシアン！母親殺すぞ！！！！');
    //  utils.sendMsg('803964190045634562', 'ママもここに住んでんのか？630123 Russia Novosibirsk Novosibirskay obl. 1-per street Entuziastov 10, ap. 8');
      utils.sendMsg(constants.CHAT_CHANNEL_ZATSUDAN, `<@!${constants.ID_ARUTYU}> 韓国人きもい韓国人くさい韓国滅びろ`);
    }
    return;
  }
  
  if (message.content.match(/もも|モモ/)){
    let max = 12;
    let min = 1;
    let messages = [
      'どんだけ男好きなんですか？',
      '早くかずさんにお金返したほうがよくないですか？',
      'いきあたりばったり',
      'ももさん絵すごくうまいですね',
      'なんで自撮りそんなのせるんですか？',
      '週何回かずさんと喧嘩してるんですか？',
      '今日はジムいかないんすか？',
      //もか
      'https://media.discordapp.net/attachments/803964190045634562/841719648948060200/image0.jpg?width=507&height=676',
      //ももかが描いた絵
      'https://media.discordapp.net/attachments/803964190045634562/841721388436029490/image0.jpg?width=507&height=676',
      //だきついてる、こども
      '昔から男好きなんですね。\n' + 'https://media.discordapp.net/attachments/803964190045634562/840962688879296562/S__41435691.jpg?width=507&height=676',
      //ロリ服装
      'https://media.discordapp.net/attachments/803964190045634562/810197404224847892/LINE_P2021211_202401.jpg?width=546&height=676',
      //こどもピース
      'https://media.discordapp.net/attachments/836210211467034637/863063463516962826/S__41435738.jpg?width=444&height=676'
    ];
    let text = decideMessage(max, min, messages);
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/デビバ|でびば|えむこ/)){
    let max = 14;
    let min = 1;
    let messages = [
      'ぼくのこと陰キャって思ってますよね？',
      '今の彼氏とはいつ別れる予定なんですか？',
      '性病コンプリートまであと何種類ですか？',
      'デビバさんといるの緊張しちゃいます。',
      'ちーぎゅうううううううううううう゛う゛う゛う゛う゛う゛う゛',
      'ちょーとみなさんいいですか？青森ナイチンゲールです♪',
      'FC2配信やめないでください。',
      'あのあなたもチー牛だって気づいてます？',
      'メロンさんにたかるのやめてもらっていいですか？',
      '70kg',
      //子供の顔かわるやつ
      'https://media.discordapp.net/attachments/836210211467034637/858306473079603220/image0.gif',
      //ママの口開けた画像
      'https://media.discordapp.net/attachments/803964190045634562/856152916569489408/image0.jpg?width=471&height=675',
      //デブとプリクラ
      'https://media.discordapp.net/attachments/803964190045634562/835155099750891523/image0.jpg?width=563&height=676',
      //FC２配信のアイコン
      'https://media.discordapp.net/attachments/803964190045634562/805719176958050344/image0.jpg?width=455&height=676'
    ];
    let text = decideMessage(max, min, messages);
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/だんな|旦那|おっさん/)){
    let max = 11;
    let min = 1;
    let rnd = Math.floor( Math.random() * (max + 1 - min) ) + min;
    let text;
    switch (rnd){
      case 1:
        text = 'ハラスメントの王';
        break;
      case 2:
        text = 'ぼくに話題出させないでください。';
        utils.sendMsg('860140585489530950', '旦那「ごめんなさい、ぼくが話題出すようにしますね:cry:」');
        break;
      case 3:
        text = 'あなたにいじめられると体調が悪くなります。'
        utils.sendMsg('860140585489530950', '旦那「もうしません:cry:」');
        break;
      case 4:
        text = '旦那さん、発動するとは思ってなかったんですよ';
        break;
      case 5:
        text = 'あの、僕らに支えられて生きてるって自覚ありますか？';
        utils.sendMsg('860140585489530950', '旦那「みなさんに今日も感謝致します:laughing:」');
        break;
      case 6:
        text = 'ガンジャアナルオナニーってどれくらい気持ちいいんですかね。';
        utils.sendMsg('860140585489530950', '旦那「今日もガンジャアナニーしてすみませんでした:laughing:」');
        break;
      case 7:
        text = 'ぼくだってナマポになりたいですよ！！！！！！！！！！！！！！！！！！！！！！！！！！！！';
        utils.sendMsg('860140585489530950', '旦那「ナマポに甘えてごめんなさい:cry:」');
        break;
      case 8:
        text = 'ずっとdiscordにはりついているのに、discordの使い方全然知らないですよね。';
        utils.sendMsg('860140585489530950', '旦那「discordの使い方覚えます:cry:」');
        break;
      case 9:
        text = 'ぼくからサーバーの王とらないでください。';
        utils.sendMsg('860140585489530950', '旦那「独裁者でごめんなさい:cry:」');
        break;
      case 10:
        text = 'http://vippers.jp/mp3/dotup.org2377419.mp3';
        utils.sendMsg('860140585489530950', '旦那「変な曲作ってごめんなさい:cry:」');
        break;
      //シコティッシュ
      case 11:
        text = 'https://media.discordapp.net/attachments/803964190045634562/857993456526163987/6D2FC20E-FCE7-4523-B774-5C63B42FBBE0.jpg?width=507&height=676';
        utils.sendMsg('860140585489530950', '旦那「シコりすぎてごめんなさい:cry:」');
        break;
      // //ゆがんだ顔
      // case 12:
      //   let rnd2 = Math.floor( Math.random() * (2 + 1 - 1) ) + 1;
      //   if (rnd2 === 2) {
      //     text = 'https://media.discordapp.net/attachments/803964190045634562/858046677897314314/image0.png?width=380&height=676';
      //     utils.sendMsg('860140585489530950', '旦那「こんな顔に生まれてごめんなさい:cry:」');
      //   } else {
      //     text = 'あ、よかったですね、もうすこしで顔でるところでした。';
      //   }
      //   break;
      // //ゆがんだ顔gif
      // case 13:
      //   let rnd3 = Math.floor( Math.random() * (2 + 1 - 1) ) + 1;
      //   if (rnd3 === 2) {
      //     text = 'https://media.discordapp.net/attachments/803476290539749386/858270206944870410/20210624_140617.gif';
      //     utils.sendMsg('860140585489530950', '旦那「こんな顔に生まれてごめんなさい:cry:」');
      //   } else {
      //     text = 'あ、よかったですね、もうすこしで顔でるところでした。';
      //   }
      //   break;
    }
    utils.sendMsg(message.channel.id, text );
    return;
  }
  
  if (message.content.match(/ねこ|猫|ぬこ/)){
    let max = 13;
    let min = 1;
    let rnd = Math.floor( Math.random() * (max + 1 - min) ) + min;
    let text;
    switch (rnd){
      case 1:
        text = 'ヤニカス、肺がん死、待ったなし';
        break;
      case 2:
        text = 'いつまで部屋片づけてるんですか？能率どうなってるんですか？';
        break;
      case 3:
        text = 'ほんとはカツ盗んだのあなたですよね？';
        break;
      case 4:
        text = 'ちんちんの味はどうでしたか？';
        break;
      case 5:
        text = 'それって何かから逃げてますか？';
        break;
      case 6:
        text = 'ポケモンから逃げるな';
        break;
      case 7:
        text = 'とうしつ100%';
        break;
      case 8:
        text = '3Mbpsでゲームってやる気ありますか？';
        break;
      case 9:
        text = '自己管理できないからって、サーバーぬけないでください。';
        break;
      case 10:
        text = '職が見つかったからって調子のってないですか？';
        break;
      case 11:
        text = 'Twitterとキャラ全然違くないですか？作ってますか？';
        break;
      case 12:
        text = 'ろくに社会に出てこなかった為スーツが礼服しかないことに職場体験(？)1週間程前に気がつく。\n' +
                '買ったところで採用されずに自棄を起こして爆食いし、サイズが合わなくなったスーツが手元に残るビジョンが見える。\n' +
                'それくらい社会に対して漠然とした不信感を抱いている、大体2万円のせいである。';
        break;
      //ガメラの倉田
      case 13:
        text = 'https://media.discordapp.net/attachments/803964190045634562/846636308389953576/images.jpeg-5.jpg';
        break;
    }
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/めろん|メロン|MELON/)){
    let max = 12;
    let min = 1;
    let rnd = Math.floor( Math.random() * (max + 1 - min) ) + min;
    let text;
    switch (rnd){
      case 1:
        let rnd2 = Math.floor( Math.random() * (5 + 1 - 1) ) + 1;
        utils.sendMsg(message.channel.id, 'さいころ！' + rnd2 + 'の目がでたよ！');
        for (let i = 0; i < rnd2; i++){
          text = '<@!693763564233687060><@!693763564233687060><@!693763564233687060>';
          utils.sendMsg(message.channel.id, text);
        }
        break;
      case 2:
        utils.sendMsg(message.channel.id, '目をつむっててもSekiroクリアできる人がいるのに、何回死んだら満足するんですか？');
        break;
      case 3:
        utils.sendMsg(message.channel.id, '□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□\n' +
                                    '□□□□□□□□□□■□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□\n' +
                                    '□□□■□□□□□■□□□□□■■■■■■■■■■■□□□■■□□□□□□□□□□□■□\n' +
                                    '□□□□■□□□■□□□□□□■□□□□□□□□□■□□□□■■■□□□□□□□□■□□\n' +
                                    '□□□□□■□■□□□□□□□■□□□□□□□□□■□□□□□□■■■□□□□□■□□□\n' +
                                    '□□□□□□■□□□□□□□□■□□□□□□□□□■□□□□□□□□□□□□□■□□□□\n' +
                                    '□□□□□■□■□□□□□□□■□□□□□□□□□■□□□□□□□□□□□□■□□□□□\n' +
                                    '□□□□■□□□■□□□□□□■□□□□□□□□□■□□□□□□□□□□□■□□□□□□\n' +
                                    '□□□■□□□□□■□□□□□■□□□□□□□□□■□□□□□□□□□□■□□□□□□□\n' +
                                    '□□■□□□□□□□□□□□□■■■■■■■■■■■□□□□□□□■■□□□□□□□□□\n' +
                                    '□■□□□□□□□□□□□□□□□□□□□□□□□□□□□□■■□□□□□□□□□□□□\n' +
                                    '□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□'
        );
        break;
      case 4:
        text = '正直、ぼくのこと馬鹿にしてますよね？';
        utils.sendMsg(message.channel.id, text);
        break;
      case 5:
        utils.sendMsg(message.channel.id, 'メロンさんおすすめのエロ漫画はっておきます');
        utils.sendMsg(message.channel.id, 'https://cdn.discordapp.com/attachments/803964190045634562/840972227058204672/320px-Tako_to_ama_retouched.jpg');
        break;
      case 6:
        utils.sendMsg(message.channel.id, 'ぼくもその正義感見習いたいです');
        break;
      case 7:
        utils.sendMsg(message.channel.id, 'プールで溺死しないように気を付けてくださいね＾＾');
        break;
      case 8:
        text= '本当はプールでおしっこしてますよね？';
        utils.sendMsg(message.channel.id, text);
        break;
      case 9:
        text= 'いつになったらセックスした報告聞かせてもらえるんですかね？';
        utils.sendMsg(message.channel.id, text);
        break;
      case 10:
        text= 'ED';
        utils.sendMsg(message.channel.id, text);
        break;
      case 11:
        utils.sendMsg(message.channel.id, 'みのりん卒業おめでとう♪');
        break;
      //偽物の顔画像
      case 12:
        text = 'https://media.discordapp.net/attachments/803964190045634562/851086069436121098/image0.jpg?width=312&height=675';
        utils.sendMsg(message.channel.id, text);
        break;
    }
    return;
  }
  
  if (message.content.match(/アル中/)){
    let max = 10;
    let min = 1;
    let rnd = Math.floor( Math.random() * (max + 1 - min) ) + min;
    let text;
    switch (rnd){
      case 1:
        utils.sendMsg(message.channel.id, 'かんぱ～～～～い♪');
        text = '<:TOZANG:855840334848065617> <:TOZANG:855840334848065617> <:TOZANG:855840334848065617> <:TOZANG:855840334848065617> <:TOZANG:855840334848065617> <:TOZANG:855840334848065617>';
        break;
      case 2:
        text = 'アル中さん、お酒は控えたほうがいいですよ。';
        break;
      case 3:
        text = 'https://www.youtube.com/watch?v=mfkVaJmq2Gw';
        break;
      case 4:
        let now = new Date();
        let future = new Date(2021, 11, 30);
        let diff = (future.getTime() - now.getTime()) / 1000;
        let days = Math.floor(diff / (24 * 60 * 60));
        text = '入隊まで残り' + days + '日♪';
        break;
      case 5:
        text = '大企業のICカード手に入れたからって、そこの従業員みたいなフリするのやめてもらえますか？';
        break;
      case 6:
        text = 'アル中さんはサムソンの社員でもないし、SKハイニックスの社員でもないですよね？';
        break;
      case 7:
        text = '軍隊でどれだけ矯正されるか楽しみです♪';
        break;
      //顔
      case 8:
        text = 'https://media.discordapp.net/attachments/836210211467034637/858130231888969738/image0-186.jpg?width=901&height=676';
        break;
      //コラ画像
      case 9:
        text = 'https://media.discordapp.net/attachments/803964190045634562/857994080368984106/processed_14.jpeg?width=1202&height=676';
        break;
      //バンジージャンプ
      case 10:
        text = 'https://media.discordapp.net/attachments/803964190045634562/858350134877093958/image0.jpg?width=676&height=676';
        break;
    }
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/くず|かず|カズ/)){
    let max = 12;
    let min = 1;
    let messages = [
      'https://media.discordapp.net/attachments/995214973242454016/1002538239980208219/image0-1-1.jpg?width=530&height=676',
      'APEXから逃げるんですか？',
      'ゲーム誘うのやめてもらえますか？',
      'なんかよくサーバー抜けられますけど、どうしたんですか？ももさんと喧嘩したんですか？',
      'VALORANTのランクいつになったらあがるんですか？',
      '何回まで浮気許すんですか？',
      '今日もイキリチャットごくろうさまです。',
      'ゲームハラスメントやめてください。',
      'タルコフやるのと、ももさんと話するのどっちが緊張感ありますか？',
      '神戸市中央区港島中町３－２－１',
      //おもしろいことやれ！-
      'https://media.discordapp.net/attachments/836210211467034637/858058651293319236/S__17317891.jpg',
      //ミスタービーン
      'https://media.discordapp.net/attachments/803964190045634562/837678129299324948/84296333.jpeg'
    ];
    let text = decideMessage(max, min, messages);
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/くらはら|藏原|kurahara/)){
    let max = 9;
    let min = 1;
    let messages = [
      '忍たま乱太郎で週何回オナニーしてるんですか？',
      'このサーバーいつになったらカエルさん取り戻せますか？',
      'ショタコン',
      'イラスト友人価格で500円で描いてもらえませんか？',
      '今日もお仕事サボリ中ですか？',
      'このサーバーに依存してませんか？',
      '寝ます詐欺やめてもらえますか？',
      'ゼンリーハラスメントやめてもらえませんか？',
      'ゲームしてるとき性格変わってませんか？'
    ];
    let text = decideMessage(max, min, messages);
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/殺す|ころす/)){
    let max = 3;
    let min = 1;
    let rnd = Math.floor( Math.random() * (max + 1 - min) ) + min;
    let text;
    switch (rnd){
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
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/はじめまして|初めまして/)){
    let max = 3;
    let min = 1;
    let rnd = Math.floor( Math.random() * (max + 1 - min) ) + min;
    let text;
    switch (rnd){
      case 1:
        text = '初めまして、通話にいっぱいきてほしいです。';
        break;
      case 2:
        text = 'Welcome to Underground';
        break;
      case 3:
        text = 'よろしくな。';
        break;
    }
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/おはよう/)){
    let max = 4;
    let min = 1;
    let rnd = Math.floor( Math.random() * (max + 1 - min) ) + min;
    let text;
    switch (rnd){
      case 1:
        text = 'おはよーーーーーーーーーーーーーーーー！！！！！！！！！！！！！';
        break;
      case 2:
        text = '今日もいい日になるといいですね。';
        break;
      case 3:
        text = `今日も朝からDiscordです＾＾？\nお勤めご苦労様です＾＾\n僕は先に上で待ってますね＾＾`;
        break;
      case 4:
        text = '早起きは三文の得';
        break;
    }
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/こんにちは/)){
    let max = 3;
    let min = 1;
    let rnd = Math.floor( Math.random() * (max + 1 - min) ) + min;
    let text;
    switch (rnd){
      case 1:
        text = 'はい、こんにちはです。';
        break;
      case 2:
        text = 'はい、今日もいい天気ですね';
        break;
      case 3:
        text = 'おなか空きましたね';
        break;
    }
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/こんばんは/)){
    let max = 4;
    let min = 1;
    let messages = [
      'はい、こんばんはです。',
      'こんばんは、通話きてください。',
      '今日も生きる意味探してます',
      '挨拶するんだったら通話あがってもらっていいですか？＾＾'
    ];
    let text = decideMessage(max, min, messages);
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/おやすみ/)){
    let max = 4;
    let min = 1;
    let messages = [
      'はい、おやすみなさいです。',
      'ぐっない',
      'それがお前の選択か・・・・・・',
      '永遠に眠れ'
    ];
    let text = decideMessage(max, min, messages);
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/discord.gg/)){
    let max = 3;
    let min = 1;
    let messages = [
      'ゴミサーバー宣伝しないでもらえますか？',
      '次宣伝したらBANですよ',
      'そんなところより、このサーバー盛り上げてくださいよ'
    ];
    let text = decideMessage(max, min, messages);
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/はくさ|でくさ|草|ｗ|wwww/)){
    let max = 3;
    let min = 1;
    let messages = [
      '笑ってられるのは今のうちですよ。',
      '楽しそうで何よりです',
      '僕も笑えるようになりたいです'
    ];
    let text = decideMessage(max, min, messages);
    utils.sendMsg(message.channel.id, text);
    return;
  }
  
  if (message.content.match(/つまらん|つまんな|おもんな/)){
    utils.sendMsg(message.channel.id, 'お前もな');
    return;
  }
  
  if (message.content.match(/!rank|!levels/)){
    utils.sendMsg(message.channel.id, '順位とか気にしちゃってるんですか？');
    return;
  }
  
  if (message.content.match(/ふろ|風呂/)){
    utils.sendMsg(message.channel.id, 'お風呂きもちいー:hugging:');
    return;
  }
  
});

bot.on("voiceChannelJoin", (member, newChannel) => {
  // 入室処理
  let ch = newChannel.guild.defaultChannel;
  let max = 3;
  let min = 1;
  let rnd = Math.floor( Math.random() * (max + 1 - min) ) + min;
  let text;
  
  let name;
  if (member.nick === null){
    name = member.username;
  } else {
    name = member.nick;
  }
  
  switch (rnd){
    case 1:
      text = '<@!875570551232548896>　誰かボイスチャットにきましたよ！';
      break;
    case 2:
      text = '新しく来た人、話題ふってもらっていいですか？';
      break;
    case 3:
      text = '<@!422006616125210634>　誰かボイスチャットにきましたよ！';
      break;
  }
  bot.createMessage(constants.CHAT_CHANNEL_ZATSUDAN, text);
});

bot.on("voiceChannelLeave", (member, oldChannel) => {
  // 退室処理
  let ch = oldChannel.guild.defaultChannel;
  let max = 2;
  let min = 1;
  let rnd = Math.floor( Math.random() * (max + 1 - min) ) + min;
  let text;
  
  let name;
  if (member.nick === null){
    name = member.username;
  } else {
    name = member.nick;
  }
  
  switch (rnd){
    case 1:
      text = '落ちるの早くないですか？';
      break;
    case 2:
      text = 'あ、おつかれさまでした。';
      break;
  }
  bot.createMessage(constants.CHAT_CHANNEL_ZATSUDAN, text);
});

bot.on("voiceChannelSwitch", (member, newChannel, oldChannel) => {
  bot.createMessage(constants.CHAT_CHANNEL_ZATSUDAN, 'なにチャンネル移動しようとしてるんですか？まさか寝ようとしてますか？');
});

// Discord に接続します。 
bot.connect(); 

if(process.env.DISCORD_BOT_TOKEN == undefined){
 console.log('DISCORD_BOT_TOKENが設定されていません。');
 process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN );

function sendReply(message, text){
  message.reply(text)
    .then(console.log("リプライ送信: " + text))
    .catch(console.error);
}
