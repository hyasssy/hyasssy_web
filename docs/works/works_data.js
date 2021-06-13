/*
Format

const _thumbnaildata = [
    {
        root_id: "hoge",
        img_url: "./img/thumbnails/t_hoge.jpg"
    }
]
const _documentdata = {
    //ここのキーは_thumbnaildataのroot_idと同じにする。
    hoge: {
        links: [{ id: "link_hoge", url: "hoge" }],
        imgs: ["./img/hoge.jpg","hoge"],
        topimgurl: "./img/hoge.jpg",
        topvideourl: ""
    }
}

imgsは下に配置するイメージたち。
トップがイメージならtopimgurlはイメージのパス、そうでなければ""でvideoの埋め込みurlを入れる。

vcaptionは必要であれば。他は""で空を入れておくのが吉。

const _textdata = {
    th_hoge: {
        ja: `hoge
        2020`,
        en: `hoge
        2020`
    },
    title_hoge: {
        ja: `hoge`,
        en: `hoge`
    },
    credit_hoge: {
        ja: ``,
        en: ``
    },
    link_hoge: {
        ja: ">>Link",
        en: ">>Link"
    },
    text_hoge: {
        ja: ``,
        en: ``
    },
    vcaption_hoge: {
        ja: ``,
        en: ``
    },
}

*/


const _thumbnaildata = [//ここの並び順で並んでいく。
    {
        root_id: "fragile",
        img_url: "./img/thumbnails/t_fragile.jpg"
    },
    {
        root_id: "cisyn",
        img_url: "./img/thumbnails/t_cisyn.jpg"
    },
    {
        root_id: "web_ga",
        img_url: "./img/thumbnails/t_web_ga.jpg"
    },
    {
        root_id: "web_okuyama",
        img_url: "./img/thumbnails/t_web_okuyama.jpg"
    },
    {
        root_id: "web_mp",
        img_url: "./img/thumbnails/t_web_mp.jpg"
    },
    {
        root_id: "getclosemore",
        img_url: "./img/thumbnails/t_getclosemore.jpg"
    },
    {
        root_id: "lumiere",
        img_url: "./img/thumbnails/t_lumiere.jpg"
    },
    {
        root_id: "fts_photo",
        img_url: "./img/thumbnails/t_fts_photo.jpg"
    },
    {
        root_id: "koko",
        img_url: "./img/thumbnails/t_koko.jpg"
    },
    {
        root_id: "portfolio",
        img_url: "./img/thumbnails/t_portfolio.jpg"
    },
    {
        root_id: "isyourbodyyours",
        img_url: "./img/thumbnails/t_isyourbodyyours.jpg"
    },
    {
        root_id: "selfportrait",
        img_url: "./img/thumbnails/t_selfportrait.jpg"
    },
    {
        root_id: "practicetowalk",
        img_url: "./img/thumbnails/t_practicetowalk.jpg"
    },
    {
        root_id: "fts_video",
        img_url: "./img/thumbnails/t_fts_video.jpg"
    },
    {
        root_id: "sowhoami",
        img_url: "./img/thumbnails/t_sowhoami.jpg"
    },
    {
        root_id: "eupcaccia",
        img_url: "./img/thumbnails/t_eupcaccia.jpg"
    },
    {
        root_id: "osorubeki",
        img_url: "./img/thumbnails/t_osorubeki.jpg"
    },
    {
        root_id: "japanesefaces",
        img_url: "./img/thumbnails/t_japanesefaces.jpg"
    },
    {
        root_id: "secretplace",
        img_url: "./img/thumbnails/t_secretplace.jpg"
    },
    {
        root_id: "flatworks",
        img_url: "./img/thumbnails/t_flatworks.jpg"
    },
    {
        root_id: "omatsurisawagi",
        img_url: "./img/thumbnails/t_omatsurisawagi.jpg"
    }
]

