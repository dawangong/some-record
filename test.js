// let arr =[1,2,3];

// function change (arr) {
// 	console.log(arr);
// 	arr = [];
// 	console.log(arr);
// }

// change(arr);

// console.log(arr);

// var a = [1,2,3];
// var b = a;
// a = [4,5,6];
// console.log(b);

// let arr = [1,2,3,4,5];
// let arr_ = arr.splice(0,1).concat([',']).join('');
// console.log(arr_);
// 
　　
function judgeLen(str)　　 {　　　　
    let strlen = 0;　　　　
    for (let i = 0; i < str.length; i++) {　　　　　　
        if (str.charCodeAt(i) > 255) {
            strlen += 2; //如果是汉字，则字符串长度加2
        }　　　　　　　　　　　　　　
        else {
            strlen++;
        }　　　　　　　　　　　　
    }　　　　
    return strlen;　　
}


function getNeedStr(str) {
		var strlens = judgeLen(str);
		if (strlens > 15) {
			str = str.slice(0, str.length - 1);
			return getNeedStr(str);
		} else {
			return str;
		}
	}


	let res = getNeedStr('你猜一猜我值不值呢来不试一试');
	console.log(res);