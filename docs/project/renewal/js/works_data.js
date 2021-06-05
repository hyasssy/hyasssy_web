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
    }
}

*/


const _thumbnaildata = [
    {
        root_id: "portfolio",
        img_url: "./img/thumbnails/t_portfolio.jpg"
    },
    {
        root_id: "cisyn",
        img_url: "./img/thumbnails/t_cisyn.jpg"
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
        root_id: "omatsurisawagi",
        img_url: "./img/thumbnails/t_omatsurisawagi.jpg"
    }
]

const _documentdata = {
    //keyネームは_thumbnaildataのroot_id
    //他の要素: title_hoge, credit_hoge, text_hoge, vcaption_hoge
    //hogeにはkeyが入る。 textの方のデータに入れてくのでお忘れなく。
    portfolio: {
        links: [{ id: "link_portfolio", url: "./data/portfolio.pdf" }],
        imgs: [],
        topimgurl: "./img/portfolio_top.jpg",
        topvideourl: ""
    },
    cisyn: {
        links: [{ id: "link_cisyn", url: "https://caniseeyounow.tokyo/" }],
        imgs: ["./img/cisyn/img1.jpg", "./img/cisyn/img5.jpg", "./img/cisyn/img3.jpg"],
        topimgurl: "",
        topvideourl: "https://www.youtube.com/embed/9RZtiaJZQzg"
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
        links: [{ id: "link_fts_photo", url: "hoge" }],
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
    omatsurisawagi: {
        links: [],
        imgs: [],
        topimgurl: "./img/omatsurisawagi/img1.jpg",
        topvideourl: ""
    }


}

const _textdata = {
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
        ja: ">>Link",
        en: ">>Link"
    },
    text_portfolio: {
        ja: ``,
        en: ``
    },
    th_cisyn: {
        ja: `Can I see You now?
        online app / 2020`,
        en: `hoge
        2020`
    },
    title_cisyn: {
        ja: `Can I see You now?`,
        en: `Can I see You now?`
    },
    credit_cisyn: {
        ja: `Artist : Yuto Hayashi
Engineer : Tabi Morinaga
2020 / online application
関連作品: “I want to get close more...”`,
        en: `Artist : Yuto Hayashi
Engineer : Tabi Morinaga
2020 / online application
Related work: “I want to get close more...”`
    },
    link_cisyn: {
        ja: ">>特設サイトリンク",
        en: ">>Specialised website"
    },
    text_cisyn: {
        ja: `前作“I want to get close more...”プロジェクトの発展として、オンラインプレイ可能なPCアプリケーションを設計しました。
2020年、人々は物理的な距離によって強烈に隔てられました。今、私たちはどうやって人に会うことができるのでしょう？`,
        en: `This piece is a progress of the previous work, “I want to get close more...”.
In 2020, people were strongly separated by physical distance. How can we meet people now? As an attempt this time, I designed a session.
*This work is a PC application that is played online.
`
    },
    vcaption_cisyn: {
        ja: `Trailer`,
        en: `Trailer`
    }
}