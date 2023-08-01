// --------------------- 클래스의 기본 사용법 ----------------------------
{
//     class Exam {
//         constructor(kor=0, eng=0, math=0) {
//             this.kor = kor;
//             this.eng = eng;
//             this.math = math;
//         }

//         total() {
//             return this.kor+this.eng+this.math;
//         }
//     }

//     let exam = new Exam(10,20,30);
//     console.log(exam.total());
}

// ----------------------- 보호모드 ---------------------------
{
    // class Exam {
    //     #kor; // private
    //     #eng;
    //     #math;

    //     constructor(kor=0, eng=0, math=0) {
    //         this.#kor = kor;
    //         this.#eng = eng;
    //         this.#math = math;
    //     }

    //     total() {
    //         return this.#kor+this.#eng+this.#math;
    //     }
    // }

    // let exam = new Exam(10,20,30);
    // console.log(exam.total());
}

// ----------------------- getters / setters ---------------------------
{
    // class Exam {
    //     #kor; // private
    //     #eng;
    //     #math;

    //     constructor(kor=0, eng=0, math=0) {
    //         this.#kor = kor;
    //         this.#eng = eng;
    //         this.#math = math;
    //     }

    //     total() {
    //         return this.#kor+this.#eng+this.#math;
    //     }

    //     get kor(){
    //         return this.#kor;
    //     }

    //     set kor(value){
    //         this.#kor = value;
    //     }

    //     get eng(){
    //         return this.#eng;
    //     }

    //     set eng(value){
    //         this.#eng = value;
    //     }

    //     get math(){
    //         return this.#math;
    //     }

    //     set math(value){
    //         this.#math = value;
    //     }
    // }

    // let exam = new Exam(10,20,30);
    // //exam.setKor(400);
    // //exam.setKor(exam.getKor()+1);
    // exam.kor++; // setter 설정
    // exam.kor=400;
    // exam.eng--;
    // exam.eng=300;
    // exam.math++;
    // exam.math=500;
    // //console.log(exam.getkor());
    // console.log(exam.kor); // getter 설정
    // console.log(exam.eng);
    // console.log(exam.math);
    // // console.log(exam.total());
}

// ----------------------- static 변수 및 메서드 활용 ---------------------------
{
    // class Exam {
    //     #kor; // private
    //     #eng;
    //     #math;
    //     static #count; // 클래스 생성 이전 메모리에 올라갈 때 count는 load된다.

    //     constructor(kor=0, eng=0, math=0) {
    //         this.#kor = kor;
    //         this.#eng = eng;
    //         this.#math = math;
    //         Exam.#count++; // 전역변수 count는 Exam의 멤버변수가 아니지만, 사용할 때는 '클래스명.static변수'로 사용한다.
    //     }

    //     static { // static 초기화 
    //         Exam.#count = 100;
    //     }

    //     static get count() { // static get
    //         return Exam.#count;
    //     }

    //     static set count(value) { //static set
    //         Exam.#count = value;
    //     }

    //     static getKor(exam) { 
    //         return exam.#kor;
    //     }


    // }

    // let exam = new Exam(10,20,30);
    // console.log(Exam.count); // static 변수 호출
    // console.log(Exam.getKor(exam)); // static 메소드 출력방법
}

// -----------------------상속 ---------------------------
{
    // class Exam {
    //     #kor; // private
    //     #eng;
    //     #math;
    //     static #count; // 클래스 생성 이전에 count는 load된다.

    //     constructor(kor=0, eng=0, math=0) {
    //         this.#kor = kor;
    //         this.#eng = eng;
    //         this.#math = math;
    //         Exam.#count++; // 전역변수 count는 Exam의 멤버변수가 아니지만, 사용할 때는 '클래스명.static변수'로 사용한다.
    //     }

    //     static { // static 초기화 
    //         Exam.#count = 100;
    //     }

    //     static get count() { // static get
    //         return Exam.#count;
    //     }

    //     static set count(value) { //static set
    //         Exam.#count = value;
    //     }

    //     static getKor(exam) { 
    //         return exam.#kor;
    //     }

        
    //     get kor(){
    //         return this.#kor;
    //     }
        
    //     set kor(value){
    //         this.#kor = value;
    //     }
        
    //     get eng(){
    //         return this.#eng;
    //     }
        
    //     set eng(value){
    //         this.#eng = value;
    //     }
        
    //     get math(){
    //         return this.#math;
    //     }
        
    //     set math(value){
    //         this.#math = value;
    //     }

    //     total() {
    //         return this.kor+this.eng+this.math;
    //     }
    // }
    
    // let exam = new Exam(10,20,30);
    
    // class NewlecExam extends Exam {
    //     #com;

    //     constructor(kor,eng,math,com) {
    //         super(kor,eng,math); // 자바는 생성자를 만들면, 부모의 생성자를 받아오는 걸 생략 했지만, 자바스크립트는 이를 허용하지 않는다.
    //         this.#com = com;
    //     }

    //     total(){
    //         return super.total() + this.#com;
    //     }
    // }

    // let exam2 = new NewlecExam(10,10,10,10);
    // console.log(exam2.total()); // 40
    // console.log(typeof exam2, typeof Exam, typeof NewlecExam); // object function function
    // console.log(exam instanceof Exam, exam2 instanceof Exam) // true true
    // console.log(Object.hasOwn(exam.__proto__, 'total')); // true
}