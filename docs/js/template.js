// ヘッダーとコピーライトのテンプレート

var url_works = 'works/y2020_caniseeyounow.html';//worksページのトップ作品URL

function header(type) {
    var html = "";
    html += '<div class="header">';
    if (type == 'top') {
        html += '<div>Yuto&nbsp;Hayashi</div>';
        html += '<div class="header-list-container">';
        html += '<a class ="header-list" href="' + url_works + '">works</a>';
        html += '<a class ="header-list" href="news/index.html">news</a>';
        html += '<a class ="header-list" href="cv/index.html">cv</a>';
        html += '<a class ="header-list" href="contact/index.html">contact?</a>';
    } else {
        html += '<a href="../index.html">Yuto&nbsp;Hayashi</a>';
        html += '<div class="header-list-container">';
        if (type == 'works') {
            html += '<div class ="header-list">WORKS</div>';
        } else {
            html += '<a class ="header-list" href="../' + url_works + '">works</a>';
        }
        if (type == 'news') {
            html += '<div class ="header-list">NEWS</div>';
        } else {
            html += '<a class ="header-list" href="../news/index.html">news</a>';
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
    }
    html += '</div>';
    html += '</div>';
    document.write(html);
}

function copyright() {
    var html = "";
    html += '<div class="copyright">';
    html += '<span>©️ 2020, Yuto Hayashi - </span>';
    html += '<a href="https://www.instagram.com/hyasssy" target="_blank" >Instagram </a>';
    html += '<a href="https://twitter.com/hyasssy" target="_blank" >Twitter</a>';
    html += '</div>';
    document.write(html);
}