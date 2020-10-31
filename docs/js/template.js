// テンプレート
function header(type) {
    var html = "";
    html += '<div class="header">';
    if (type == 'top') {
        html += '<a id="header-title" href="index.html">Yuto&nbsp;Hayashi</a>';
        html += '<div class="header-list">';
        html += '<a href="works/y2020_caniseeyounow.html">works</a>';
        html += '<a href="news/index.html">news</a>';
        html += '<a href="cv/index.html">cv</a>';
        html += '<a href="contact/index.html">contact?</a>';
    } else {
        html += '<a id="header-title" href="../index.html">Yuto Hayashi</a>';
        html += '<div class="header-list">';
        var works = type == 'works' ? 'WORKS' : 'works';
        var news = type == 'news' ? 'NEWS' : 'news';
        var cv = type == 'cv' ? 'CV' : 'cv';
        var contact = type == 'contact' ? 'CONTACT?' : 'contact?';
        html += '<a href="../works/y2020_caniseeyounow.html">' + works + '</a>';
        html += '<a href="../news/index.html">' + news + '</a>';
        html += '<a href="../cv/index.html">' + cv + '</a>';
        html += '<a href="../contact/index.html">' + contact + '</a>';
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