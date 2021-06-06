// 初期言語読み込みうまくないかも？

// ブラウザのデフォ言語を取得し、それに応じてテキストをセットする。
// テキスト情報もまとめて挿入。


var defaultLang = (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language ||
    window.navigator.userLanguage ||
    window.navigator.browserLanguage;
var currentLang = defaultLang;
$(document).ready(function () {
    settext();
    $('#ja_button').on('click', function () {
        button_ja();
        return false;
    });
    $('#en_button').on('click', function () {
        button_en();
        return false;
    });
});

const _data = {
    cv_selfintro: {
        ja: `1997年生まれ。東京藝術大学油画→大学院メディア映像研究科/身体・距離・バーチャルについて研究・制作/2019ユーラシア大陸横断:石橋財団海外渡航プログラム/S.C.L.3期生:xR開発プログラム/UT-virtual5期生`,
        en: `Tokyo University of the Arts Oil painting → New Media
Study and make about body/distance/virtual.
Traveled crossing Eurasian continent supported by Ishibashi foundation(2019)
Spacial Computing Lab 3rd member
UT-Virtual 5th member`
    },
    cv_text1: {
        ja: `東京多摩地区生まれ。新興住宅地で育つ`,
        en: `Born in Tokyo Tama area. Grew up in a new town`
    },
    cv_text2: {
        ja: `桐朋高校卒業`,
        en: `Graduate Toho high school`
    },
    cv_text3: {
        ja: `株式会社DonutsでVtuber企画エンジニア勤務`,
        en: `Work in Inc.Donuts as an Engineer of a Vtuber project`
    },
    cv_text4: {
        ja: `石橋財団海外渡航プログラムの助成を受けユーラシア大陸横断を達成`,
        en: `Achieve to travel to cross Eurasian continent owe to Ishibashi foundation scholorship`
    },
    cv_text5: {
        ja: `東京藝術大学美術学部油画専攻卒業`,
        en: `Tokyo University of the Arts, Tokyo, BFA`
    },
    cv_text6: {
        ja: `東京藝術大学映像学部修士メディア映像専攻入学`,
        en: `Tokyo University of the Arts New Media department`
    },
    cv_text7: {
        ja: `浅草おでん大多福VRプロジェクト`,
        en: `VR service for old Oden shop, “Otafuku” in Asakusa`
    },
    cv_showhistory: {
        ja: `展示歴`,
        en: `Exhibition`
    },
    cv_showtext1: {
        ja: `タチ美大作展示 金賞受賞（東京）`,
        en: `Tachibi Exhibition, Tokyo`
    },
    cv_showtext2: {
        ja: `上野商店街展示（東京）`,
        en: `Ueno shopping street Exhibition, Tokyo`
    },
    cv_showtext3: {
        ja: `ターナーギャラリー5人展（東京）`,
        en: `Group show, Turner gallery, Tokyo`
    },
    cv_showtext4: {
        ja: `KURUMI gallery『LOCI』展示（東京）`,
        en: `“LOCI”, Kurumi galleery, Tokyo`
    },
    cv_showtext5: {
        ja: `3331Arts Chiyoda『NI/O』展示（東京）`,
        en: `“NI/O”, 3331Arts Chiyoda, Tokyo`
    },
    cv_showtext6: {
        ja: `コートヤード広尾『禁足地』展示（東京）`,
        en: `“Kinsokuchi”, Court-Yard HIROO, Tokyo`
    },
    cv_showtext7: {
        ja: `石橋財団奨学生成果報告展示（東京）`,
        en: `Ishibashi foundation scolorship program exhibition, Tokyo`
    },
    cv_showtext8: {
        ja: `東京藝術大学油画ギャラリー『はやしとかずま』展示（東京）`,
        en: `“Hayashi and Kazuma”, Yuga gallery, Tokyo`
    },
    cv_showtext9: {
        ja: `東京藝術大学卒業制作展示（東京）`,
        en: `TUA Graduate exhibition, Tokyo`
    },
    cv_showtext10: {
        ja: `東京藝大メディア映像研究科『OPEN STUDIO 2020』（WEB展示）`,
        en: `TUA New media “OPEN STUDIO 2020”, Online show`
    },
    cv_showtext11: {
        ja: `東京藝大メディア映像研究科『MEDIA PRACTICE 20-21』（横浜）`,
        en: `TUA New media “MEDIA PRACTICE 20-21”, Yokohama`
    },
    cv_last: {
        ja: `など`,
        en: ``
    }

}
function button_en() {
    currentLang = "en";
    settext();
}
function button_ja() {
    currentLang = "ja";
    settext();
}
function settext() {
    console.log("translate" + currentLang);
    if (currentLang == "ja") {
        $('#ja_button').css('display', 'none');
        $('#en_button').css('display', 'block');
    } else {
        $('#ja_button').css('display', 'block');
        $('#en_button').css('display', 'none');
    }
    Object.keys(_data).forEach(function (key) {
        var target = document.getElementById(key);
        if (target != null) {
            target.innerHTML = ht_str(currentLang == "ja" ? _data[key].ja : _data[key].en);
        }
    });
}

//改行やスペースをコードに落とし込んだstringに変換する。
function ht_str(str) {
    if (str == null) return '';
    str = str.toString();
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    // str = str.replace( / /g,'&nbsp;' );
    // str = str.replace( /\t/g,'&nbsp;&nbsp;&nbsp;&nbsp;' ); // Tabをスペース4つに..
    str = str.replace(/\r?\n/g, "<br />\n");
    return str;
}
