// ヘッダーとコピーライトのテンプレート

function header(type) {
    var html = "";
    var path = type == 'top' ? '' : '../';

    var parent = document.createElement("div");
    parent.className = "";
    document.querySelector("#hoge").appendChild(parent);
}
