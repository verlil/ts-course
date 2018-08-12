//string
let myName: string = 'Lilia';
//myName = 24; //wrong

//number
let myAge = 24;
myAge = 24.5; //TypeScript doesn't takes care about type of number, integer or float are both numbers

//boolean
let hasHobbies = true;
//hasHobbies = 0; //wrong

//assign type
let myRealAge; // TS treats this variable as type 'any'
//let myRealAge: any;
myRealAge = 24;
myRealAge = '24';

//array
let hobbies = ['Cooking', 'Reading']; //array of strings
console.log(typeof hobbies); //'object'
console.log(typeof hobbies[0]); //'string'
//hobbies = [100]; //"Type 'number[]' is not assignable to type 'string[]'."
//hobbies = ['One', 'Two', 3]; //"Type 'number[]' is not assignable to type 'string[]'."
let contacts = ['Phone', 3124578596];
console.log(typeof contacts); //'object'
//contacts = [true]; // Type 'boolean[]' is not assignable to type '(string | number)[]'.

let books: (string | boolean)[];
books = ['Think fast', true];

books = [true, 'Think fast'];
books = [true, 'Think fast', false, 'Think slow'];
//books = [1, 'Think fast']; //Type '(string | number)[]' is not assignable to type '(string | boolean)[]'.

//tuples
let adress: [string, number] = ['Street', 1];
//adress = [1, 'Street'];//Type 'number' is not assignable to type 'string'. Type 'string' is not assignable to type 'number'.
//adress = ['Street', 1, 'Street'];//Type '[string, number, string]' is not assignable to type '[string, number]'.

enum Color {
    Gray,
    Green = 7,
    Blue
}

let myColor: Color = Color.Green;
console.log(Color);// {0: "Gray", 7: "Green", 8: "Blue", Gray: 0, Green: 7, Blue: 8}
console.log(Color.Gray);// 0
console.log(myColor);// 7
console.log(typeof myColor);// number