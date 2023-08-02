function test() {
    console.log("lib1 module test");
}

function test1() {
    console.log("lib1 module test1");
}

export {test, test1} // 밖으로 내보이고 싶은 요소를 적는다.