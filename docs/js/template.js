// テンプレート
function header(type){
var html = "";
html += '<div class="header">';
if(type == 'top'){
html += '<a id="header-title" href="index.html" target="_top">Yuto Hayashi</a>';
html += '<div class="header-list">';
html += '<a href="works/index.html" target="_top">works</a>';
html += '<a href="news/index.html" target="_top">news</a>';
html += '<a href="cv/index.html" target="_top">cv</a>';
html += '<a href="contact/index.html" target="_top">contact?</a>';
}else{
html += '<a id="header-title" href="../index.html" target="_top">Yuto Hayashi</a>';
html += '<div class="header-list">';
var works = type == 'works' ? 'WORKS' : 'works';
var news = type == 'news' ? 'NEWS' : 'news';
var cv = type == 'cv' ? 'CV' : 'cv';
var contact = type == 'contact' ? 'CONTACT?' : 'contact?';
html += '<a href="../works/index.html" target="_top">' + works + '</a>';
html += '<a href="../news/index.html" target="_top">'+ news + '</a>';
html += '<a href="../cv/index.html" target="_top">' + cv + '</a>';
html += '<a href="../contact/index.html" target="_top">' + contact + '</a>';
}
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

