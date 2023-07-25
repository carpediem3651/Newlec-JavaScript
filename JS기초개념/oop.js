// console.log("------------생성자-----------");
// {
//     function f1() {
//         console.log("f1");
//         console.log(this);
//         this.kor=20;
//     }

//     var x1 = f1();
//     console.log("x1:", x1);
//     console.log("---------------------");
//     var x2 = new f1();
//     console.log("x2:", x2);

//     console.log("-------------------");

//     function Exam(){
//         var kor=10;
//         var eng=10;
//         var math=20;

//         this.total = function(){
//             return kor+eng+math;
//         }
//     }

//     var exam = new Exam();
//     console.log("total", exam.total());

//     console.log(exam.kor); // var kor에 왜 접근할 수 없지?
// }

// console.log("------------overload constructor----------")
// {
//     function Exam(kor, eng, math){
//         this.kor = kor || 0;
//         this.eng = eng || 0;
//         this.math = math || 0;

//         this.total = function() {
//             return this.kor+this.eng+this.math;
//         }

//         this.avg = function(){
//             return this.total()/3;
//         }
//     }

//     var exam = new Exam();
//     console.log("total", exam.total());
//     console.log("avg", exam.avg());
//     console.log("---------------------");

//     var exam = new Exam(10,10,10);
//     console.log("total", exam.total());
//     console.log("avg", exam.avg());
//     console.log("----------------------");

//     var exam1 = new exam.constructor(1,2,3);
//     console.log("total", exam1.total());
//     console.log("avg", exam1.avg());
// }

// {
//     var exam1 = new Exam(1,1,1);
//     var exam2 = new Exam(2,2,2);
//     console.log(exam1.total === exam2.total); // false 함수가 중복 생성되는 문제가 발생한다.

// =======================Prototype 생성자=========================

    // 변하는 요소인 '데이터'
    // function Exam(kor, eng, math) {
    //     this.kor = kor || 0;
    //     this.eng = eng || 0;
    //     this.math = math || 0;
    // }

    // // 변하지 않는 요소인 함수를 prototype으로 지정한다.
    // Exam.prototype = {
    //     total:function(){
    //         return this.kor+this.eng+this.math;
    //     },
    //     avg:function(){
    //         return this.total()/3;
    //     }
    // }

    // var exam5 = new Exam(2,2,2);
    // var exam6 = new Exam(4,5,6);
    // console.log(exam5.total === exam6.total); // true 객체가 같다. 함수를 공유하고 있다는 뜻이므로 함수의 중복생성 문제가 되었던 앞선 문제가 해결된다.


// ========================ProtoType을 이용한 캡슐화================================


// ========================객체/속성 관리=========================
// {
//     var nums = [];
//     console.log(nums instanceof Array);
//     console.log(Array.isArray(nums));
// }

//  ======================== 프로토타입 얻기====================
// {
//     function NewlecExam(){

//     }

//     NewlecExam.prototype = exam5;
//     var newExam = new NewlecExam();

//     console.log(newExam.__proto__);
//     console.log(Object.getPrototypeOf(newExam));
//     console.log(NewlecExam.prototype);
   
//     function Omok() {
//         this.x = 0;
//         this.y = 0;
//     }

//     console.log(Omok.prototype);
//     console.log(Omok.prototype.constructor);

//     var omok1 = new Omok();
//     console.log(omok1.constructor); 

//     Omok.prototype = {};

//     var omok2 = new Omok();
//     console.log(omok2.constructor);
// }

// ================상속================
{
    var base = {
        kor:10,
        eng:20,
        math:30
    };

    var exam = {
        com:10,
        __proto__:base
    };

    var exam2 = {
        com:20,
        __proto___:base
    }

    exam.kor = 3;
    exam2.kor = 4;
    console.log(exam.kor, exam.eng, exam.math, exam.com);
    console.log(exam2.kor, exam2.eng, exam2.math, exam2.com);
}