document.getElementsByName("foot")[0].value = 1;
// =1というのは足跡間隔1秒から作成するということでよろしいですか？
document.getElementsByName('button')[0].onclick = function() {
// buttonはstartとstopのどちらを指し示すのか？
var foot = document.getElementsByName("foot")[0].value;
  // footはhtmlファイルのfootを指し示しているのでしょうか？
chrome.tabs.executeScript(null,{code: "var foots = "+foot+";"});
// +foot+は何を指し示しているのでしょうか？
chrome.tabs.executeScript(null, {file: "start.js"});
// chrome.tabs.executeScriptは外部からファイルを読んでいる。nullは何を意味しているのでしょうか？
}
document.getElementsByName('button')[1].onclick = function() {
// [1]は何を指し示すのでしょうか。
chrome.tabs.executeScript(null, {file: "stop.js"});
}
// テスト
