var globalVar = "I'm a global variable";
let globallet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";





{
    //Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoper const";
}

console.log(globalVar)
console.log(globallet)
console.log(globalConst)

//onsole.log(blockVar)
//console.log(blockLet)

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError