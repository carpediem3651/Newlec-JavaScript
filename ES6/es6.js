// let
{
    let x = 30;
    let y = 50;

    // console.log(x,y);
}

{
    // console.log(y);
    for(let i=0; i<5; i++);
    // console.log(i);
}

// const
{
    let direction = 1;
    const North = 1;
    const South = 3;
    direction = North;

    // North=4;

    // console.log(North);
}

// ====================``뺵틱( 범위 블록처럼 사용하면 편하다.), ${}, String raw(이스케이프 문자를 문자그대로 받아들이게 한다.)==========================================
{
    let title ="ES6";
    let color = "red";
    let className = "note";

    let template = '<section class="'+className+'"><h1 style=color:'+color+'>'+title+'</h1></section>';
    let template1 = String.raw`
    <section class=${className}> \n\n \" \' \`
        <h1 style=color:${color}>${title}</h1>
    </section>`;
    // console.log(template1);
}

// ======================향상된 JSON 표기법 1-1 (키와 변수가 같은경우)
{
    let kor = 30;
    let eng = 20;
    let math = 40;

    let exam = {kor, eng, math};
    // console.log(exam);
}

// ======================향상된 JSON 표기법 1-2 (간략해진 함수표기법)
{
    let kor = 30;
    let eng = 20;
    let math = 40;

    let exam = {kor, eng, math,
        total(){
            return this.kor+this.eng+this.math;
        },
        avg(){
            return this.total()/3;
        },
        numDouble(){
            return kor*eng*math;
        }
    };
    // console.log(exam);
}

// ======================향상된 JSON 표기법2=======================
{
    let kor = 30;
    let eng = 20;
    let math = 40;
    let aa = "com";

    let exam = {kor, eng, math,
        total(){
            return this.kor+this.eng+this.math;
        },
        avg(){
            return this.total()/3;
        },
        numDouble(){
            return kor*eng*math;
        },
        [aa+1]: 50
    };
    // console.log(exam.com1);
}

// ======================Object Destructuring #1====================
{
    let exam = {kor:10, 
                eng:20,
                math:30,
                student:{
                    name:'newlec',
                    phone:'010-1111-2222'
                }};

    // let kor = exam.kor;
    // let eng = exam.eng;

    // 객체 뽀개기
    // let {kor,eng,com} = exam;
    // console.log(kor,eng,com);

    // 속성의 이름 바꾸기 kor -> korean
    let {kor:korean} = exam;
    // console.log(korean);

    // ****뽀갠 것 안에있는 객체 뽀개기
    let {kor, student:{name,phone}} = exam;
    // console.log(kor, name, phone);
}

// =================Array Destructuring #1=====================
{   
    // ---------배열을 뽀갤 때는 순서대로 뽀갠다. '키값'은 상관없다.
    let kors = [10,20,30];
    //let kor = kors[0];
    //let kor2 = kors[1];
    //let kor3 = kors[2];
    let [kor1,kor2,kor3] = kors;

    // console.log(kor1,kor2,kor3);

    // --------n 번째 배열을 제외하고 뽀개기------------
    let [kor4,,kor5]=kors;
    // console.log(kor4,kor5);

    // --------재할당하여 값을 바꾸기
    let kors1 = [90,80];
    [kor1, kor2] = kors1;
    // console.log(kor1,kor2,kor3);
}

{
    let kor = 20;
    let eng = 30;
    let math = 40;
    let china = 50;

    [eng,kor] = [kor,eng];
    // console.log(kor,eng);
}

{   // -------------**********이중배열 뽀개기-------------------
    let kors = [[20,30,40,30],[40,30,20,30]];
    let [[kor1,kor2,,],[kor3,kor4,,]] = kors;
    // console.log(kor1,kor2,kor3,kor4);
}

{ // -------------************기존 변수들을 이용하여 뽀개기----------------------
    let kor1, kor2, eng;

    let kors = [10,20,30];
    let exam = {kor:20, eng:30, kors};

    ({kor:kor1, eng, kors:[,,kor2]} = exam);

    // console.log(kor1, eng, kor2);
}


// ================ Rest Parameter 이용하기 위한 매개값 전달 ==================
{
    // function print(x,y, ...aa) {
    //     console.log(x,y,aa[0],aa.length,arguments[0],arguments[2],arguments.length); // 비교를 통해 개념을 익혀보자.
    // }

    // print(3,4,5,6,7);
}

// ================ Spread Operator 이용하기 위한 매개값 전달 ==================
// Spread: 배열을 늘어뜨린다. 배열의 인자들을 하나의 요소들로 늘어뜨린다.
{
    // function print1(nums) {
    //     console.log(nums);
    // }

    // function print2(nums1,nums2,nums3,nums4) {
    //     console.log(nums1,nums2,nums3,nums4)
    // }

    // let nums = [4,34,23,12];

    // print1(nums);
    // print2(...nums); // 결과값:4 34 23 12

    // console.log('-----------사용 예-----------');
    // let nums2 = [...nums,1,3,2]; // 배열안의 배열을 하나의 배열로 표시하기에 유용하다.
    // console.log(nums2); 

    // console.log('-----------복합 예-----------');
    
    // function print2([x,y,z]) {
    //     console.log(x,y,z);
    // }

    // print2(nums);

    // function print3({kor,eng,math}) {
    //     console.log(kor,eng,math);
    // }

    // let exam = {kor:30, eng:20, math:80};
    // print3(exam);
}

