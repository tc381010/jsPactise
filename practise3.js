// 練習三：寫一個能夠印出 n 個 * 的函式

// 寫一個函式 star，接收一個參數 n，並印出 n 個 *
// （禁止使用內建函式 repeat）

// star(1) 預期輸出：
// *
// star(5) 預期輸出：
// *****
// star(10) 預期輸出：
// **********

// function stare(x){
//     for( let i = 1; i <= x; i++ ){
//        console.log('*')
//     }
//    }
   
//    stare(5);

//    function star (n) {
//     var a = ''
//     for (var i = 1; i<=n;i++){
//     a = a+'*'
//     }
//     console.log(a.length) //加入個指令方便確認到底出了幾顆星
//     console.log(a)
//    }
//    star(10)

function star(n){
 let a = ''
 for( let i = 1; i <= n; i++ ){
     
     a = a + '*'
    }
 console.log(a);
}
star(7);