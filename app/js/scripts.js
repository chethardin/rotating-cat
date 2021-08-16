let c = 0;
setInterval(function () { w() }, 30);
function w() { c += 0.001; document.querySelector(".js-kitty").style.transform = 'scale(' + c + ')' }