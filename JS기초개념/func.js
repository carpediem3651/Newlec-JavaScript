// 함수의 선언
{
    // var add = new Function("x, y", "return x+y;");
    // console.log(add(3,4));
    // var add = function(x,y){return x+y;};
    // console.log(add(3,4));
    // function add{x,y}{return x+y;};
    // console.log(add(3,4));
}

// 변하는 매개변수의 특징
// {
//     var add = function(){
//         console.log("arguments:"+arguments.length);
//         var x = arguments[0]; // 'arguments' 진짜 매개변수
//         var y = arguments[1];

//         var sum = 0;
//         for(var arg of arguments)
//             sum+=arg;
//         return sum;
//     };

//     console.log(add(2,3,4,5));
// }

//  전역변수의 특징
// {
    //case1.
    // a=1;
    // alert(a);

    // alert(a);
    // a=1;

    //case2.
    // var a = 1;
    // alert(a); // -> alert(window.a)

    // alert(a); // -> alert(window.a)
    // var a = 1;

    // a=1;
    // for(var k in window)
    //     console.log(k);
// }

// 지역변수의 특징
// {

    
//     var f1 = function(){
//         a=1;
//         a++;
//         var a;

//         alert(a); // 결과값 2
//         alert(window.a); // 결과값 undefined
//     }

//     f1();


//     a=1;
//     var a =2 ;
//     console.log(a); // 결과값 2

    
//     var a =2 ;
//     a=1;
//     console.log(window.a); // 결과값 1
// }

//Outer함수
{
    function f1() {
        var a = 1;
        console.log(a);

        function f2() {
            a=10;
            a++;
            console.log(a);
        }
        f2();
        console.log(a);
    }
    f1();
}

// Closure 함수
// {
//     var fClosuer = null;
//     var fClosuer2 = null;
//     var f1 = function() {
//         var a = 1;
//         a++;
//         console.log("f1:"+a);

//         function f2() {
//             a++;
//             console.log("f2:"+a);
//         }
//         window.fClosuer = f2;

//         function f3() {
//             a--;
//             console.log("f3:"+a);
//         }
//         window.fClosuer2 = f3;
//     }
    
//     f1();
//     f1();
//     f1();
//     fClosuer();
//     fClosuer2();
//     fClosuer();
//     fClosuer2();
// }
