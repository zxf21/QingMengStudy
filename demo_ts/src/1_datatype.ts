let flag: number = 123;
let arr: number[] = [1,2,3];


let arr2: Array<number> = [4,5];
let arr3: Array<number | string | boolean> = [1,2,'abc',true];

let arr4: [number, string] = [1, 'a'];//元祖 已知元素数量和类型的数组 

//枚举
enum Flag {
  success = 1,
  fail = 2
}

let s: Flag = Flag.success;
let f: Flag = Flag.fail;
// console.log(s);
// console.log(f);

enum Color {Red,Green = 5,Blue};

let r: Color = Color.Red;
let g: Color = Color.Green;
let b: Color = Color.Blue;
console.log(r);
console.log(g);
console.log(b);

