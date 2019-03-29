localStorage["start"] = 1;
console.log("スタート");
var i = -1;
var n = 0;

var timer1 = setInterval("assy()",foots * 1000);

function assy() {
  if ( localStorage["start"] == 1 ) {
    // 1は何を指し示しているのでしょうか。１秒のことですか？
    c = document.getElementsByClassName('list_view_user_photo image-circle');
    // 画像を指定してる。
    i++;
      // c++ではなくi++の理由は何でしょうか？
  	if ( i < c.length ) {
      c[i].parentNode.click();
      // 親要素をクリックしていくということで良いでしょうか？
      n++;
      // ++つまり+1にすることで次の女性をクリックするための操作ということで良いですか。
      console.log(n+"人");
  	} else {
      i = -1;
      // -1つまり該当無しの場合ということでしょうか？
      document.getElementsByClassName("pager_next button_c button_white_a")[0].click()
          // 次のページへということで良いですか。
    }
  } else {
    clearInterval(timer1);
    // これは次のページがなくなったら停止というメソッドで良いですか。
  }
}
