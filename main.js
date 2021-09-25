$(function(){
    // $( document ).ready(function() {
    // });
    // これと同じ感じです。
    // イベント定義などはイベントを定義する要素の読み込み後に定義する必要があります。

    // test_clickというクラスに「click」イベントを定義
    $('.test_click').on('click', function () {
        console.log('クリックしました。');
        alert($(this).attr(msg));
    })
});

// 関数定義は外側でもOK
// あらかじめ読み込んでおきたいし、外側の方が良いかも？
function not_return(){
    // 戻り値がない関数は動きに関することなど
    alert('呼べばOK');
}

function exec_return(){
//    戻り値がある関数は計算など、結果に意味のある処理
    let result;
    result = 1 + 1;
    // 計算することではなく、計算結果に意味がある
    // 計算結果が欲しいから、returnが必要
    return result;
}