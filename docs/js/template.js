// テンプレート
function header(type) {
    var html = "";
    html += '<div class="header">';
    if (type == 'top') {
        html += '<a id="header-title" href="index.html" target="_top">Yuto&nbsp;Hayashi</a>';
        html += '<div class="header-list">';
        html += '<a href="works/index.html" target="_top">works</a>';
        html += '<a href="news/index.html" target="_top">news</a>';
        html += '<a href="cv/index.html" target="_top">cv</a>';
        html += '<a href="contact/index.html" target="_top">contact?</a>';
    } else {
        html += '<a id="header-title" href="../index.html" target="_top">Yuto Hayashi</a>';
        html += '<div class="header-list">';
        var works = type == 'works' ? 'WORKS' : 'works';
        var news = type == 'news' ? 'NEWS' : 'news';
        var cv = type == 'cv' ? 'CV' : 'cv';
        var contact = type == 'contact' ? 'CONTACT?' : 'contact?';
        html += '<a href="../works/index.html" target="_top">' + works + '</a>';
        html += '<a href="../news/index.html" target="_top">' + news + '</a>';
        html += '<a href="../cv/index.html" target="_top">' + cv + '</a>';
        html += '<a href="../contact/index.html" target="_top">' + contact + '</a>';
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

function thumbnail(link, imgsrc) {
    var html = "";
    html += '<div class="square-frame">';
    html += '<a href="' + link + '">';
    html += '<div class="square-content" style="background-image: url(' + imgsrc + ');"></div>';
    html += '</a >';
    html += '</div>';
    document.write(html);
}
function workthumbnail() {
    thumbnail('../index.html', '../img/topimg1.jpg');
    thumbnail('../index.html', '../img/topimg2.jpg');
}