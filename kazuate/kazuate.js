let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);

let kaisu = 0;

let l = document.querySelector('button#print');
l.addEventListener('click', hantei);

function hantei() {
    let yoso = document.querySelector('input[name="seisuu"]');
    let yoso1 = yoso.value;
    yoso1 = Math.floor(yoso1);
    kaisu = kaisu + 1;
    let dp = document.querySelector('p#yoso');
    dp.textContent = (kaisu + "回目の予想: " + yoso1);
    let d = document.querySelector('p#answer');
    
    
    if (kaisu > 3) {
       
        d.textContent = ("答えは " + kotae + " でした．すでにゲームは終わっています");
        
    } else {
        if (yoso1 === kotae) {
            d.textContent = ("正解です。おめでとう！");
        } 
        else if (yoso1 !== kotae && yoso1 > kotae) {
            d.textContent = ("まちがい。答えはもっと小さいですよ");
        }
        else {
            d.textContent = ("まちがい。答えはもっと大きいですよ");
        }
    }   
}





