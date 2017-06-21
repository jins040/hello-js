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


/*
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
*/




// JQUERY 시작하기

/*
// 01. jQuery - hello
jQuery(document).ready(function () {        //Jquery 시작 format, parameter로 익명 함수
    var theText = $('h1').text();           //특정 element에 대한 조작

    console.log(theText);

    $('h1').text('너 어디가니?');

    var pText = $('p').text();
    console.log(pText);
    $('p').text('I am planning to go US!');
});
*/

/*
// 02. 셀렉팅
jQuery(document).ready(function () {
    $('li').first().text('seoul');              //list element 중 첫 번째 변화
    $('li').first().next().text('seoul');       //list element 중 첫 번째 다음 것 변화

    $('#destinations');                         //id selecting
    $('.promo');                                //class selecting

    $('#destinations li');                      //ul tag 하위 li selecting, 부모 자식 관계
    $('#destinations > li');                    //바로 직속 tag만(하위에 다른 ul tag 등 있으면 X)

    $('.promo, #destinations');                 //comma를 통한 나열
});
*/

/*
// 03. Pseudo classes, 필터 기능
jQuery(document).ready(function () {
    //$('#destinations li:first').text('대만');     //.first()와 비교(속도 등 성능 차이 존재)
    //$('#destinations li:last').text('마닐라');

    //$('#destinations li:odd').text('seoul');        //홀수 번째 li 변화(index가 0부터 시작, even은 짝수)

    $('#destinations').find('li').text('seoul');    //위 방법보다 .find()와 같이 chaining 방식이 속도 더 빠르다(.first()도 마찬가지)

    //.parent()는 바로 상위 단계로
    //.children('li')는 직속 하위 tag(#destinations > li 와 마찬가지)

    //CSS selector 주소 참고, ID는 하나만 존재하기 때문에 시작 점을 ID로(Class는 여러 개 가능)
    //#bookBigCon > ul:nth-child(1) > li:nth-child(2) > div.goods_img.bookTip > span > a > img
    $('#bookBigCon').children('ul').first().children('li').first().next()
        .children('div.goods.img.bookTip').children('span').children('a').children('img');

    //#eBookTabCon01 > div.newGoodsArea > ul > li:nth-child(1) > div.goods_info > p.goods_price
    $('#eBookTabCon01').children('div.newGoodsArea').children('ul').children('li').first()
        .children('div.goods_info').children('p.goods_price');
});
*/

/*
// 04. DOM 다루기
jQuery(document).ready(function() {
    var priceTag = $('<p>From $399.99</p>');
    $('#destinations').children('li.vacation').append(priceTag);    //html source에는 보이지 않지만 developer tool의 element에는 보인다
                                                                    //동적 tag는 developer에서만 보인다.

    $('#destinations').children('li.vacation').prepend(priceTag);   //append와 구분(위치 차이)

    $('#destinations').children('li.promo').remove();
});
*/

/*
// 05. 이벤트와 함께 DOM 다루기
jQuery(document).ready(function() {
    $('button').on('click', function() {
        //alert('button clicked');

        // //버튼 사라지게 한다.
        // $('#destinations').children('li.vacation').children('button').remove();
        // //버튼이 현재 위치에 나타나게 한다.
        // var priceTag = $('<p>From $399.99</p>');
        // $('#destinations').children('li.vacation').append(priceTag);

        // //버튼 사라지게 한다.
        // $(this).remove();                                        //this는 이벤트 발생 시점 기준
        // //버튼이 현재 위치에 나타나게 한다.
        // var priceTag = $('<p>From $399.99</p>');
        // $('#destinations').children('li.vacation').append(priceTag);

        //버튼이 현재 위치에 나타나게 한다.
        var priceTag = $('<p>From $399.99</p>');
        $(this).after(priceTag);
        //버튼 사라지게 한다.
        $('#destinations').children('li.vacation').children('button').remove();

    });
});
*/

/*
// 06. 이벤트가 적용되는 대상
jQuery(document).ready(function() {                                             //append, prepend 등 기존 html에는 없다가 추가로 생성된 부분에 대하여
    $('.vacation').on('click', 'button', function() {                           //아버지 element 기준으로 동적으로 생성된 버튼에도 event 할당
        //버튼이 현재 위치에 나타나게 한다.                                        //document 생성 이후 추가로 생성된 동적 이벤트는 작동하지 않는다.
        var priceTag = $('<p>From $399.99</p>');
        $(this).after(priceTag);
        //버튼 사라지게 한다.
        $('#destinations').children('li.vacation').children('button').remove();

    });
});
*/


// 07. 마우스 이벤트
jQuery(document).ready(function() {
    $('#destinations').on('mouseenter', 'li:nth-child(2)', function () {
        //$(this).parent('#destinations').children('li').last().hide();
        //$(this).parent('#destinations').children('li:last-child').fadeOut();
        $(this).closest('#destinations').children('li').last().prev().slideUp();
    });

    $('#destinations').on('mouseout', 'li:nth-child(2)', function () {
        $(this).parent('#destinations').children('li:last-child').prev().fadeIn();
    });
});

// 08. 키보드 이벤트(보통 key-up 때 동작하도록 한다.)
jQuery(document).ready(function() {
    $('#myForm').on('keyup', 'input:text', function() {
        var price = 562;
        //var quantity = +$(this).val();  // + 적어주면 parseInt 효과(String을 number로), Input box 값은 val로 받는다.
        var quantity = isNaN(+$(this).val()) ? 0 : +$(this).val();   // +$(this).val() === NaN은 3항 연산자(type까지 비교)
        $('#destinations').children('li').last().children('span').text(price * quantity);
    });
});














































