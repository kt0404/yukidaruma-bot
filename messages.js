'use strict';
const Constants = require('./constants');

// kuzu
const MESSAGE_KUZU = [
  'APEXから逃げるんですか？',
  'ゲーム誘うのやめてもらえますか？',
  'なんかよくサーバー抜けられますけど、どうしたんですか？ももさんと喧嘩したんですか？',
  'VALORANTのランクいつになったらあがるんですか？',
  '何回まで浮気許すんですか？',
  '今日もイキリチャットごくろうさまです。',
  'ゲームハラスメントやめてください。',
  'タルコフやるのと、ももさんと話するのどっちが緊張感ありますか？',
  '神戸市中央区港島中町３－２－１',
  'ひとまるテスト:hugging:'
];

const MESSAGE_KUZU_IMAGE = [
  // ジミー大西
  'https://media.discordapp.net/attachments/995214973242454016/1002538239980208219/image0-1-1.jpg?width=530&height=676',
  // おもしろいことやれ！-
  'https://media.discordapp.net/attachments/836210211467034637/858058651293319236/S__17317891.jpg',
  // ミスタービーン
  'https://media.discordapp.net/attachments/803964190045634562/837678129299324948/84296333.jpeg'
];

// ゆきだるまさん
const MESSAGE_YUKIDARUMA = [
  '死にたいです',
  'discordでオンライン状態隠してごめんなさい:sob: :sob:',
  'あ、サーバーの王おろされちゃいました',
  '静岡茶飲みます？',
  'たまにタメ語使ってるんですけど、どう思います？',
  'Gpro買ったくせにゲームやらないんですか？',
  'くるしいくるしい',
  'ぼくとモンハンしてください:sob: :sob:',
  'Komiflo契約しません？'
];

const MESSAGE_YUKIDARUMA_IMAGE = [
  //旦那さんが描いた絵
  'https://media.discordapp.net/attachments/836210211467034637/858498853069127700/7.jpg'
];

// ねこさん
const MESSAGE_NEKOSUTEMI = [
  'ヤニカス、肺がん死、待ったなし',
  'いつまで部屋片づけてるんですか？能率どうなってるんですか？',
  'ほんとはカツ盗んだのあなたですよね？',
  'ちんちんの味はどうでしたか？',
  'それって何かから逃げてますか？',
  'ポケモンから逃げるな',
  'とうしつ100%',
  '3Mbpsでゲームってやる気ありますか？',
  '自己管理できないからって、サーバーぬけないでください。',
  '職が見つかったからって調子のってないですか？',
  'Twitterとキャラ全然違くないですか？作ってますか？',
  'ろくに社会に出てこなかった為スーツが礼服しかないことに職場体験(？)1週間程前に気がつく。\n' +
    '買ったところで採用されずに自棄を起こして爆食いし、サイズが合わなくなったスーツが手元に残るビジョンが見える。\n' +
    'それくらい社会に対して漠然とした不信感を抱いている、大体2万円のせいである。'
];

const MESSAGE_NEKOSUTEMI_IMAGE = [
  'https://media.discordapp.net/attachments/803964190045634562/846636308389953576/images.jpeg-5.jpg'
];

// メロンさん
const MESSAGE_MELON = [
  'さいころ',
  '目をつむっててもSekiroクリアできる人がいるのに、何回死んだら満足するんですか？',
  '□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□\n' +
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
    '□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□',
  '正直、ぼくのこと馬鹿にしてますよね？',
  'メロンさんおすすめのエロ漫画はっておきます\n' + 'https://cdn.discordapp.com/attachments/803964190045634562/840972227058204672/320px-Tako_to_ama_retouched.jpg',
  'ぼくもその正義感見習いたいです',
  'プールで溺死しないように気を付けてくださいね＾＾',
  '本当はプールでおしっこしてますよね？',
  'いつになったらセックスした報告聞かせてもらえるんですかね？',
  'ED',
  'みのりん卒業おめでとう♪'
];

const MESSAGE_MELON_IMAGE = [
  // 偽物の顔画像
  'https://media.discordapp.net/attachments/803964190045634562/851086069436121098/image0.jpg?width=312&height=675'
];

