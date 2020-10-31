function thumbnail(link, imgsrc, captext) {
    var html = "";
    html += '<div class="square-frame">';
    html += '<a href="' + link + '">';
    html += '<div class="square-content" style="background-image: url(' + imgsrc + ');"></div>';
    html += '</a >';
    html += '<div class="thumbnail-caption">' + captext + 'aaaaaaaaaaaaa</div>';
    html += '</div>';
    document.write(html);
}
function workthumbnail() {
    thumbnail('y2020_caniseeyounow.html', '../img/y2020_caniseeyounow/img4.jpg');
    thumbnail('y2020_iwanttogetclosemore.html', '../img/y2020_iwanttogetclosemore/thumbnail.jpg');
    thumbnail('y2020_lumiererule.html', '../img/y2020_lumiererule/thumbnail.jpg');
    thumbnail('y2020_followingthesun_photo.html', '../img/y2020_followingthesun_photo/img1.jpg');
    thumbnail('y2020_thumbnail.html', '../img/y2020_koko/img1.jpg');
    thumbnail('y2020_isyourbodyyours.html', '../img/y2020_isyourbodyyours/img4.jpg');
    thumbnail('y2019_selfportrait.html', '../img/y2019_selfportrait/img1.jpg');
    thumbnail('y2019_practicetowalk.html', '../img/y2019_practicetowalk/img4.jpg');
    thumbnail('y2019_followingthesun.html', '../img/y2019_followingthesun/img1.jpg');
    thumbnail('y2019_sowhoami.html', '../img/y2019_sowhoami/img1.jpg');
    thumbnail('y2019_eupcaccia.html', '../img/y2019_eupcaccia/img3.jpg');
    thumbnail('y2019_osorubeki.html', '../img/y2019_osorubeki/img1.jpg');
    thumbnail('y2018_japanesefaces.html', '../img/y2018_japanesefaces/img1.jpg');
    thumbnail('y2017_secretplace.html', '../img/y2017_secretplace/img1.jpg');
    thumbnail('y2017_paint.html', '../img/y2017_paint/img1.jpg');
    thumbnail('y2015_omatsurisawagi.html', '../img/y2015_omatsurisawagi/img1.jpg');
}