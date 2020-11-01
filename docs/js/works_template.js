function thumbnail(link, imgsrc, captext, filename, mediatype) {
    var html = "";
    html += '<div class="square-frame">';
    html += '<div class="thumbnail-media">' + mediatype + '</div>'
    html += filename == link ? '<div>' : '<a href="' + link + '">';//同じページにリンクしないようにする処置
    html += '<div class="square-content" style="background-image: url(' + imgsrc + ');"></div>';
    html += filename == link ? '</div>' : '</a >';
    html += '<div class="thumbnail-caption">' + captext + '</div>';
    html += '</div>';
    document.write(html);
}
function workthumbnail(filename) {
    thumbnail('y2020_caniseeyounow.html', '../img/y2020_caniseeyounow/img4.jpg', 'Can I see You now?', filename, 'online app');
    thumbnail('y2020_iwanttogetclosemore.html', '../img/y2020_iwanttogetclosemore/thumbnail.jpg', 'I want to get close more...', filename, 'video');
    thumbnail('y2020_lumiererule.html', '../img/y2020_lumiererule/thumbnail.jpg', 'Lumiere rule', filename, 'video');
    thumbnail('y2020_followingthesun_photo.html', '../img/y2020_followingthesun_photo/img1.jpg', 'Following the Sun', filename, 'photo');
    thumbnail('y2020_thumbnail.html', '../img/y2020_koko/img1.jpg', 'ここ', filename, 'video');
    thumbnail('y2020_isyourbodyyours.html', '../img/y2020_isyourbodyyours/img4.jpg', 'Is your body yours?', filename, 'VR installation');
    thumbnail('y2019_selfportrait.html', '../img/y2019_selfportrait/img1.jpg', 'Self-portrait', filename, 'flatwork');
    thumbnail('y2019_practicetowalk.html', '../img/y2019_practicetowalk/img4.jpg', 'practice to walk', filename, 'video');
    thumbnail('y2019_followingthesun.html', '../img/y2019_followingthesun/img1.jpg', 'Following the Sun', filename, 'video');
    thumbnail('y2019_sowhoami.html', '../img/y2019_sowhoami/img1.jpg', 'So, who am I?', filename, 'VR installation');
    thumbnail('y2019_eupcaccia.html', '../img/y2019_eupcaccia/img3.jpg', 'Eupcaccia', filename, 'simulation');
    thumbnail('y2019_osorubeki.html', '../img/y2019_osorubeki/img1.jpg', '恐るべき子供達', filename, 'simulation');
    thumbnail('y2018_japanesefaces.html', '../img/y2018_japanesefaces/img1.jpg', '日本人風之図', filename, 'installation');
    thumbnail('y2017_secretplace.html', '../img/y2017_secretplace/img1.jpg', 'secret place', filename, 'installation');
    thumbnail('y2017_paint.html', '../img/y2017_paint/img1.jpg', 'flat works', filename, 'flat work');
    thumbnail('y2015_omatsurisawagi.html', '../img/y2015_omatsurisawagi/img1.jpg', '御祭騒ぎ', filename, 'flat work');
}