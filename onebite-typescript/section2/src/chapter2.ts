// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "kim", "seoyoung"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
// 유니온 타입 사용 가능
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
  [7, 8],
];

// 튜플
// number 타입의 요소를 2개 담은 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["이정환", 1],
  ["아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  //  [4, "이아무개"],
];
