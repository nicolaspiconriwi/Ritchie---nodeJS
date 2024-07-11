
// Just playing around
class Person {

    constructor(name, age, spanElement) {
        this.name = name;
        this.age = age;
        this.spanElement = spanElement;
    }

    greet() {
        // console.log(`Hola ${this.name} tu edad es ${this.age}`)
        return `Hola ${this.name} tu edad es ${this.age}`
    }

    changeSpanContent(content) {
        this.spanElement.innerHTML = content;
    }

    concatenateTitleContent(titleContent, $titleElement) {
        $titleElement.innerHTML += titleContent;
    }

}

// const $myButtons = document.querySelectorAll('BUTTON');

// const person1 = new Person('Nicolas', 25)
// console.log(person1.greet());

// function greet(){
//     return this
// }

// const greetArrow = () => {
//     return this;
// }

// console.log(greet());
// console.log(greetArrow());

// fetch('miapi.com').then(e => e.json()).then(e => console.log(e)).catch(error => console.log(error))

const fetchApi = async () => {
    try {
        const resp = await fetch('data.json')
        const respJson = await resp.json()
        console.log(respJson);
        return resp.json();
    } catch (error) {
        console.error(error)
    }
}

fetchApi()

// const $spanElement = document.getElementsByTagName('SPAN')[0]
// const $btnChangeSpan = document.querySelector('BUTTON')
// const nicolas = new Person('Nicolas', 25, document.getElementsByTagName('SPAN')[0])
// $btnChangeSpan.addEventListener('click', () => {
//     nicolas.changeSpanContent('Esto lo escribio Nicolas');
//     nicolas.concatenateTitleContent(' Esto fue lo que agregó Nicolas al titulo', document.getElementsByTagName('H1')[0])
// })

// // con distpach event
// const myCustomEvent = new Event('myCustomEvent')
// $btnChangeSpan.addEventListener('myCustomEvent', () => {
//     nicolas.changeSpanContent('Esto lo escribio Nicolas Desde MyCustomEvent');
//     nicolas.concatenateTitleContent(' Esto fue lo que agregó Nicolas al titulo desde MyCustomEvent', document.getElementsByTagName('H1')[0])
//     fetch('data.json').then(e => e.json()).then(e => console.log(e))
// })

// $btnChangeSpan.addEventListener('mouseover', () => {
//     $btnChangeSpan.dispatchEvent(myCustomEvent)
// });