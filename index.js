let shareBtn = document.querySelector('.share');
let websites = document.querySelectorAll('.box > div');

for (let i = 0; i < websites.length; i++){
    websites[i].onclick = function(){
        if (i == 0) {
            window.open('https://www.facebook.com/');
        }
        else if (i == 1) {
            window.open('https://www.instagram.com/')
        }
        else if (i == 2) {
            window.open('https://wa.me/201016749171')
        }
        else {
            window.open('https://maps.app.goo.gl/wie5NTt8z7JLEwUP9')
        }
    }
}
let shared = {
    'title': 'White Tex',
    'url': 'https://www.facebook.com/'
}
shareBtn.onclick = function () {
    navigator.share(shared);
}
let image = document.querySelector('.box div.location img');
image.onclick = function () {
    image.style.width = '125%'
}