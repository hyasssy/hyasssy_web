function thumbnail(number, link, imgsrc, captext, isonpage, mediatype) {
    var style = "";
    if (isonpage) {
        style = 'style="opacity:1"';//当該ページの場合は半透明じゃなくす。
    }
    var html = "";
    switch (number) {//いずれshowリストも追加する。
        case 16:
            html += '<div class="thumbnail-border"><div>▼Portfolio</div></div>';
            break;
        case 15:
            html += '<div class="thumbnail-space"></div>';
            html += '<div class="thumbnail-border"><div>▼2020</div></div>';
            break;
        case 9:
            html += '<div class="thumbnail-space"></div>';
            html += '<div class="thumbnail-border"><div>▼2019</div></div>';
            break;
        case 3:
            html += '<div class="thumbnail-space"></div>';
            html += '<div class="thumbnail-border"><div>▼~2018</div></div>';
            break;
        default: break;
    }
    html += '<div class="square-frame" ' + style + '>';
    html += '<div class="thumbnail-media" ' + style + '>' + mediatype + '</div>'
    html += isonpage ? '<span>' : '<a href="' + link + '">';//同じページにリンクしないようにする処置
    html += '<div class="square-content" style="background-image: url(' + imgsrc + ');"></div>';
    html += isonpage ? '</span>' : '</a >';
    html += '<div class="thumbnail-caption" ' + style + '>' + captext + '</div>';
    html += '</div>';
    document.write(html);
}
function thumbnaillist(number, pagenumber) {
    switch (number) {
        case 16: thumbnail(number, 'portfolio.pdf", target="_blank', '../img/thumbnail/t_portfolio.jpg', '2020 Mar.', pagenumber == number, '');
            break;
        case 15: thumbnail(number, 'y2020_caniseeyounow.html', '../img/thumbnail/t_caniseeyounow.jpg', 'Can I see You now?', pagenumber == number, 'online app');
            break;
        case 14: thumbnail(number, 'y2020_iwanttogetclosemore.html', '../img/thumbnail/t_iwanttogetclosemore.jpg', 'I want to get close more...', pagenumber == number, 'video');
            break;
        case 13: thumbnail(number, 'y2020_lumiererule.html', '../img/thumbnail/t_lumiererule.jpg', 'Lumiere rule', pagenumber == number, 'video');
            break;
        case 12: thumbnail(number, 'y2020_followingthesun_photo.html', '../img/thumbnail/t_followingthesun_photo.jpg', 'Following the Sun', pagenumber == number, 'photo');
            break;
        case 11: thumbnail(number, 'y2020_thumbnail.html', '../img/thumbnail/t_koko.jpg', 'ここ', pagenumber == number, 'video');
            break;
        case 10: thumbnail(number, 'y2020_isyourbodyyours.html', '../img/thumbnail/t_isyourbodyyours.jpg', 'Is your body yours?', pagenumber == number, 'VR installation');
            break;
        case 9: thumbnail(number, 'y2019_selfportrait.html', '../img/thumbnail/t_selfportrait.jpg', 'Self-portrait', pagenumber == number, 'flat work');
            break;
        case 8: thumbnail(number, 'y2019_practicetowalk.html', '../img/thumbnail/t_practicetowalk.jpg', 'practice to walk', pagenumber == number, 'video');
            break;
        case 7: thumbnail(number, 'y2019_followingthesun.html', '../img/thumbnail/t_followingthesun.jpg', 'Following the Sun', pagenumber == number, 'video');
            break;
        case 6: thumbnail(number, 'y2019_sowhoami.html', '../img/thumbnail/t_sowhoami.jpg', 'So, who am I?', pagenumber == number, 'VR installation');
            break;
        case 5: thumbnail(number, 'y2019_eupcaccia.html', '../img/thumbnail/t_eupcaccia.jpg', 'Eupcaccia', pagenumber == number, 'simulation');
            break;
        case 4: thumbnail(number, 'y2019_osorubeki.html', '../img/thumbnail/t_osorubeki.jpg', '恐るべき子供達', pagenumber == number, 'simulation');
            break;
        case 3: thumbnail(number, 'y2018_japanesefaces.html', '../img/thumbnail/t_japanesefaces.jpg', '日本人風之図', pagenumber == number, 'installation');
            break;
        case 2: thumbnail(number, 'y2017_secretplace.html', '../img/thumbnail/t_secretplace.jpg', 'secret place', pagenumber == number, 'installation');
            break;
        case 1: thumbnail(number, 'y2017_paint.html', '../img/thumbnail/t_paint.jpg', 'flat works', pagenumber == number, 'flat work');
            break;
        case 0: thumbnail(number, 'y2015_omatsurisawagi.html', '../img/thumbnail/t_omatsurisawagi.jpg', '御祭騒ぎ', pagenumber == number, 'flat work');
            break;
        default: break;
    }
}
function workthumbnailtop(pagenumber) {
    for (var i = 16; i > 0; i--) {
        thumbnaillist(i, pagenumber);
        if (pagenumber == i) return;
    }
}
function workthumbnailbottom(pagenumber) {
    for (var i = 16; i >= 0; i--) {
        if (pagenumber > i) thumbnaillist(i, pagenumber);
    }
}