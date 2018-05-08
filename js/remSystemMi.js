// (function (doc, win) {
//         var docEl = doc.documentElement,
//             resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//             recalc = function () {
//                 var clientWidth = docEl.clientWidth;
//                 if (!clientWidth) return;
//                 if(clientWidth=375){
//                     docEl.style.fontSize = '100px';
//                 }if (clientWidth>=414){
//                     docEl.style.fontSize = 100 * (clientWidth / 414) + 'px';
//                 }
//                 docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
//             };

//         if (!doc.addEventListener) return;
//         win.addEventListener(resizeEvt, recalc, false);
//         doc.addEventListener('DOMContentLoaded', recalc, false);
//     })(document, window);
(function(doc, win) {
    var html = doc.getElementsByTagName("html")[0],
        // orientationchange->手机屏幕转屏事件
        // resize->页面大小改变事件(一边pc端有用)
        reEvt = "orientationchange" in win ? "orientationchange" : "resize",
            reFontSize = function() {
                var clientW = doc.documentElement.clientWidth || doc.body.clientWidth;
                    if(!clientW) {
                        return;
                    }
                    html.style.fontSize = 50 * (clientW / 375) + "px";
                }
            win.addEventListener(reEvt, reFontSize);
            // DOMContentLoaded->dom加载完就执行,onload要dom/css/js都加载完才执行
            doc.addEventListener("DOMContentLoaded", reFontSize);
            })(document, window);