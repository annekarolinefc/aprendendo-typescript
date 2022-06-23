// CÓDIGO JAVASCRIPT TAMBÉM EM TYPESCRIPT
function soma1(a,b){
    return a+b;
}

//O compilador infere o tipo das variáveis quando possível, caso contrário o tipo é definido implicitamente como 'any'
const n1 = 4*7/3; //infere como number
