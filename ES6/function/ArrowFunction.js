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

    //------------------------ 객체가 없는 일반함수의 this는 window객체를 가리킨다----------------------------------
    // let game = {
    //     x:30,
    //     run(){
    //         setInterval(function(){
    //             this.x++; // this가 window 객체를 가지고 있기 때문(window객체에 x값 정의 안됨)에 NaN이 뜬다.
    //             console.log(this.x);
    //         }, 1000);
    //     }
    // };

    // ----------------------- Arrow Function은 this를 가지지 않는다. 즉 this가 window객체를 가리키지 않는다.-------------------------
    // let game = {
    //     x:30,
    //     run(){
    //         setInterval(()=>{
    //             this.x++; // Arrow Function은 this를 가지고 있지 않기 때문에 x값을 활용할 수 있다.
    //             console.log(this.x);
    //         }, 1000);
    //     }
    // };

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
    // let game = {
    //     x:30 ,
    //     run() {
    //         console.log(this); // this는 game 객체를 가리킴 -> x:30이 출력됨
    //         setTimeout(function(){
    //             console.log(this); // this는 가리키는 객체가 없기 때문에 window객체를 나타냄
    //             this.x++; // window객체에 x속성이 없으므로 NaN에러
    //             console.log(this.x);
    //         }.bind(this), 1000); // bind()를 써서 외부 함수의 속성(x)을 끌어오는 문제를 해결. this는 game객체.
    //     }
    // };

//     let f = function(a,b) {
//         console.log(a,b);
//         console.log(this);
//         this.x++;
//         console.log(this.x);
//     };
//     f();

    // game.run();


//     // // ----------------- call() & apply() ---------------------
    // let f = function(a,b) {
    //     console.log(a,b);
    //     console.log(this);
    //     this.x++;
    //     console.log(this.x);
    // };

    // let game2 = {
    //     x:10
    // }

    // f.call(game,100,200); // game.f(); / game2.f(); 불가능 하지만 call()을 써서 가능하다.
    // f.call(game2);
    // f.apply(game2,[100,200]);
//     f();
}