const _documentdata = {
    //keyネームは_thumbnaildataのroot_id
    //他の要素: title_hoge, credit_hoge, text_hoge, vcaption_hoge
    //hogeにはkeyが入る。 textの方のデータに入れてくのでお忘れなく。
    portfolio: {
        links: [{ id: "link_portfolio", url: "./img/portfolio/portfolio.pdf" }],
        imgs: [],
        topimgurl: "./img/portfolio/portfolio_top.jpg",
        topvideourl: ""
    },
    cisyn: {
        links: [{ id: "link_cisyn", url: "https://caniseeyounow.tokyo/" }],
        imgs: ["./img/cisyn/img1.jpg", "./img/cisyn/img5.jpg", "./img/cisyn/img3.jpg"],
        topimgurl: "",
        topvideourl: "https://www.youtube.com/embed/9RZtiaJZQzg"
    },
    fragile: {
        links: [{ id: "link_fragile", url: "https://hyasssy.tokyo/project/fragile/" }],
        imgs: ["./img/fragile/img2.jpg", "./img/fragile/img4.jpg", "./img/fragile/img7.jpg", "./img/fragile/img6.jpg", "./img/fragile/img9.jpg"],
        topimgurl: "",
        topvideourl: "https://www.youtube.com/embed/bkVomLX833M"
    },
    web_ga: {
        links: [{ id: "link_web_ga", url: "https://welcome.geidai.ac.jp/" }],
        imgs: ["./img/web_ga/img2.jpg", "./img/web_ga/img3.jpg", "./img/web_ga/img4.jpg", "./img/web_ga/virtualtour.gif"],
        topimgurl: "./img/web_ga/img1.jpg",
        topvideourl: ""
    },
    web_okuyama: {
        links: [{ id: "link_web_okuyama", url: "https://honoka-okuyama.com/" }],
        imgs: ["./img/web_okuyama/img2.jpg", "./img/web_okuyama/img3.jpg"],
        topimgurl: "./img/web_okuyama/img1.jpg",
        topvideourl: ""
    },
    web_mp: {
        links: [{ id: "link_web_mp", url: "https://fm.geidai.ac.jp/media-practice/2021/" }],
        imgs: ["./img/web_mp/img2.jpg", "./img/web_mp/img3.jpg", "./img/web_mp/img4.jpg", "./img/web_mp/img5.jpg"],
        topimgurl: "./img/web_mp/img1.jpg",
        topvideourl: ""
    },
    getclosemore: {
        links: [],
        imgs: ["./img/getclosemore/img1.jpg", "./img/getclosemore/img2.jpg", "./img/getclosemore/img3.jpg"],
        topimgurl: "",
        topvideourl: "https://www.youtube.com/embed/w7lutZxABxY"
    },
    lumiere: {
        links: [],
        imgs: ["./img/lumiere/img1.jpg", "./img/lumiere/img3.jpg", "./img/lumiere/img4.jpg"],
        topimgurl: "",
        topvideourl: "https://www.youtube.com/embed/10FNJ1RaABw"
    },
    fts_photo: {
        links: [],
        imgs: ["./img/fts_photo/img2.jpg", "./img/fts_photo/img3.jpg", "./img/fts_photo/img4.jpg", "./img/fts_photo/img5.jpg", "./img/fts_photo/img6.jpg", "./img/fts_photo/img7.jpg", "./img/fts_photo/img8.jpg", "./img/fts_photo/img9.jpg"],
        topimgurl: "./img/fts_photo/img1.jpg",
        topvideourl: ""
    },
    koko: {
        links: [],
        imgs: ["./img/koko/img1.jpg"],
        topimgurl: "",
        topvideourl: "https://www.youtube.com/embed/KA5s8VarmSg"
    },
    isyourbodyyours: {
        links: [],
        imgs: ["./img/isyourbodyyours/img1.jpg", "./img/isyourbodyyours/img4.jpg", "./img/isyourbodyyours/img3.jpg", "./img/isyourbodyyours/img6.jpg", "./img/isyourbodyyours/img5.jpg", "./img/isyourbodyyours/img8.jpg", "./img/isyourbodyyours/img10.jpg"],
        topimgurl: "",
        topvideourl: "https://www.youtube.com/embed/bchO62Ej2Nw"
    },
    selfportrait: {
        links: [],
        imgs: ["./img/selfportrait/img2.jpg", "./img/selfportrait/img3.jpg"],
        topimgurl: "./img/selfportrait/img1.jpg",
        topvideourl: ""
    },
    practicetowalk: {
        links: [],
        imgs: ["./img/practicetowalk/img1.jpg", "./img/practicetowalk/img3.jpg", "./img/practicetowalk/img5.jpg", "./img/practicetowalk/img6.jpg", "./img/practicetowalk/img7.jpg"],
        topimgurl: "",
        topvideourl: "https://www.youtube.com/embed/KBaWHcB7fEA"
    },
    fts_video: {
        links: [],
        imgs: ["./img/fts_video/img6.jpg", "./img/fts_video/img7.jpg", "./img/fts_video/img8.jpg", "./img/fts_video/img3.jpg", "./img/fts_video/img4.jpg"],
        topimgurl: "",
        topvideourl: "https://www.youtube.com/embed/jcxe5_TK_Wo"
    },
    sowhoami: {
        links: [],
        imgs: ["./img/sowhoami/img1.jpg", "./img/sowhoami/img2.jpg", "./img/sowhoami/img3.jpg", "./img/sowhoami/img5.jpg"],
        topimgurl: "",
        topvideourl: "https://www.youtube.com/embed/v8dlxSbg-Yk"
    },
    eupcaccia: {
        links: [],
        imgs: ["./img/eupcaccia/img5.jpg", "./img/eupcaccia/img1.jpg", "./img/eupcaccia/img6.jpg", "./img/eupcaccia/img7.jpg"],
        topimgurl: "",
        topvideourl: "https://www.youtube.com/embed/bTBIAVwz2fY"
    },
    osorubeki: {
        links: [],
        imgs: ["./img/osorubeki/img2.jpg", "./img/osorubeki/img3.jpg", "./img/osorubeki/img4.jpg", "./img/osorubeki/img5.jpg"],
        topimgurl: "./img/osorubeki/img1.jpg",
        topvideourl: ""
    },
    japanesefaces: {
        links: [],
        imgs: ["./img/japanesefaces/img2.jpg", "./img/japanesefaces/img3.jpg", "./img/japanesefaces/img4.jpg", "./img/japanesefaces/img6.jpg", "./img/japanesefaces/img7.jpg", "./img/japanesefaces/img8.jpg", "./img/japanesefaces/img9.jpg"],
        topimgurl: "./img/japanesefaces/img1.jpg",
        topvideourl: ""
    },
    secretplace: {
        links: [],
        imgs: ["./img/secretplace/img2.jpg", "./img/secretplace/img3.jpg", "./img/secretplace/img4.jpg", "./img/secretplace/img8.jpg", "./img/secretplace/img5.jpg", "./img/secretplace/img7.jpg"],
        topimgurl: "./img/secretplace/img1.jpg",
        topvideourl: ""
    },
    flatworks: {
        links: [],
        imgs: ["./img/flatworks/img2.jpg", "./img/flatworks/img3.jpg", "./img/flatworks/img4.jpg", "./img/flatworks/img5.jpg"],
        topimgurl: "./img/flatworks/img1.jpg",
        topvideourl: ""
    },
    omatsurisawagi: {
        links: [],
        imgs: [],
        topimgurl: "./img/omatsurisawagi/img1.jpg",
        topvideourl: ""
    }


}

