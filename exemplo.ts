// CÓDIGO JAVASCRIPT TAMBÉM EM TYPESCRIPT
function soma1(a,b){
    return a+b;
}

//O compilador infere o tipo das variáveis quando possível, caso contrário o tipo é definido implicitamente como 'any'
const n1 = 4*7/3; //infere como number

//Podemos indicar os tipos explicitamente
function soma2(a: number, b: number):number{
    return a+b;
}

//soma2("4"+5); //erro de tipo


//Podemos declarar tipos primitivos...
const varNumber: number = 1;
const varBoolean: boolean = false;
const varString: string = 'react';
const varUnderfined: undefined = undefined;


