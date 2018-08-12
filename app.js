"use strict";
var myName = "Lilia";
var myAge = 24;
//myName = 30; //this will compile to JS despite the fact that this variable is string
//myAge = "";
var anything; //this will be wrong with flag ("noImplicitAny": true,) (?)
anything = 12;
function controlMe(isTrue) {
    var result;
    if (isTrue) {
        result = 12;
    }
    return result;
}
//# sourceMappingURL=app.js.map