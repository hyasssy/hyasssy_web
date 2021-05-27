var defaultLang = (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language ||
    window.navigator.userLanguage ||
    window.navigator.browserLanguage;
var currentLang = defaultLang;
$(document).ready(function () {
    setlang();
    $('#ja_button').on('click', function () {
        button_ja();
        return false;
    });
    $('#en_button').on('click', function () {
        button_en();
        return false;
    });
});

const _data = {
    text1: {
        ja: `妻を失い、悲しみにくれるおじいさん。飛来する新種のウィルス、犬と共に朽ちていく身体、そして現れるあの日のおばあさんーー
        GAME: Fragile
        いくつかのシーンをプロトタイプとして発表します。`,
        en: `An old man grieves the death of his wife. He becomes afflicted with an unknown virus and his body deteriorates as does his dog’s. But then, his wife appears – the wife that he so sorely missed.
        GAME: Fragile - Prototype`
    },
    info_left1: {
        ja: "ジャンル",
        en: "Genre"
    },
    info_right1: {
        ja: "アドベンチャー",
        en: "Adventure"
    },
    info_left2: {
        ja: "動作環境",
        en: "OS"
    },
    info_right2: {
        ja: "Mac/Windows",
        en: "Mac/Windows"
    },
    info_left3: {
        ja: "プレイ人数",
        en: "Player"
    },
    info_right3: {
        ja: "1人",
        en: "1P"
    },
    info_left4: {
        ja: "言語",
        en: "Languege"
    },
    info_right4: {
        ja: "日本語/English",
        en: "日本語/English"
    },
    video_credit: {
        ja: `2021年東京藝術大学大学院ゲームコース-南カリフォルニア大学ゲーム学科コラボレーション制作
2021年2月プロジェクト始動
ディレクター：林裕人
プログラム・3Dアートワーク：林裕人
アートワーク：許イ
サウンド：阿部浩大、田中小太郎
脚本：松永海
メンター：Fidelia Lam
`,
        en: `2021 TUA - USC Game course Collaboration Production
Project start in February 2021
Director: Yuto Hayashi
Program & 3D Artwork: Yuto Hayashi
Artwork: Wei Xu
Sound: Kodai Abe, Kotaro Tanaka
Scenario: Kai Matsunaga
Mentor: Fidelia Lam`
    },
    text2: {
        ja: `あらすじ`,
        en: `Story`
    },
    text3: {
        ja: `スミレが、病院で息を引き取った。
続け様に、半生をかけて働いてきたラムネ工場は倒産した。
突如現れた新型ウィルス“Fragile”は猛烈な勢いで世界を覆い、年老いたカニエを孤独にした。
何も身に入らず、寝ては起きてを繰り返すばかりの渇ききった日々。
現実はとても残酷だ。
どう生きたら良いか、もはや分からない。

そんなある日、カニエは一匹の子犬と出会う。
無邪気な新しい命との触れ合いに、彼は久しぶりの穏やかな時間を過ごす。
しかし同時にそれは”Fragile”との邂逅でもあった。
日に日に感染が進み身体が弱っていく中、カニエはスミレの幻覚を見る。
スミレは語る。「私はもう死んでいる。」
カニエはその残酷な事実を充分に理解していた。
現実か、幻覚か。
80歳の老人が孤独の先に選んだ答えは。`,
        en: `Sumire passed away in the hospital.
In the same way, the ramune factory where he had worked for half his life went bankrupt.
The new virus "Fragile" suddenly appeared and covered the world at a furious pace, leaving the old Kanie alone.
With nothing to do but sleep and wake up again and again, his days are thirsty.
Reality is so cruel.
He no longer knew how to live.

Then one day, Kanie meets a puppy.
In contact with this innocent new life, he spends the first peaceful time in a long time.
But at the same time, it was also a chance encounter with "Fragile.
As the infection progresses day by day and his body becomes weaker and weaker, Kanie has a hallucination of Sumire.
Sumire says, "I'm already dead. I'm already dead.
Kanie was fully aware of the cruel truth.
Reality or hallucination?
What is the answer to the loneliness of an 80 year old man?`
    },
    text4: {
        ja: `2Dと3Dの融合したグラフィック`,
        en: `Blending of 2D and 3D graphics`
    },
    text4_sp: {
        ja: `2Dと3Dの融合したグラフィック`,
        en: `Blending of 2D and 3D graphics`
    },
    text5: {
        ja: `視点の制限とポストプロセスでの描画の調整により、2D素材を用いて3D空間を表現。UnityプロジェクトへのURPの導入と併せ、コスト・クオリティ・パフォーマンスを高いレベルで達成することを目指しました。`,
        en: `By limiting the viewpoint and adjusting the post-processing rendering, we were able to create a 3D space using 2D materials, and with the introduction of URP into the Unity project, we were able to achieve a high level of cost and quality.`
    },
    text5_sp: {
        ja: `視点の制限とポストプロセスでの描画の調整により、2D素材を用いて3D空間を表現。UnityプロジェクトへのURPの導入と併せ、コスト・クオリティ・パフォーマンスを高いレベルで達成することを目指しました。`,
        en: `By limiting the viewpoint and adjusting the post-processing rendering, we were able to create a 3D space using 2D materials, and with the introduction of URP into the Unity project, we were able to achieve a high level of cost and quality.`
    },
    text6: {
        ja: `オンラインベースでのチーム開発`,
        en: `Online based development`
    },
    text6_sp: {
        ja: `オンラインベースでのチーム開発`,
        en: `Online based development`
    },
    text7: {
        ja: `現在の状況を鑑み、プロジェクト進行の殆どをオンラインで行いました。プロジェクト初期段階では中国から参加していたメンバーもおり、様々な困難に直面しつつも距離に捉われない開発を行いました。`,
        en: `Considering the current situation, most of the project progress was done online. In the early stages of the project, some of the members came from China, and while we faced various difficulties, we were able to develop the project regardless of the distance.`
    },
    text7_sp: {
        ja: `現在の状況を鑑み、プロジェクト進行の殆どをオンラインで行いました。プロジェクト初期段階では中国から参加していたメンバーもおり、様々な困難に直面しつつも距離に捉われない開発を行いました。`,
        en: `Considering the current situation, most of the project progress was done online. In the early stages of the project, some of the members came from China, and while we faced various difficulties, we were able to develop the project regardless of the distance.`
    },
    text8: {
        ja: `サウンド`,
        en: `text`
    },
    text8_sp: {
        ja: `サウンド`,
        en: `text`
    },
    text9: {
        ja: `サウンド`,
        en: `text`
    },
    text9_sp: {
        ja: `テキスト`,
        en: `text`
    },
    text10: {
        ja: `東京藝術大学油画→大学院メディア映像研究科/Media Artist: 身体・距離・バーチャルについて研究・制作/2019ユーラシア大陸横断:石橋財団海外渡航プログラム/S.C.L.3期生:xR開発プログラム/UT-virtual5期生`,
        en: ``
    },
    text11: {
        ja: `自己紹介`,
        en: ``
    },
    text12: {
        ja: `自己紹介`,
        en: ``
    },
    text13: {
        ja: `自己紹介`,
        en: ``
    },
    text14: {
        ja: `自己紹介`,
        en: ``
    },
    text15: {
        ja: `メンター：Fidelia Lam（南カリフォルニア大学）
        アドバイザー：時田貴司（スクエアエニックス）
        アカデミックアドバイザー（東京藝術大学ゲームコース教員）：岡本美津子、桐山孝司、牧奈歩実、江口麻子、松本祐一
        アカデミックアドバイザー（南カリフォルニア大学ゲーム学科教員）：Andreas Klazly、Peter Brinson
        `,
        en: ``
    },
    text16: {
        ja: `2021/1/20 プロジェクトキックオフ、チームビルディング(3人)、ブレスト`,
        en: ``
    },
    text17: {
        ja: `2/19 新チーム発足 チームメンバーが現行の5人へ`,
        en: ``
    },
    text18: {
        ja: `4月末 プロトタイプビルド`,
        en: ``
    },
    gallerycaption2: {
        ja: `東京藝大-南カリフォルニア大学コラボ講評風景`,
        en: `Tokyo National University of Fine Arts and Music - University of Southern California Collaboration Critique`
    },
}
function button_en() {
    currentLang = "en";
    setlang();
}
function button_ja() {
    currentLang = "ja";
    setlang();
}
function setlang() {
    console.log("translate" + currentLang);
    if (currentLang == "ja") {
        $('#ja_button').css('display', 'none');
        $('#en_button').css('display', 'block');
    } else {
        $('#ja_button').css('display', 'block');
        $('#en_button').css('display', 'none');
    }
    Object.keys(_data).forEach(function (key) {
        var target = document.getElementById(key);
        if (target != null) {
            target.innerHTML = ht_str(currentLang == "ja" ? _data[key].ja : _data[key].en);
        }
    });
}

//改行やスペースをコードに落とし込んだstringに変換する。
function ht_str(str) {
    if (str == null) return '';
    str = str.toString();
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    // str = str.replace( / /g,'&nbsp;' );
    // str = str.replace( /\t/g,'&nbsp;&nbsp;&nbsp;&nbsp;' ); // Tabをスペース4つに..
    str = str.replace(/\r?\n/g, "<br />\n");
    return str;
}