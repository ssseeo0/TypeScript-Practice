// Unknown 타입

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = true;
  let c: unknown = "hi";
}

let unknownVar: unknown;

// let num: number = unknownVar;
// let str: string = unknownVar;
// let bool: boolean = unknownVar;

// never 타입
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
}

// void 타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    // void 가 undefined의 슈퍼타입이기 때문에 업 캐스팅
    return undefined;
  }
}

// any 타입
function anyExam() {
  let anyVar: any;
  let unknownVar: unknown;

  anyVar = unknownVar;
}
