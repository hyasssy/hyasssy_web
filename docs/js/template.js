// テンプレート
function header(type) {
    var html = "";
    html += '<div class="header">';
    if (type == 'top') {
        html += '<a id="header-title" href="index.html" target="_top">Yuto&nbsp;Hayashi</a>';
        html += '<div class="header-list">';
        html += '<a href="works/caniseeyounow.html" target="_top">works</a>';
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
        html += '<a href="../works/caniseeyounow.html" target="_top">' + works + '</a>';
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
    thumbnail('../y2020_caniseeyounow.html', '../img/y2020_caniseeyounow/img4.jpg');
    thumbnail('../y2020_iwanttogetclosemore.html', '../img/y2020_iwanttogetclosemore/thumbnail.jpg');
    thumbnail('../y2020_lumiererule.html', '../img/y2020_lumiererule/thumbnail.jpg');
    thumbnail('../y2020_followingthesun_photo.html', '../img/y2020_followingthesun_photo/img1.jpg');
    thumbnail('../y2020_thumbnail.html', '../img/y2020_koko/img1.jpg');
    thumbnail('../y2020_isyourbodyyours.html', '../img/y2020_isyourbodyyours/img6.jpg');
    thumbnail('../y2019_selfportrait.html', '../img/y2019_selfportrait/img1.jpg');
    thumbnail('../y2019_practicetowalk.html', '../img/y2019_practicetowalk/img4.jpg');
    thumbnail('../y2019_followingthesun.html', '../img/y2019_followingthesun/img1.jpg');
    thumbnail('../y2019_sowhoami.html', '../img/y2019_sowhoami/img1.jpg');
    thumbnail('../y2019_eupcaccia.html', '../img/y2019_eupcaccia/img3.jpg');
    thumbnail('../y2019_osorubeki.html', '../img/y2019_osorubeki/img1.jpg');
    thumbnail('../y2018_japanesefaces.html', '../img/y2018_japanesefaces/img1.jpg');
    thumbnail('../y2017_secretplace.html', '../img/y2017_secretplace/img1.jpg');
    thumbnail('../y2017_paint.html', '../img/y2017_paint/img1.jpg');
    thumbnail('../y2015_omatsurisawagi.html', '../img/y2015_omatsurisawagi/img1.jpg');
}