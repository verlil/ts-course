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

//enum
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

//functions
function returnMyName(): string {
    return myName;
    // return myAge; // wrong
}

console.log(returnMyName());

// void
function sayHello(): void {
    console.log('Hello');
}

//argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

// console.log(multiply(2, 'Lilia')); // wrong
console.log(multiply(2, 7));

// function types
let myMultiply: (val1: number, val2: number) => number;
// In functions the order of the types did matter
//myMultiply = sayHello;
// Type '() => void' is not assignable to type '(val1: number, val2: number) => number'.
// Type 'void' is not assignable to type 'number'.
//myMultiply(); // Expected 2 arguments, but got 0.
myMultiply = multiply;
console.log(myMultiply(1, 3));

// objects
let userData = {
    name: "Lilia",
    age: 24
};

//userData = {};
// Type '{}' is not assignable to type '{ name: string; age: number; }'.
// Property 'name' is missing in type '{}'.

// userData = {
//     a: "Lilia",
//     b: 24
// };
// Type '{ a: string; b: number; }' is not assignable to type '{ name: string; age: number; }'.
// Object literal may only specify known properties, and 'a' does not exist in type '{ name: string; age: number; }'.

userData = {
    age: 24,
    name: "Lilia"
};
// In objects the order isn't matter, but names of fields are.

let userData2: { age: number, name: string } = {
    name: "Lilia",
    age: 24
};

//complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [1, 5, 66.6],

    output: function (all: boolean): number[] {
        return this.data;
    }
};
console.log(complex.output(false));

//custom types (type alias)
type Complex = { data: number[], output: (all: boolean) => number[] };
//We use keyword "type", so despite the fact that our types explanations are on the right side
//of the "=" sign, we still just describing types of this type, not assigning them
let complex2: Complex = {
    data: [1, 5, 66.6],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

//union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true; // wrong

//check types
let finalValue = "A string";
if (typeof finalValue === "string"){
    console.log("string!");
}