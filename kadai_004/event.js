// HTMLドキュメントが読み込み完了したときに「loadイベントが発生しました」とコンソールに出力する
// 画面をスクロールしたときに「scrollイベントが発生しました」とコンソールに出力する
$(window).on("load", () => {
  console.log("loadイベントが発生しました");
});
$(function() {
  $(window).on("scroll", () => {
    console.log("scrollイベントが発生しました");
  });
});
