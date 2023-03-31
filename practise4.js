// for(var a=0;a<10;a++){
//     console.log('ais:'+a);
// }
// console.log('last:'+a);
// for(var b=0;b<10;){
//     b++;
//     console.log('bis:'+b);
// }
// console.log('last:'+b);

// var c=0
// while(c<10){
//     c++;
//     console.log('cis:'+c)
    
// }


// 練習四：寫一個能回傳 n 個 * 的函式

// 請寫出一個叫做 star 的 function 並且接受一個參數 n，能回傳 n 個 *。

// star(1) 會回傳 *
// star(5) 會回傳 *****

// 所以 console.log(star(5)) 的預期輸出是：
// *****

function star(n){
    let a='';
    for(let i = 1; i <= n; i++){
        a += '*'
    }
    return a;
    // console.log(a);
}
console.log(star(10));
// star(a);