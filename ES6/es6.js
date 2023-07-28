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
    let [[kor1, kor2],[kor3, kor4]] = kors;
    // console.log(kor1,kor2,kor3,kor4);
}

{ // -------------************기존 변수들을 이용하여 뽀개기----------------------
    let kor1, kor2, eng;

    let kors = [10,20,30];
    let exam = {kor:20, eng:30, kors};

    ({kor:kor1, eng, kors:[,,kor2]} = exam);

    console.log(kor1, eng, kor2);
}




