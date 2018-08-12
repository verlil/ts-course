let myName: string = "Lilia";
let myAge: number = 24;

//myName = 30; //this will compile to JS despite the fact that this variable is string
//myAge = "";

let anything; //this will be wrong with flag ("noImplicitAny": true,) (?)
anything = 12;

function controlMe(isTrue: boolean) {
    let result: number;
    if (isTrue){
        result = 12;
    } else {
        result = 13;
    }
    return result;
}
//with flag ("strictNullChecks": true,) it throws: (Variable 'result' is used before being assigned.)

function controlMe2(isTrue: boolean, somethingElse: boolean) {
    let result: number;
    if (isTrue){
        result = 12;
    } else {
        result = 13;
    }
    return result;
}
//with flag ("noUnusedParameters": true,) it throws('somethingElse' is declared but its value is never read.)