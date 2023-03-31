// 請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個
// 字母是否為大寫。

// isUpperCase("abcd") 正確回傳值：false

// isUpperCase("Abcd") 正確回傳值：true

// isUpperCase("ABCD") 正確回傳值：true

// isUpperCase("aBCD") 正確回傳值：false

//  > 'A'  &&   < 'Z' => 大寫

// 判斷式
// 讀取字串第一個字元

function isUpperCase(str){
    
    let firstCharIndex = str[0];
    if(firstCharIndex >= 'A' && firstCharIndex <= 'Z'){
        console.log(true);
    }else{console.log(false);}
}
isUpperCase("kBCD");