const MESSAGE_KURAHARA = [
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

const MESSAGE_KURAHARA_IMAGE = [];

// デビバさん
const MESSAGE_DEVIBA = [
  'ぼくのこと陰キャって思ってますよね？',
  '今の彼氏とはいつ別れる予定なんですか？',
  '性病コンプリートまであと何種類ですか？',
  'デビバさんといるの緊張しちゃいます。',
  'ちーぎゅうううううううううううう゛う゛う゛う゛う゛う゛う゛',
  'ちょーとみなさんいいですか？青森ナイチンゲールです♪',
  'FC2配信やめないでください。',
  'あのあなたもチー牛だって気づいてます？',
  'メロンさんにたかるのやめてもらっていいですか？',
  '70kg'
];

const MESSAGE_DEVIBA_IMAGE = [
  //子供の顔かわるやつ
  'https://media.discordapp.net/attachments/836210211467034637/858306473079603220/image0.gif',
  //ママの口開けた画像
  'https://media.discordapp.net/attachments/803964190045634562/856152916569489408/image0.jpg?width=471&height=675',
  //デブとプリクラ
  'https://media.discordapp.net/attachments/803964190045634562/835155099750891523/image0.jpg?width=563&height=676',
  //FC２配信のアイコン
  'https://media.discordapp.net/attachments/803964190045634562/805719176958050344/image0.jpg?width=455&height=676'
];

// ももさん
const MESSAGE_MOMO = [
  'どんだけ男好きなんですか？',
  '早くかずさんにお金返したほうがよくないですか？',
  'いきあたりばったり',
  'ももさん絵すごくうまいですね',
  'なんで自撮りそんなのせるんですか？',
  '週何回かずさんと喧嘩してるんですか？',
  '今日はジムいかないんすか？'
];

const MESSAGE_MOMO_IMAGE = [
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

const MESSAGE_HITOMARU = [];

// アル中さん
const MESSAGE_ARUTYU = [
  'かんぱ～～～～い♪\n' + '<:TOZANG:855840334848065617> <:TOZANG:855840334848065617> <:TOZANG:855840334848065617> <:TOZANG:855840334848065617> <:TOZANG:855840334848065617> <:TOZANG:855840334848065617>',
  'アル中さん、お酒は控えたほうがいいですよ。',
  '入隊まで残り日♪',
  '大企業のICカード手に入れたからって、そこの従業員みたいなフリするのやめてもらえますか？',
  'アル中さんはサムソンの社員でもないし、SKハイニックスの社員でもないですよね？',
  '軍隊でどれだけ矯正されるか楽しみです♪'
];

const MESSAGE_ARUTYU_IMAGE = [
  //顔
  'https://media.discordapp.net/attachments/836210211467034637/858130231888969738/image0-186.jpg?width=901&height=676',
  //コラ画像
  'https://media.discordapp.net/attachments/803964190045634562/857994080368984106/processed_14.jpeg?width=1202&height=676',
  //バンジージャンプ
  'https://media.discordapp.net/attachments/803964190045634562/858350134877093958/image0.jpg?width=676&height=676'
];

const MESSAGE_DANNA_1 = [
  'ハラスメントの王',
  'ぼくに話題出させないでください。',
  'あなたにいじめられると体調が悪くなります。',
  '旦那さん、発動するとは思ってなかったんですよ',
  'あの、僕らに支えられて生きてるって自覚ありますか？',
  'ガンジャアナルオナニーってどれくらい気持ちいいんですかね。',
  'ぼくだってナマポになりたいですよ！！！！！！！！！！！！！！！！！！！！！！！！！！！！',
  'ずっとdiscordにはりついているのに、discordの使い方全然知らないですよね。',
  'ぼくからサーバーの王とらないでください。',
  'http://vippers.jp/mp3/dotup.org2377419.mp3',
];

const MESSAGE_DANNA_2 = [
  '',
  '旦那「ごめんなさい、ぼくが話題出すようにしますね:cry:」',
  '旦那「もうしません:cry:」',
  '',
  '旦那「みなさんに今日も感謝致します:laughing:」',
  '旦那「今日もガンジャアナニーしてすみませんでした:laughing:」',
  '旦那「ナマポに甘えてごめんなさい:cry:」',
  '旦那「discordの使い方覚えます:cry:」',
  '旦那「独裁者でごめんなさい:cry:」',
  '旦那「変な曲作ってごめんなさい:cry:」',
  '旦那「シコりすぎてごめんなさい:cry:」'
];

const MESSAGE_HAJIMEMASITE = [
  '初めまして、通話にいっぱいきてほしいです。',
  'Welcome to Underground',
  'よろしくな。'
];

const MESSAGE_OHAYOU = [
  'おはよーーーーーーーーーーーーーーーー！！！！！！！！！！！！！',
  '今日もいい日になるといいですね。',
  `今日も朝からDiscordです＾＾？\nお勤めご苦労様です＾＾\n僕は先に上で待ってますね＾＾`,
  '早起きは三文の得'
];

const MESSAGE_KONNITIHA = [
  'はい、こんにちはです。',
  'はい、今日もいい天気ですね',
  'おなか空きましたね'
];

const MESSAGE_KONBANHA = [
  'はい、こんばんはです。',
  'こんばんは、通話きてください。',
  '今日も生きる意味探してます',
  '挨拶するんだったら通話あがってもらっていいですか？＾＾'
];

const MESSAGE_OYASUMI = [
  'はい、おやすみなさいです。',
  'ぐっない',
  'それがお前の選択か・・・・・・',
  '永遠に眠れ'
];

const MESSAGE_SENDEN = [
  'ゴミサーバー宣伝しないでもらえますか？',
  '次宣伝したらBANですよ',
  'そんなところより、このサーバー盛り上げてくださいよ'
];

const MESSAGE_OMIKUJI = [
  '今日のあなたの運勢は、スーパーハッピー！\n願いは何でもかなっちゃう！！',
  '今日のあなたの運勢は、スーパーハッピー！\n願いは何でもかなっちゃう！！',
  '今日のあなたの運勢は、ベリーハッピー！\n楽しいことがおこるかも♪',
  '今日のあなたの運勢は、まあまあね。\n無くした物が見つかるかもよ。',
  '今日のあなたの運勢は、ちょっと悪いかも。\n東に向かうと運が向いてくるかもね。',
  '今日のあなたの運勢は、アンハッピ～。\n落し物に注意して！',
  '今日のアル中さんの運勢は、スーパーピンチ！\nライバルに差をつけられちゃうかも！がんばれ！'
];

const MESSAGE_VOICE_CHANNEL_JOIN = [
  `<@!${Constants.ID_NEKOSUTEMI}>　誰かボイスチャットにきましたよ！`,
  `<@!${Constants.ID_KURAHARA}>　誰かボイスチャットにきましたよ`,
  '新しく来た人、話題ふってもらっていいですか？'
];

const MESSAGE_VOICE_CHANNEL_LEAVE = [
  '落ちるの早くないですか？',
  'あ、おつかれさまでした。'
];

module.exports = {
  MESSAGE_KUZU,
  MESSAGE_KUZU_IMAGE,
  MESSAGE_YUKIDARUMA,
  MESSAGE_YUKIDARUMA_IMAGE,
  MESSAGE_NEKOSUTEMI,
  MESSAGE_NEKOSUTEMI_IMAGE,
  MESSAGE_MELON,
  MESSAGE_MELON_IMAGE,
  MESSAGE_KURAHARA,
  MESSAGE_DEVIBA,
  MESSAGE_DEVIBA_IMAGE,
  MESSAGE_MOMO,
  MESSAGE_MOMO_IMAGE,
  //MESSAGE_HITOMARU,
  MESSAGE_ARUTYU,
  MESSAGE_ARUTYU_IMAGE,
  MESSAGE_DANNA_1,
  MESSAGE_DANNA_2,
  MESSAGE_HAJIMEMASITE,
  MESSAGE_OHAYOU,
  MESSAGE_KONNITIHA,
  MESSAGE_KONBANHA,
  MESSAGE_OYASUMI,
  MESSAGE_SENDEN,
  MESSAGE_VOICE_CHANNEL_JOIN,
  MESSAGE_VOICE_CHANNEL_LEAVE
};