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
    html += '<a href="' + path + 'news/index.html" class="nav-title">News</a>';
    html += '<a href="' + path + 'works/index.html" class="nav-title">Works</a>';
    html += '<a href="' + path + 'texts/index.html" class="nav-title">Texts</a>';
    html += '<a href="' + path + 'cv/index.html" class="nav-title">CV</a>';
    html += '<a href="' + path + 'contact/index.html" class="nav-title">Contact?</a>';
    html += '<div class="nav-snsicon"><a icon" href="https://instagram.com/hyasssy" target="_blank" ><img src="' + path + 'img/icon/icon_insta.png" alt="icon"></a>';
    html += '<a icon" href="https://twitter.com/hyasssy" target="_blank" ><img src="' + path + 'img/icon/icon_twitter.png" alt="icon"></a></div>';
    html += '</div>';//nav-wrapper
    html += '</div>';//nav-contents
    html += '</div>';//nav-container
    html += '<div class="header">';
    if (type == 'top') {
        html += '<div>Yuto&nbsp;Hayashi</div>';
        html += '<div class="header-list-container">';
        html += '<a class ="header-list" href="news/index.html">news</a>';
        html += '<a class ="header-list" href="works/index.html">works</a>';
        html += '<a class ="header-list" href="texts/index.html">texts</a>';
        html += '<a class ="header-list" href="cv/index.html">cv</a>';
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
        if (type == 'texts') {
            html += '<div class ="header-list">TEXTS</div>';
        } else {
            html += '<a class ="header-list" href="../texts/index.html">texts</a>';
        }
        if (type == 'cv') {
            html += '<div class ="header-list">CV</div>';
        } else {
            html += '<a class ="header-list" href="../cv/index.html">cv</a>';
        }
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