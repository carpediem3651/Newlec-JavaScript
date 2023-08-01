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

