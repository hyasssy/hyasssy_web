const _thumbnaildata = [
    {
        root_id: "testid1",
        img_url: "./img/exhidm.jpg",
        title_id: "title1"
    },
    {
        root_id: "testid2",
        img_url: "./img/exhidm.jpg",
        title_id: "title2"
    },
    {
        root_id: "testid3",
        img_url: "./img/exhidm.jpg",
        title_id: "title3"
    }
]

const _documentdata = {
    //keyネームは_thumbnaildataのroot_id
    testid1: {
        titleid: "doctitle1",
        creditid: "doccredit1",
        links: [{ id: "doclink1_1", url: "" }],
        descriptionid: "doctext1",
        imgs: ["./img/exhibs.jpg"],
        topimg: "",
        topvideourl: "",
        topvideocaption: ""
    },
    testid2: {
        titleid: "doctitle2",
        creditid: "doccredit2",
        links: [{ id: "doclink1_2", url: "" }],
        descriptionid: "doctext2",
        imgs: ["./img/exhidm.jpg"],
        topimg: "",
        topvideourl: "",
        topvideocaption: ""
    }
}

const _textdata = {
    title1: {
        ja: `タイトルサンプル
        aaa`,
        en: `title sample`
    },
    doctitle1: {
        ja: "aaaa",
        en: ""
    },
    doccredit1: {
        ja: ``,
        en: ``
    },
    doclink1_1: {
        ja: "aaaaa",
        en: ""
    },
    doctext1: {
        ja: "",
        en: ""
    }
}