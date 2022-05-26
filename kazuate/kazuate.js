let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);

let kaisu = 0;

hantei();

function hantei() {
    let yoso = 4;
    kaisu = kaisu + 1;
    console.log(kaisu + "回目の予想: " + yoso);
    if (yoso === kotae) {
        console.log("正解です。おめでとう！");
    } 
    else if (yoso !== kotae && yoso > kotae) {
        console.log("まちがい。答えはもっと小さいですよ");
    }
    else {
        console.log("まちがい。答えはもっと大きいですよ");
    }
    if (kaisu > 3) {
        console.log("答えは " + kotae + " でした．すでにゲームは終わっています");
    }
    
}

let p = document.querySelector('p#result');
p.textContent = kotae;