// ================ 함수의 기본 값 ==================
{
    // // case 1.기본
    // function print(x,y=10,z) {
    //     console.log(x,y,z);
    //     console.log(arguments.length); // 결과값 : 1 -> aruments는 기본값(y=10)을 받지 않는다.'
        
    // }

    // print(10,null,10) // null은 원시 '값'이다 값이기 때문에 default value로 y=10이 작동하지 않는다.
    // print(10,undefined, 10); // undefiend은 값이 들어있지 않은 통이라고 생각하자. 그러면 왜 10이 나오는지 알 수 있다.
    // print(1);

    // case 2.초기값 함수
    // function sum() {
    //     return 100;
    // }

    // function print(x,y=sum(),z) {
    //     console.log(x,y,z);
    //     console.log(arguments.length); // 결과값 : 3
    // }

    // print(10,null,10) // null은 원시 '값'이다 값이기 때문에 default value로 y=10이 작동하지 않는다.
    // print(10,undefined, 10); // undefiend은 값이 들어있지 않은 통.
    // print(10,undefined);
    // print(1);

    // // case 3. 연산한 값을 매개변수로 쓰기
    // function sum() {
    //     return 100;
    // }

    // function print(x,y=sum(),z=x+1) {
    //     console.log(x,y,z);
    //     console.log(arguments.length); 
        
    // }

    // print(10,null,10) // null은 원시 '값'이다 값이기 때문에 default value로 y=10이 작동하지 않는다.
    // print(10,undefined, 10); // undefiend은 값이 들어있지 않은 통이라고 생각하자. 그러면 왜 10이 나오는지 알 수 있다.
    // print(10,undefined);
    // print(1);
}

// ==================Arrow Function====================
{
    //---------------- Arrow Function의 기본사용--------------------

//     let nums = [10,20,29,82,39,28,100];
//     nums.sort(function(a,b){
//         return a-b;
//     });
//     console.log(nums);

//     nums.sort((a,b)=>a-b);
//     console.log(nums);

//     //-------------------  차이점1: Arrow Function은 this를 가지지 않는다.--------------------
    // let x = 40;

    // setTimeout(function(){
    //     console.log(x);
    // },1000);

    // let game = {
    //     x:30,
    //     run(){
    //         setInterval(function(){
    //             this.x++; // this가 window 객체를 가지고 있기 때문(window객체에 x값 정의 안됨)에 NaN이 뜬다.
    //             console.log(this.x);
    //         }, 1000);
    //     }
    // };

    // // let game = {
    // //     x:30,
    // //     run(){
    // //         setInterval(()=>{
    // //             this.x++; // Arrow Function은 this를 가지고 있지 않기 때문에 x값을 활용할 수 있다.
    // //             console.log(this.x);
    // //         }, 1000);
    // //     }
    // // };

    // game.run();

//     // --------------------------차이점2 : Arrow Function은 arguments가 없다. --------------------------
    // let print = function(){
    //     console.log(arguments[0],arguments[1]) // 결과값 :2,3
    // }
    
    // let print1 = () => {
    //     console.log(arguments[0], arguments[1]); // 결과값 : error
    // }

    // print(2,3);
    // print1(2,3);

//     // --------------------------차이점 3 : Arrow Function은 생성자로 사용할 수 없다. this 관련 행위를 가지지 않는다. --------------------------
    // let print = function(){
    //     console.log('normal function', this); 
    // };
    
    // let print1 = () => {
    //     console.log('arrow function', this); 
    // }

    // print(2,3);
    // new print(2,3);

    // print1(2,3);
    // new print1(2,3); // 결과: Uncaught TypeError: print1 is not a constructor
}

//     // ----------------------- 차이점 4: call / bind / aplly를 사용할 수 없다. ----------------------- 
{

//     //  ---------------- bind() -----------------
//     let game = {
//         x:30 ,
//         run() {
//             console.log(this); // this는 game 객체를 가리킴 -> x:30이 출력됨
//             setTimeout(function(){
//                 console.log(this); // this는 가리키는 객체가 없기 때문에 window객체를 나타냄
//                 this.x++; // window객체에 x속성이 없으므로 NaN에러
//                 console.log(this.x);
//             }.bind(this), 1000); // bind()를 써서 외부 함수의 속성(x)을 끌어오는 문제를 해결. this는 game객체.
//         }
//     };

//     let f = function(a,b) {
//         console.log(a,b);
//         console.log(this);
//         this.x++;
//         console.log(this.x);
//     };
//     f();

//     // game.run();


//     // // ----------------- call() & apply ---------------------
//     let f = function(a,b) {
//         console.log(a,b);
//         console.log(this);
//         this.x++;
//         console.log(this.x);
//     };

//     let game2 = {
//         x:10
//     }

//     f.call(game,100,200); // f함수를 호출할 때 call()을 써서 매개변수를 변화 시킬 수 있다. game.f(); / game2.f(); 불가능 결과값: 31
//     f.call(game2);
//     f.apply(game2,[100,200]);
//     f();
}



