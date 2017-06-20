/**
 * Created by danawacomputer on 2017-06-20.
 */

// window.alert("Hello");

/*
// 01. 변수
var a = 5;
var b = 3;

var result = a + b;

var d;  //값이 정해지지 않으면 undefined(null과는 다르다.)
var dd = null;

a = 10; //변수 변경
result = a + b;

console.log(result);

document.write('<h2>안녕하세요</h2>');    //html body-tag를 객체로 만들어둔 것, 대표적인 DOM(동적 수행 예시)
 */

/*
// 02. 연산자
var acc = 3;
acc += 5; // 누적 연산자

acc++;

console.log(acc);
*/

/*
// 03. 문자열 결합
var a = '안녕하세요';
var b = '자바스크립트';
var c = true;

console.log(a+b+c);
console.log(a, b, c);
*/

/*
// 04. for 문
for (var i = 0 ; i < 5 ; i++) {
    console.log(i + '번째 손님 응대중입니다.');
    console.log(i, '번째 손님 응대중입니다.');
}

console.log('구구단 프로그래밍');
for (var i = 1 ; i <= 9 ; i++) {
    for (var j = 1 ; j <= 9 ; j++) {
        console.log(i+'단', i + '*' + j + '=' + i*j)
    }
}
*/

/*
// 06. while 문
var i = 0;
while (i < 5) {
    console.log(i + '번째 손님 응대중');
    i++;
}
*/

/*
// 07. if 문
/!**
 * @JAVASCRIPT_TYPE
 * 숫자 타입, number    .. 0(false) or 나머지(true)
 * 문자 타입, string    .. null, undefined, '', "" (false) or 나머지(true)
 * 배열 타입, []        .. [] (empty array) & 나머지 둘 다 true
 *!/
if (1) {                        //java 에서는 boolean type 만 올 수 있어서 1,0은 안된다.(0외의 숫자는 모두 참)
    console.log('true case');
} else {
    console.log('false case');
}

if (3 > 5) {
    console.log('true case');
} else {
    console.log('false case');
}
*/

/*
// 08. 논리 연산자
var a = 3;
var b = a || 0; //javascript 에서만 통용

console.log(b); //b에 값이 들어가면 a, 아니면 0이 출력(undefined 대신 값이 없을 때 'default 값' 설정)
*/

/*
// 09. 배열 기본
var arr = ['a', 'b', 'c'];

arr.push('world');          //.pop 은 제거

console.log(arr);

console.log(arr[2]); //세 번째 값 출력

for (var i = 0 ; i < arr.length ; i++) {
    console.log(arr[i]);
}

for (var item in arr) {
    console.log(arr[item]);
}
*/

/*
// 10. 함수 : 함수를 정의하는 것과 실행하는 것(call, invoke, 호출, 적용한다(apply, 함수형 프로그래밍에서) 등)은 다른 부분
function addTwoNumbers(a, b) {
    return a + b;
}

console.log(addTwoNumbers(2, 3));

var subTwoNumbers = function (a, b) {   //함수를 변수에 할당할 수 있다, 익명함수, 맨 뒤에 ; 필요
    return a - b;
};

console.log(subTwoNumbers(2, 3));

var multiplyTwoNumbers = function (a, b) {
    console.log(a * b);
};

var ret = multiplyTwoNumbers(4, 6);
console.log(ret);                       //return 값 없으면 undefined return

//중첩 함수(함수 안에 함수)
function plusThree(a) {
    var resultOutter = a + 3;       //3+3=6

    function plusTwo() {
        return resultOutter + 2;    //바깥에 있는 resultOutter 를 참조, closer(자신을 정의한 함수의 변수를 참조할 수 있다, 모든 inner 함수는 closer)
    }

    return plusTwo(resultOutter)
}

console.log(plusThree(3));

//콜백 함수 (함수형 프로그래밍 기본) : 자바스크립트는 single Thread
var addingFunction = function (firstNum, secondNum) {
    return firstNum + secondNum;
};

var substractingFunction = function (a, b) {
    return a - b;
}

function getCalcNumbers(a, b, func) {
    return func(a, b);
}

var result1 = getCalcNumbers(10, 20, addingFunction);
var result2 = getCalcNumbers(10, 20, substractingFunction)

console.log(result1);
console.log(result2);

function sum(datas) {
    var acc = 0;
    for (var item in datas) {
        acc += datas[item];
    }
    return acc;
}

function calcNumbers(datas, func) {
    return func(datas);
}

var arr = [1, 2, 3, 4, 5, 6];
console.log(calcNumbers(arr, sum));


// function average(datas) {
//     return sum(datas) / datas.length;
// }

function average(datas) {
    var temp = 0;
    for (var item in datas) {
        if (item == 0) {
            temp = datas[item];
        } else {
            temp = ((temp * item) + datas[item]) / (parseInt(item) + 1);
        }
    }
    return temp;
}

console.log(calcNumbers(arr, average));


function makeSquare(val) {
    return function () {
        return val * val;
    }
}

var square = makeSquare(3)(); //결과가 함수를 return
console.log(square);
*/


/*
//11. 변수의 스코프(scope of variables)
function scopeTest(a) {
    var b = 5;

    if (1) {
        var c = 3;
        console.log(c);
    }

    console.log(b, c);  //block scope(java에서는 c가 안찍힌다 -> function scope, ECMAscript 6에서는 지원)
}

scopeTest();

function scopeTest2(a) {    //Setting -> Languages&Frameworks -> javascrip -> language version -> ECMAscript 6
    let b = 5;

    if (1) {
        let c = 3;
        console.log(c);
    }

    //console.log(c);  //c가 안찍힌다, function scope
    console.log(b);
}

scopeTest2();
 */

/*
//window는 DOM(html 을 객체로)
window.alert('hello');

var clickConfirm = window.confirm('confirm');  //confirm 은 확인, 취소 2개(확인은 true, 취소는 false)

if (clickConfirm) {
    console.log('확인을 클릭하셨습니다.');
} else {
    console.log('취소를 클릭하셨습니다.');
}
*/


// 12. 자바스크립트 객체(Literal)
var obj = {};

var num = 5;
var str = 'hello';
var bool = true; // false
var arr = [];
var obj = {};               //literal 형식에 따라 type이 정해진다.

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof arr);    //배열은 내부적으로는 object type으로 인식
console.log(typeof obj);


var art1 = {
    articleId: 1,
    title: 'hello',
    author: 'kim',
    content: '테스트에요..'
};

var art2 = {
    articleId: 2,
    title: '제목',
    author: 'lee',
    content: '테스트2에요..',
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    }
};

console.log(art1.title);
console.log(art2.add(2, 3));

var artList =
    [
        {
            articleId: 1,
            title: 'hello',
            author: 'kim',
            content: '테스트에요..'
        },
        {
            articleId: 2,
            title: '제목',
            author: 'lee',
            content: '테스트2에요..'
        }
    ];



