const _textdata = {
    th_fragile: {
        ja: `Fragile`,
        en: `Fragile`
    },
    title_fragile: {
        ja: `Fragile - Game Prototype`,
        en: `Fragile - Game Prototype`
    },
    credit_fragile: {
        ja: `2021 /  PC game
ディレクター・エンジニア：林裕人
アートワーク：許イ
サウンド：田中小太郎、阿部浩大
脚本：松永海
メンター：Fidelia Lam`,
        en: `2021 /  PC game
Director / Engineer: Yuto Hayashi
Artwork: Wei Xu
Sound: Kodai Abe, Kotaro Tanaka
Scenario: Kai Matsunaga
Mentor: Fidelia Lam`
    },
    link_fragile: {
        ja: ">>Link: Fragile website",
        en: ">>Link: Fragile website"
    },
    text_fragile: {
        ja: `2021年東京藝術大学大学院ゲームコース-南カリフォルニア大学ゲーム学科コラボレーションカリキュラム。
妻を失い、悲しみにくれるおじいさん。飛来する新種のウィルス、犬と共に朽ちていく身体、そして現れるあの日のおばあさんーー
ゲームプロジェクトをプロトタイプとして発表しました。`,
        en: `2021 TUA - USC Game course Collaboration Production
An old man grieves the death of his wife. He becomes afflicted with an unknown virus and his body deteriorates as does his dog’s. But then, his wife appears – the wife that he so sorely missed.
GAME: Fragile - Prototype`
    },
    vcaption_fragile: {
        ja: `Trailer`,
        en: `Trailer`
    },
    th_portfolio: {
        ja: `PORTFOLIO
        2020`,
        en: `PORTFOLIO
        2020`
    },
    title_portfolio: {
        ja: `PORTFOLIO`,
        en: `PORTFOLIO`
    },
    credit_portfolio: {
        ja: ``,
        en: ``
    },
    link_portfolio: {
        ja: ">>Link (PDF 約20MB)",
        en: ">>Link (PDF about 20MB)"
    },
    text_portfolio: {
        ja: ``,
        en: ``
    },
    th_web_ga: {
        ja: `welcome.geidai.ac.jp`,
        en: `welcome.geidai.ac.jp`
    },
    title_web_ga: {
        ja: `Welcome Stranger to this Place`,
        en: `Welcome Stranger to this Place`
    },
    credit_web_ga: {
        ja: `2021 /  Show website
Design, Code: Yuto Hayashi`,
        en: `2021 /  Show website
Design, Code: Yuto Hayashi`
    },
    link_web_ga: {
        ja: ">>Link: https://welcome.geidai.ac.jp/",
        en: ">>Link: https://welcome.geidai.ac.jp/"
    },
    text_web_ga: {
        ja: `東京藝術大学GA主催、陳列館展示“Welcome Stranger to this Place”の依頼を受け、Webサイトを制作しました。
UXを考慮し、別ページのリンクを増やすことなく多くの情報をまとめました。
関係者やターゲットに海外の方も含まれているため、英語対応しています。
また現在の状況を意識し、展示空間をキャプチャーしたバーチャルツアーを制作し、設置しました。`,
        en: `I was commissioned to create a website for the exhibition "Welcome Stranger to this Place" at the Tokyo University of the Arts.
In consideration of UX, I compiled a lot of information without adding links to other pages.
The website is also available in English.
I also created and installed a virtual tour that captures the exhibition space, keeping in mind the current situation.`
    },
    vcaption_web_ga: {
        ja: ``,
        en: ``
    },
    th_web_okuyama: {
        ja: `honoka-okuyama.com`,
        en: `honoka-okuyama.com`
    },
    title_web_okuyama: {
        ja: `honoka-okuyama.com`,
        en: `honoka-okuyama.com`
    },
    credit_web_okuyama: {
        ja: `2021 /  Artist website for Honoka Okuyama
direction, code: Yuto Hayashi
design: Yuka Sato`,
        en: `2021 /  Artist website for Honoka Okuyama
direction, code: Yuto Hayashi
design: Yuka Sato`
    },
    link_web_okuyama: {
        ja: ">>Link: https://honoka-okuyama.com/",
        en: ">>Link: https://honoka-okuyama.com/"
    },
    text_web_okuyama: {
        ja: ``,
        en: ``
    },
    vcaption_web_okuyama: {
        ja: ``,
        en: ``
    },
    th_web_mp: {
        ja: `MEDIA PRACTICE 20-21`,
        en: `MEDIA PRACTICE 20-21`
    },
    title_web_mp: {
        ja: `MEDIA PRACTICE 20-21`,
        en: `MEDIA PRACTICE 20-21`
    },
    credit_web_mp: {
        ja: `2021
Yuto Hayashi, Chiho Oka`,
        en: `2021
Yuto Hayashi, Chiho Oka`
    },
    link_web_mp: {
        ja: ">>Link: https://fm.geidai.ac.jp/media-practice/2021/",
        en: ">>Link: https://fm.geidai.ac.jp/media-practice/2021/"
    },
    text_web_mp: {
        ja: ``,
        en: ``
    },
    vcaption_web_mp: {
        ja: ``,
        en: ``
    },
    th_cisyn: {
        ja: `Can I see You now?
        online app / 2020`,
        en: `Can I see You now?
        online app / 2020`
    },
    title_cisyn: {
        ja: `Can I see You now?`,
        en: `Can I see You now?`
    },
    credit_cisyn: {
        ja: `Artist : Yuto Hayashi
Engineer : Tabi Morinaga
2020 / online application
関連作品: “I want to get close more...”

東京藝大バーチャル藝祭2020出展
MEDIA PRACTICE 20-21出展
台湾-東京コラボプロジェクト”IJIE-ROHOU”出展
東京藝大ゲームコース展出展`,
        en: `Artist : Yuto Hayashi
Engineer : Tabi Morinaga
2020 / online application
Related work: “I want to get close more...”

Exhibited at
Tokyo University of the Arts Virtual Art Festival 2020
MEDIA PRACTICE 20-21
Taiwan-Tokyo collaboration project "IJIE-ROHOU".
Tokyo University of the Arts Game Course Exhibition`
    },
    link_cisyn: {
        ja: ">>特設サイトリンク",
        en: ">>Specialised website"
    },
    text_cisyn: {
        ja: `前作“I want to get close more...”プロジェクトの発展として、オンラインプレイ可能なPCアプリケーションを設計しました。
2020年、人々は物理的な距離によって強烈に隔てられました。今、私たちはどうやって人に会うことができるのでしょう？
`,
        en: `This piece is a progress of the previous work, “I want to get close more...”.
In 2020, people were strongly separated by physical distance. How can we meet people now? As an attempt this time, I designed a session.
*This work is a PC application that is played online.
`
    },
    vcaption_cisyn: {
        ja: `Trailer`,
        en: `Trailer`
    },
    th_getclosemore: {
        ja: `I want to get close more...`,
        en: `I want to get close more...`
    },
    title_getclosemore: {
        ja: `I want to get close more...`,
        en: `I want to get close more...`
    },
    credit_getclosemore: {
        ja: `Yuto Hayashi
Lisa Aoyama, Yusuf Turgut, Hoa Nu Nguyen and their family
2020 / online session
Related work: “Following the Sun”(travel across the Eurasian continent), “Can I see You now?”

OPEN STUDIO 2020出展`,
        en: `Yuto Hayashi
Lisa Aoyama, Yusuf Turgut, Hoa Nu Nguyen and their family
2020 / online session
Related work: “Following the Sun”(travel across the Eurasian continent), “Can I see You now?”

Exhibited at OPEN STUDIO 2020`
    },
    text_getclosemore: {
        ja: `本作品は現在の状況下において、ZOOMとGoogle Street Viewを用いて離れた人に会いにいくことを試みるプロジェクトです。
2019年に行ったユーラシア横断の旅から半年も経たないうちに、世界の状況は大きく変わってしまい、人と人との間にある“距離”の意味合いは決定的に変化しました。今私たちはどうやって人と会うことができるのでしょうか？`,
        en: `This work is a project that attempts to meet people who are far away from each other using ZOOM and Google Street View under the current circumstances.
In less than half a year since my trip across Eurasia in 2019, the world has changed dramatically, and the meaning of "distance" between people has changed drastically. How are we able to meet people now?`
    },
    vcaption_getclosemore: {
        ja: ``,
        en: ``
    },
    th_lumiere: {
        ja: `Lumiere rule`,
        en: `Lumiere rule`
    },
    title_lumiere: {
        ja: `Lumiere rule`,
        en: `Lumiere rule`
    },
    credit_lumiere: {
        ja: `Yuto Hayashi
2020 / video

OPEN STUDIO 2020出展
鳥取古民家滞在中にワークショップ実施(2021)`,
        en: `Yuto Hayashi
2020 / video

Exhibited at OPEN STUDIO 2020
Workshop during the stay in Tottori's old private house (2021)`
    },
    link_lumiere: {
        ja: ">>Link",
        en: ">>Link"
    },
    text_lumiere: {
        ja: `2020年度東京藝術大学メディア映像研究科のカリキュラム。
        テーマ：身体表現
        ルール：モノクロ・サイレント・カメラ操作なし・モニターなし・編集なし・1分以内
`,
        en: `Class for Tokyo University of the Arts, Graduate School of New Media, 2020.
        Theme: Physical Expression
        Rules: Black and white, silent, no camera operation, no monitor, no editing, no more than 1 minute
`
    },
    vcaption_lumiere: {
        ja: ``,
        en: ``
    },
    th_fts_photo: {
        ja: `Following the Sun`,
        en: `Following the Sun`
    },
    title_fts_photo: {
        ja: `Series: Following the Sun`,
        en: `Series: Following the Sun`
    },
    credit_fts_photo: {
        ja: `2020 / photo
        タイトルリスト:
2020/6/2/15:53-18:15
2020/6/8/16:08-18:24
2020/5/29/16:13-16:33
2020/5/29/15:36-15:49
2020/5/29/18:01-18:06
2020/6/15/16:32-18:09
2020/6/16/16:59-18:06
2020/8/4/17:05-17:16
2020/8/5/16:29-18:08`,
        en: `2020 / photo
        Title list:
2020/6/2/15:53-18:15
2020/6/8/16:08-18:24
2020/5/29/16:13-16:33
2020/5/29/15:36-15:49
2020/5/29/18:01-18:06
2020/6/15/16:32-18:09
2020/6/16/16:59-18:06
2020/8/4/17:05-17:16
2020/8/5/16:29-18:08
        `
    },
    link_fts_photo: {
        ja: "",
        en: ""
    },
    text_fts_photo: {
        ja: ``,
        en: ``
    },
    vcaption_fts_photo: {
        ja: ``,
        en: ``
    },
    th_koko: {
        ja: `ここ`,
        en: `Koko`
    },
    title_koko: {
        ja: `ここ`,
        en: `Koko`
    },
    credit_koko: {
        ja: `Yuto Hayashi
        2020 / video`,
        en: `Yuto Hayashi
        2020 / video`
    },
    link_koko: {
        ja: "",
        en: ""
    },
    text_koko: {
        ja: ``,
        en: ``
    },
    vcaption_koko: {
        ja: ``,
        en: ``
    },
    th_isyourbodyyours: {
        ja: `Is your body yours?`,
        en: `Is your body yours?`
    },
    title_isyourbodyyours: {
        ja: `Is your body yours?`,
        en: `Is your body yours?`
    },
    credit_isyourbodyyours: {
        ja: `Yuto Hayashi
VR installation
device : Oculus quest
game engine : Unity
installation material : single pipes, rope, plastic, cloth

exhibited at graduation exhibition of TUA in 2020`,
        en: `Yuto Hayashi
VR installation
device : Oculus quest
game engine : Unity
installation material : single pipes, rope, plastic, cloth

exhibited at graduation exhibition of TUA in 2020`
    },
    link_isyourbodyyours: {
        ja: "",
        en: ""
    },
    text_isyourbodyyours: {
        ja: `仮想現実の中で、あなたは複製された自分自身に遭遇します。
身体の分裂とそれを捉え直すことを経験した時に、身体は一体 誰のものになるでしょう?

2019年のわたしのVRとの出会いは、ついに一人称視点・身体までもが情報化・複製されるようになってしまった点において、喪失的な衝撃でした。わたしは学部3年から、様々なモノが情報化されてきたことを受けてデータと身体の関係を探る作品制作を行ってきましたが、それには身体の唯一性が複製可能な情報に対して自分がこの世界で唯一の存在であることを担保しているという前提が必要でした。しかしそれももう確かさを失いつつあります。目に見えないモノ、手に触れられないモノに対する、身体的、肉体的なものという対照構図がいよいよ危うくなり、自分の存在が揺らいでいることを感じます。
本作では身体とのそういったある種の別れ(あるいは出会い)の瞬間をVRの体験で描きました。仮想現実のもとで分裂してしまった自身と再融合するまでの、身体を通した体験によって、身体の在り方、そして未来の身体像について問いかけます。`,
        en: `In this VR artwork, you sense your represented body. After you experience the representation of you and comprehend it, whose body does it become?

In 2019, I met VR. It was a shocking loss in the sense that the human body as well as the first-person view is forced to be replaced with data at last. I have been acting to comprehend the relationship between datas and body from interest in information society, but it was based on the uniqueness of the body which has been ensuring that the person's unique existance on the world. It is going over. The boundery between metaphysical things and physical things. In this VR artwork, I show this kind of farewell (or encount). Through the experience of representation of the body and refusion it, I ask the existance of the body and the body in the future.`
    },
    vcaption_isyourbodyyours: {
        ja: `Demo movie`,
        en: `Demo movie`
    },
    th_selfportrait: {
        ja: `Self-Portrait`,
        en: `Self-Portrait`
    },
    title_selfportrait: {
        ja: `Self-Portrait`,
        en: `Self-Portrait`
    },
    credit_selfportrait: {
        ja: `2020 / Alminium
        exhibited at graduation exhibition of TUA in 2020`,
        en: `2020 / Alminium
        exhibited at graduation exhibition of TUA in 2020`
    },
    link_selfportrait: {
        ja: "",
        en: ""
    },
    text_selfportrait: {
        ja: ``,
        en: ``
    },
    th_practicetowalk: {
        ja: `Practice to walk`,
        en: `Practice to walk`
    },
    title_practicetowalk: {
        ja: `Practice to walk`,
        en: `Practice to walk`
    },
    credit_practicetowalk: {
        ja: `2019 / video
        石橋財団海外派遣奨学生展2019出展`,
        en: `2019 / video
        Exhibited at Ishibashi Foundation Overseas Scholarship Exhibition 2019`
    },
    link_practicetowalk: {
        ja: "",
        en: ""
    },
    text_practicetowalk: {
        ja: `ユーラシア大陸横断の旅の中で制作した映像です。
20世紀以降、飛行機の発明や電波通信の普及によって、私たちは空間の圧縮された世界に住んでいます。
飛行機は都市と都市を、その間の道のりを無視して繋ぎます。それはまるでリンクによってWEBサイトをパチパチと移りゆくインターネット空間のようです。
しかし実際にはインターネットは本質的に現実世界とは異なり、この世界には確かに道や海が存在しているはずなのです。インターネット化する世界の中で私は何かをとりこぼし続けていることを感じ、世界の広さ（あるいは狭さ）、その距離感を掴むためになるべく陸路でユーラシア大陸を横断するプロジェクトを立てました。
この映像はその旅の中で、ベトナムのホイアンから日本に向かって歩き、そこにあるはずだった海と途切れた道のことを考えて制作しました。`,
        en: `This video was made from my long travel crossing the Eurasian continent.
In the 20th century, humans get flight technique, and people have come to move without consciousness for the road and process between cities.
This video was made for the roads and sea which are ignored in such a world.`
    },
    vcaption_practicetowalk: {
        ja: ``,
        en: ``
    },
    th_fts_video: {
        ja: `Following the Sun lonely for the road`,
        en: `Following the Sun lonely for the road`
    },
    title_fts_video: {
        ja: `Following the Sun lonely for the road`,
        en: `Following the Sun lonely for the road`
    },
    credit_fts_video: {
        ja: `2019 / video
        石橋財団海外派遣奨学生展2019出展`,
        en: `2019 / video
        Exhibited at Ishibashi Foundation Overseas Scholarship Exhibition 2019`
    },
    link_fts_video: {
        ja: "",
        en: ""
    },
    text_fts_video: {
        ja: ``,
        en: ``
    },
    vcaption_fts_video: {
        ja: ``,
        en: ``
    },
    th_sowhoami: {
        ja: `So, who am I?`,
        en: `So, who am I?`
    },
    title_sowhoami: {
        ja: `So, who am I?`,
        en: `So, who am I?`
    },
    credit_sowhoami: {
        ja: `Artist: Yuto Hayashi
        Design consult: Lisa Aoyama
2019 / VR installation application`,
        en: `Artist: Yuto Hayashi
        Design consult: Lisa Aoyama
2019 / VR installation application`
    },
    link_sowhoami: {
        ja: "",
        en: ""
    },
    text_sowhoami: {
        ja: `VRを扱った最初の実験的なアウトプット作品。展示場を模した部屋の中で扉を開くと、操作能力を失って自分のアバターが無限に複製されていきます。SNSアカウントが人格を自律的に複製していることに言及しました。体験型作品の展示プラットフォームに対するプラクティスにもなりました。
映像はそのプレイムービーです。`,
        en: `This is the first output experiment artwork with VR technology. In this VR artwork, there is a room made like the exhibition room. After openning a door, one lost his or her control and his or her avatar is represented infinitely. I mentioned that social media is representing characters autonomously. It also played roll as a practice to exhibit a playable artwork.`
    },
    vcaption_sowhoami: {
        ja: `Demo movie`,
        en: `Demo movie`
    },
    th_eupcaccia: {
        ja: `Eupcaccia in virtual world`,
        en: `Eupcaccia in virtual world`
    },
    title_eupcaccia: {
        ja: `Eupcaccia in virtual world`,
        en: `Eupcaccia in virtual world`
    },
    credit_eupcaccia: {
        ja: `2019 / CG / Alminium`,
        en: `2019 / CG / Alminium`
    },
    link_eupcaccia: {
        ja: "",
        en: ""
    },
    text_eupcaccia: {
        ja: `
ユープケッチャは安部公房の小説に出てくる、ある種の完全生命体のモデルであり、「永遠」や「循環」への哲学を示している。ユープケッチャは自分の糞を食べることでその生活を完結させており、一つの円相を描きながら生きている。
現実世界では存在しないそれは、原子の循環というアイデアの上にないバーチャル空間でなら存在しうる。

「ユープケッチャはある哲学、もしくは思想をあらわす記号だ」
ーーー「方舟さくら丸」安部公房

この作品においては、ユープケッチャはバーチャル空間への明るい希望のシンボルである。`,
        en: `Eupcaccia in a Virtual World
Eupcaccia is a fictional creature depicted as a model of absolute life form in a Japanese classic novel
by Kobo Abe.
It completes its own life cycle by feeding on its feces forever with drawing a circle.
It can exist in a virtual world where entropy does not increase.
It is an optimistic symbol of hope towards the future of virtual reality.`
    },
    vcaption_eupcaccia: {
        ja: ``,
        en: ``
    },
    th_osorubeki: {
        ja: `恐るべき半導体製の子供たち`,
        en: `恐るべき半導体製の子供たち`
    },
    title_osorubeki: {
        ja: `恐るべき半導体製の子供たち`,
        en: `恐るべき半導体製の子供たち`
    },
    credit_osorubeki: {
        ja: `2019 / PC application
        “禁足地”出展 at コートヤードHIROO`,
        en: `2019 / PC application
        Exhibited in “Kinsokuchi” at Court yard HIROO`
    },
    link_osorubeki: {
        ja: "",
        en: ""
    },
    text_osorubeki: {
        ja: `鑑賞者の身体がカメラを通してリアルタイムに反映され、作者の身体と混じり合ってしまうインタラクティブアート。ゲームのフォーマットを用いて、インターネット時代のコミュニケーションにアプローチしました。`,
        en: `In this artwork, physical images of audiences are reflected through PC camera in real time, and they are combined with physical image of the artist. I mentioned communications among post internet generation using a game format.`
    },
    vcaption_osorubeki: {
        ja: ``,
        en: ``
    },
    th_japanesefaces: {
        ja: `日本人風之図`,
        en: `Japanese like faces`
    },
    title_japanesefaces: {
        ja: `日本人風之図`,
        en: `Japanese like faces`
    },
    credit_japanesefaces: {
        ja: `2018
Exhibied in “LOCI”
material : wood, cloth, woodblock printing`,
        en: `2018
Exhibied in “LOCI”
material : wood, cloth, woodblock printing`
    },
    link_japanesefaces: {
        ja: "",
        en: ""
    },
    text_japanesefaces: {
        ja: `
伝統的な木版画の技法を用いて、12人の同世代の日本人モデルから、それぞれ目鼻口輪郭を分けて版を作り、それらをランダムに組み合わせてすることで、それぞれのモデルを平均化したモンタージュ郡を制作しました。展示においては木と薄い布を用いてオブジェクトを作り、覗き込むと上下に貼られた鏡の回廊の中で、無限に続く日本人像と自身の顔に対面するインスタレーションを構築しています。
2017年の10月ごろはミャンマーのロヒンギャ問題が報道されていた頃で、グローバリゼーションとナショナリズムについて興味を持った中での、日本人の民族性を問い直す挑戦でした。`,
        en: `I made a lot of montages of general image of Japanese faces with using a traditioinal woodcut print technique. At first I made woodcuts from 12 Japanese models of close generation to me, then I divided their face parts to eyes, nose, mouth and outline, and print with them randomly. For the exhibition, I made an object which reminiscent of a shoji from wood and a thin cloth. When one gets own head into the object and look up, he or she sees a corridor sandwiched with 2 mirrors is continueing with infinite number of Japanese montages and his or her own face in front. Through this work, I tried to comprehend the ethnicity of Japanese.`
    },
    vcaption_japanesefaces: {
        ja: ``,
        en: ``
    },
    th_secretplace: {
        ja: `秘密基地 - 親密な暗闇`,
        en: `Secret place - Whispers in a darkness`
    },
    title_secretplace: {
        ja: `秘密基地 - 親密な暗闇`,
        en: `Secret place - Whispers in a darkness`
    },
    credit_secretplace: {
        ja: `2017
material : wood, the second most black color
cooperator : Kosei Yamashita in architecture department of Waseda University
exhibited in school festival of TUA in 2017
reference : Anish Kapoor’s works
`,
        en: `2017
material : wood, the second most black color
cooperator : Kosei Yamashita in architecture department of Waseda University
exhibited in school festival of TUA in 2017
reference : Anish Kapoor’s works
`
    },
    link_secretplace: {
        ja: "",
        en: ""
    },
    text_secretplace: {
        ja: `高さ3mほどの人の入れる空間を作り、貝のランプを持って 入れるように開放しました。現代の茶室を目指し、2人で話し合うための、非日常的な暗闇の空間を制作しました。 この作品は瀬戸内を旅していた時に出会った早稲田大学建築科の学生との共同企画です。彼は茶室などの建築的アイデアを持ち込み、わたしはリレーショナルアートの文脈で作品制作を考えました。`,
        en: `This is an about 3 meters high hut to get into with holding a shell lamp and it opened in an exhibition. I aimed for a Japanese tea room, Chashitsu of today. There is a n unusual darkness inside and a viewer can talk with his or her close person. This project is a cooperated work with a student studying architecture in Waseda university. He suggested ideas of architecture such as Chashitsu, and I suggested the context of relational art.`
    },
    vcaption_secretplace: {
        ja: ``,
        en: ``
    },
    th_flatworks: {
        ja: `Paintings`,
        en: `Paintings`
    },
    title_flatworks: {
        ja: `Paintings`,
        en: `Paintings`
    },
    credit_flatworks: {
        ja: `~2017`,
        en: `~2017`
    },
    link_flatworks: {
        ja: "",
        en: ""
    },
    text_flatworks: {
        ja: ``,
        en: ``
    },
    vcaption_flatworks: {
        ja: ``,
        en: ``
    },
    th_omatsurisawagi: {
        ja: `御祭騒ぎ`,
        en: `Omatsurisawagi`
    },
    title_omatsurisawagi: {
        ja: `御祭騒ぎ`,
        en: `Omatsurisawagi`
    },
    credit_omatsurisawagi: {
        ja: `2015
Exhibied in “Tachibi sai”`,
        en: `2015
Exhibied in “Tachibi sai”`
    },
    link_omatsurisawagi: {
        ja: "",
        en: ""
    },
    text_omatsurisawagi: {
        ja: ``,
        en: ``
    },
    vcaption_omatsurisawagi: {
        ja: ``,
        en: ``
    },


}