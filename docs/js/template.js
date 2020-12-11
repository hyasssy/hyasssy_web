// ヘッダーとコピーライトのテンプレート

function header(type) {
    var html = "";
    var path = type == 'top' ? '' : '../';
    html += '<div id="nav-container">';
    html += '<input id="nav-input" type="checkbox" class="nav-unshown">'
    html += '<label id="nav-open" for="nav-input">'
    html += '<img src="' + path + 'img/icon/icon_navi.png" alt="icon">';
    html += '</label>';
    html += '<label class="nav-unshown" id="nav-close" for="nav-input"></label>';
    html += '<div id="nav-contents">';
    html += '<div id="nav-wrapper">';
    html += '<a href="' + path + 'index.html" class="nav-title">Top</a>';
    html += '<a href="' + path + 'news/index.html" class="nav-title">News</a>';
    html += '<a href="' + path + 'works/index.html" class="nav-title">Works</a>';
    //Textsはとりあえずコンテンツが充足するまで消しておく
    //html += '<a href="' + path + 'texts/index.html" class="nav-title">Texts</a>';
    html += '<a href="' + path + 'contact/index.html" class="nav-title">Contact?</a>';
    html += '<div class="nav-snsicon"><a icon" href="https://instagram.com/hyasssy" target="_blank" ><img src="' + path + 'img/icon/icon_1.png" alt="icon"></a>';
    html += '<a icon" href="https://twitter.com/hyasssy" target="_blank" ><img src="' + path + 'img/icon/icon_2.png" alt="icon"></a></div>';
    html += '</div>';//nav-wrapper
    html += '</div>';//nav-contents
    html += '</div>';//nav-container
    html += '<div class="header">';
    if (type == 'top') {
        html += '<div>Yuto&nbsp;Hayashi</div>';
        html += '<div class="header-list-container">';
        html += '<a class ="header-list" href="news/index.html">news</a>';
        html += '<a class ="header-list" href="works/index.html">works</a>';
        //Textsはとりあえずコンテンツが充足するまで消しておく
        //html += '<a class ="header-list" href="texts/index.html">texts</a>';
        html += '<a class ="header-list" href="contact/index.html">contact?</a>';
        html += '</div>';//header-list-container
    } else {
        html += '<a href="../index.html">Yuto&nbsp;Hayashi</a>';
        html += '<div class="header-list-container">';
        if (type == 'news') {
            html += '<div class ="header-list">NEWS</div>';
        } else {
            html += '<a class ="header-list" href="../news/index.html">news</a>';
        }
        if (type == 'works') {
            html += '<div class ="header-list">WORKS</div>';
        } else if (type == 'works-contents') {
            html += '<a class ="header-list" href="../works/index.html">WORKS</a>';
        }
        else {
            html += '<a class ="header-list" href="../works/index.html">works</a>';
        }
        //Textsはとりあえずコンテンツが充足するまで消しておく
        /*if (type == 'texts') {
            html += '<div class ="header-list">TEXTS</div>';
        } else {
            html += '<a class ="header-list" href="../texts/index.html">texts</a>';
        }*/
        if (type == 'contact') {
            html += '<div class ="header-list">CONTACT?</div>';
        } else {
            html += '<a class ="header-list" href="../contact/index.html">contact?</a>';
        }
        html += '</div>';//header-list-container
    }
    html += '</div>';
    document.write(html);
}

function copyright() {
    var html = "";
    html += '<div class="copyright">';
    html += '<span>©️ 2020, Yuto Hayashi</span>';
    //html += '<a href="https://www.instagram.com/hyasssy" target="_blank" >Instagram </a>';
    //html += '<a href="https://twitter.com/hyasssy" target="_blank" >Twitter</a>';
    html += '</div>';
    document.write(html);
}

function langswitchbutton() {
    var html = "";
    html += '<div id="lang-selector">'
    html += '<input type="radio" name="langKbn" id="sJa" onClick="langSet(' + "'ja')" + '" checked>';
    html += '<label for="sJa" class="langsetbtn">';
    html += '<span class="langCng" lang="ja">日本語</span>';
    html += '<span class="langCng" lang="en">日本語</span>';
    html += '</label>';
    html += '<span class="langsetbtn">/</span>'
    html += '<input type="radio" name="langKbn" id="sEn" onClick="langSet(' + "'en')" + '">';
    html += '<label for="sEn" class="langsetbtn">';
    html += '<span class="langCng" lang="ja">English</span>';
    html += '<span class="langCng" lang="en">English</span>';
    html += '</label>';
    /*html += '<div class="langCng" lang="ja">テスト</div>';使い方
    html += '<div class="langCng" lang="en">test</div>';*/
    html += '</div>'

    document.write(html);
}

//言語切り替え
function langSet(argLang) {
    // --- 切り替え対象のclass一覧を取得 ----------------------
    var elm = document.getElementsByClassName("langCng");
    for (var i = 0; i < elm.length; i++) {
        // --- 選択された言語と一致は表示、その他は非表示 -------
        if (elm[i].getAttribute("lang") == argLang) {
            elm[i].style.display = '';
        }
        else {
            elm[i].style.display = 'none';
        }
    }
}