import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const firstName = 'Łukasz';
const age = 27;
console.log(
    `Cześć witaj na mojej stronie nazywam się ${firstName} i mam ${age} lata!`
);

let content = document.querySelector('.welcome-section__content--js');

content.innerHTML = `Cześć witaj na mojej stronie nazywam się ${firstName} i mam ${age} lata!`;

function Showlog() {
    console.log('showLog');
}

Showlog();

function showLog(name, age) {
    console.log(`czolem ${name}, mam ${age}`);
}

showLog('Maciek', 4);

const ExampleClass = {
    name: 'Maciek z classy:D',
    age: 27,
    showlog: (name, age) => {
        console.log(`${name} ma ${age} lat:) `);
    },
    showlog2: function () {
        console.log(`${this.name} SUPER DZIALA ${this.age}`);
    },
};

ExampleClass.showlog(ExampleClass.name, ExampleClass.age);
ExampleClass.showlog2(ExampleClass.name, ExampleClass.age);

const hamburgerButton = document.querySelector(
    '.navigation__hamburger-button--js'
);

hamburgerButton.addEventListener('click', () => {
    const menuElements = document.querySelectorAll('.navigation__link');

    menuElements.forEach((menuElement) => {
        menuElement.classList.toggle('navigation__link-invisible');
    });
});
