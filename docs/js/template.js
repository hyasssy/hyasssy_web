// テンプレート
function header(type){
var html = "";
var works = type == 'works' ? 'WORKS' : 'works';
var news = type == 'news' ? 'NEWS' : 'news';
var cv = type == 'cv' ? 'CV' : 'cv';
var contact = type == 'contact' ? 'CONTACT?' : 'contact?';
html += '<div class="header">';
html += '<a id="header-title" href="https://hyasssy.tokyo" target="_top">Yuto Hayashi</a>';
html += '<div class="header-list">';
html += '<a href="https://hyasssy.tokyo/works" target="_top">' + works + '</a>';
html += '<a href="https://hyasssy.tokyo/news" target="_top">'+ news + '</a>';
html += '<a href="https://hyasssy.tokyo/cv" target="_top">' + cv + '</a>';
html += '<a href="https://hyasssy.tokyo/contact" target="_top">' + contact + '</a>';
html += '</div>';
html += '</div>';
document.write(html);
}

function copyright(){
var html = "";
html += '<div id="copyright">';
html += '<span>©️ 2020, Yuto Hayashi - </span>';
html += '<a class="copyright-link" href="https://twitter.com/hyasssy" target="_blank" >Instagram </a>';
html += '<a class="copyright-link" href="https://www.instagram.com/hyasssy/?hl=ja" target="_blank" >Twitter</a>';
html += '</div>';
document.write(html);
}

