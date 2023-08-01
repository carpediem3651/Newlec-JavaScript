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