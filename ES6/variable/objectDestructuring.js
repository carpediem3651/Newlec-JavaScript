// ======================Object Destructuring #1====================
{
    // let exam = {kor:10, 
    //             eng:20,
    //             math:30,
    //             student:{
    //                 name:'newlec',
    //                 phone:'010-1111-2222'
    //             }};

    // let kor = exam.kor;
    // let eng = exam.eng;

    // 객체 뽀개기
    // let {kor,eng,com} = exam;
    // console.log(kor,eng,com);

    // 속성의 이름 바꾸기 kor -> korean
    // let {kor:korean} = exam;
    // console.log(korean);

    // ****뽀갠 것 안에있는 객체 뽀개기
    // let {kor, student:{name,phone}} = exam;
    // console.log(kor, name, phone);
}

// =================Array Destructuring #1=====================
{   
    // ---------배열을 뽀갤 때는 순서대로 뽀갠다. '키값'은 상관없다.
    // let kors = [10,20,30];
    //let kor = kors[0];
    //let kor2 = kors[1];
    //let kor3 = kors[2];
    // let [kor1,kor2,kor3] = kors;

    // console.log(kor1,kor2,kor3);

    // --------n 번째 배열을 제외하고 뽀개기------------
    // let [kor4,,kor5]=kors;
    // console.log(kor4,kor5);

    // --------재할당하여 값을 바꾸기
    // let kors1 = [90,80];
    // [kor1, kor2] = kors1;
    // console.log(kor1,kor2,kor3);
}

{
    // let kor = 20;
    // let eng = 30;
    // let math = 40;
    // let china = 50;

    // [eng,kor] = [kor,eng];
    // console.log(kor,eng);
}

{   // -------------**********이중배열 뽀개기-------------------
    // let kors = [[20,30,40,30],[40,30,20,30]];
    // let [[kor1,kor2,,],[kor3,kor4,,]] = kors;
    // console.log(kor1,kor2,kor3,kor4);
}

{ // -------------************기존 변수들을 이용하여 뽀개기----------------------
    // let kor1, kor2, eng;

    // let kors = [10,20,30];
    // let exam = {kor:20, eng:30, kors};

    // ({kor:kor1, eng, kors:[,,kor2]} = exam);

    // // console.log(kor1, eng, kor2);
}