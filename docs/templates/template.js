// テンプレート
function header(type){
var works = type == 'works' ? 'WORKS' : 'works';
var news = type == 'news' ? 'NEWS' : 'news';
var cv = type == 'cv' ? 'CV' : 'cv';
var contact = type == 'contact' ? 'CONTACT?' : 'contact?';
var html = "";
html += '<div id="header">';
html += '<a id="header-title" href="https://hyasssy.tokyo" style="text-decoration:none;" target="_top">Yuto Hayashi</a>';
html += '<a class="header-list" href="https://hyasssy.tokyo/works" style="text-decoration:none;" target="_top">' + works + '</a>';
html += '<a class="header-list" href="https://hyasssy.tokyo/news" style="text-decoration:none;" target="_top">'+ news + '</a>';
html += '<a class="header-list" href="https://hyasssy.tokyo/cv" style="text-decoration:none;" target="_top">' + cv + '</a>';
html += '<a class="header-list" href="https://hyasssy.tokyo/contact" style="text-decoration:none;" target="_top">' + contact + '</a>';
html += '</div>';
document.write(html);
}

function copyright(){
var html = "";
html += '<div id="copyright">';
html += '<span>©️ 2020, Yuto Hayashi - </span>';
html += '<a class="copyright-link" href="https://twitter.com/hyasssy" target="_blank" style="text-decoration:none">Instagram </a>';
html += '<a class="copyright-link" href="https://www.instagram.com/hyasssy/?hl=ja" target="_blank" style="text-decoration:none">Twitter</a>';
html += '</div>';
document.write(html);
}