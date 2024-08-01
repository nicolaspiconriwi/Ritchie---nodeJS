"use strict";
// // Ejemplo de JavaScript con malas prácticas
// function add(a: number, b: number) {
//     return a + b; // No hay verificación de tipos, puede causar errores si a o b no son números
// }
// let age = "30"; // El tipo de dato es inconsistente, puede causar problemas en cálculos posteriores
// console.log(add(10, 20)); // Resultado esperado: 30
// console.log(add(10, 50)); // Resultado inesperado: "1020"
// // console.log(add("10", "20")); // Resultado inesperado: "1020"
// type User = {
//     id: number;
//     name: string;
//     age: number;
//     isOlder: boolean;
// }
// class Users{
//     id:number
//     name:string
//     age:number
//     isOlder: boolean
//     constructor(user:User){
//         this.id=user.id
//         this.name=user.name
//         this.age=user.age
//         this.isOlder=user.isOlder
//     }
// }
// const newUser = new Users({id:1, age:24, isOlder:false, name:'Daniela'});
// // const newUser = new Users({2, "Ana", 50, true})
// console.log(newUser);
// type Product = {
//     id:number;
//     nombre: string;
//     precio: number;
//     available?: boolean;
// }
// const newPoduct: Product = {
//     id:5,
//     nombre: "Diego",
//     precio: 5000,
//     available: true
// }
// console.log(newPoduct);
// // function PositiveNegative(numero:number){
// //     let validation:boolean=numero<0
// //     let cero:boolean=numero===0
// //     if(validation){
// //         console.log("numero es negativo")
// //     }else if(cero){
// //         console.log("numero es cero")
// //     }else{
// //         console.log("es positivo")
// //     }
// // }
// // PositiveNegative(-100)
// const validateNumber = (num: number):string => {
//     const validate: string = num === 0 ? "Es cero" : num > 0 ? "Es positivo" : "Es negativo";
//     return validate
// }
// console.log(validateNumber(0));
// console.log(validateNumber(10));
// console.log(validateNumber(-10));
// let numero = 5
// function returnNames (array: string[]):void{
//     array.forEach(name => console.log(name));
// }
// returnNames(arrayNames)
// const arrayNumbers: number[] = [5, 6, 10, 15];
// const calculateSum = (array: number[]):number =>{
//     const calculate:number = array.reduce((accum,value)=>accum+value, 0);
//     return calculate
// }
// console.log(calculateSum(arrayNumbers))
// const str : string[] = ["hola","mundo"]
// // const newStr : string = str.reduce((acum, value)=> acum + " " + value)
// // console.log(newStr)
// const newStr: string = str.join(" ") 
// console.log(newStr);
// type User = {
//     id: number,
//     name: string
// }
// const myArray: User[] = [{id: 1, name: 'Dani'}, {id: 2, name: 'Alejo'}, {id:3, name: 'Jose'}];
// myArray.forEach(user => console.log(user.name));
// const arrayNum:(number | string | boolean) [] = [1, 5, 6, "hola", true]
// function maxNum(arrayNum:number[]){
//     // return arrayNum.sort((a,b) => b-a)[0]
//     // const number = arrayNum.reduce((acum, value) => acum < value ? value: acum )
//     // return number
//     // return Math.max(...arrayNum)
// }
// console.log(maxNum(arrayNum))
//Tarea: Define un objeto Car con propiedades marca, modelo y año. Crea una instancia de Car e imprime sus propiedades en consola.
// interface car{
//     marca:string,
//     modelo:string,
//     año:number
//     // [key:string | number]: string | number
// }
// let cars:car={
//     marca:'toyota',
//     modelo:'corolla',
//     año:2023
// }
// console.log(cars.marca,cars.modelo,cars.año)
// class newCarInfo {
//     constructor() {};
//     static getInfo(argument:car): string {
//         let totalStr: string = "";
//         for (const key in argument) {
//             // totalStr += argument[key]
//             totalStr += argument[key as keyof typeof argument]
//         }
//         return totalStr
//     }
// }
// console.log(newCarInfo.getInfo(cars));
function restParametres(...args) {
    const firstParameter = typeof args[0];
    const secondParameter = typeof args[1];
    if (firstParameter !== secondParameter) {
        throw new Error("The two first parameter are not the same");
    }
    const validadeAll = args.every(a => typeof a === firstParameter);
    if (!validadeAll) {
        throw new Error("All parameters are not the same type");
    }
    return "All parameters are the same type";
}
console.log(restParametres("1", "hola", 1, "1"));
