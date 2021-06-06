var defaultLang = (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language ||
    window.navigator.userLanguage ||
    window.navigator.browserLanguage;
var currentLang = defaultLang;

$(document).ready(function () {
    setthumbnail(document.querySelector("#thumbnailtargetpos"), _thumbnaildata);
    // setdocument("testid1");
    // console.log(_documentdata.testid1.value);
    settext();
    $('#ja_button').on('click', function () {
        button_ja();
        return false;
    });
    $('#en_button').on('click', function () {
        button_en();
        return false;
    });
    Object.keys(_documentdata).forEach(function (key) {
        // console.log(key);
        $("#" + key).on('click', function () {
            button_thumbnail(key);
            return false;
        });
    }, _documentdata);
});



function setthumbnail(targetelement, thumbnaildata) {
    for (var i = 0; i < thumbnaildata.length; i++) {
        var content = document.querySelector("#thumbnail_template").content;
        var clone = document.importNode(content, true);
        var root = clone.querySelector(".thumbnail_box");
        // root.href = "#" + thumbnaildata[i].root_id;
        // console.log(root.href);
        root.id = thumbnaildata[i].root_id
        var thumbnail = clone.querySelector(".thumbnail");
        thumbnail.style.backgroundImage = "url('" + thumbnaildata[i].img_url + "')";
        var title = clone.querySelector(".thumbnail_title");
        title.id = "th_" + thumbnaildata[i].root_id;
        targetelement.appendChild(clone);
    }
}

function setvideo(targetelement, captiontextid, targeturl) {
    var content = document.querySelector("#video_template").content;
    var clone = document.importNode(content, true);
    var caption = clone.querySelector(".video_caption");
    caption.id = captiontextid;
    var youtubeurl = clone.querySelector("#youtubeiframe");
    youtubeurl.src = targeturl;
    targetelement.appendChild(clone);
}

function setdocument(documentdata_key) {
    //_documentdata オブジェクトのキーを参照している。キーをidとしても使っているので、アクセスしやすく、重複して同じものを書いたりしなくて済むようデータ構造を工夫しているつもり。
    var documentdata = _documentdata[documentdata_key];
    var content = document.querySelector("#document_template").content;
    var clone = document.importNode(content, true);
    var root = clone.querySelector(".document_wrapper");
    root.id = documentdata_key;
    var topmedia = clone.querySelector(".document_topmedia");
    if (documentdata.topimgurl != "") {
        // topmedia
        var img = document.createElement("img");
        img.src = documentdata.topimgurl;
        topmedia.appendChild(img);
        console.log(documentdata.topimgurl);
    } else {
        var topvideocaptionid = "vcaption_" + documentdata_key;
        setvideo(topmedia, topvideocaptionid, documentdata.topvideourl);
    }
    var title = clone.querySelector(".work_title");
    title.id = "title_" + documentdata_key;
    var credit = clone.querySelector(".work_credit");
    credit.id = "credit_" + documentdata_key;
    //複数回回す
    var link = clone.querySelector(".work_link");
    for (var i = 0; i < documentdata.links.length; i++) {
        var a = document.createElement("a");
        a.href = documentdata.links[i].url;
        a.id = documentdata.links[i].id;
        a.target = "_blank";
        link.appendChild(a);
        link.appendChild(document.createElement("br"));
    }
    var description = clone.querySelector(".work_description");
    description.id = "text_" + documentdata_key;
    var imgbox = clone.querySelector(".work_imgbox");
    for (var i = 0; i < documentdata.imgs.length; i++) {
        // console.log(documentdata.imgs[i]);
        var img = document.createElement("img");
        img.src = documentdata.imgs[i];
        img.alt = "";
        imgbox.appendChild(img);
    }
    $('#' + documentdata_key).after(clone) + '"';
    //フェードインをhideをはさむだけのお手軽実装。hideは隠してるだけで要素の検索とかは同じフレーム内でも問題なさそう。
    $(".document_wrapper").hide().fadeIn(400);
    settext();
}

function button_thumbnail(targetid) {
    //今アクティブなやつ消す
    var activecontent = document.getElementsByClassName("document_wrapper")[0];
    var issame = false;
    if (activecontent != null) {
        // console.log(activecontent);
        if (activecontent.id == targetid) {
            issame = true;
        }
        //フェードアウト。ディレイ処理で完全に消すようにしてるけど、もしかしていらない？
        $(activecontent).fadeOut(200);
        setTimeout(function () {
            // console.log("null");
            activecontent.innerHTML = "";
            activecontent.remove();

        }, 200);
    }
    if (issame != true) {
        setdocument(targetid);
        //スクロール
        var targetelement = document.getElementById(targetid);
        var pos = targetelement.offsetTop;
        $("html, body").animate({ scrollTop: pos }, 500);
        scrollTo(0, pos);
    }
}
function button_en() {
    currentLang = "en";
    settext();
}
function button_ja() {
    currentLang = "ja";
    settext();
}
function settext() {
    console.log("translate" + currentLang);
    if (currentLang == "ja") {
        $('#ja_button').css('display', 'none');
        $('#en_button').css('display', 'block');
    } else {
        $('#ja_button').css('display', 'block');
        $('#en_button').css('display', 'none');
    }
    Object.keys(_textdata).forEach(function (key) {
        var target = document.getElementById(key);
        if (target != null) {
            target.innerHTML = ht_str(currentLang == "ja" ? _textdata[key].ja : _textdata[key].en);
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