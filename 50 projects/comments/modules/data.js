export const testimonials = [
    {
        text: `11 дек. 2018 г. — the problem is that I canno't modify that imported variable even it is not a constant! file1.js export var x=1 //it is defined as a variable not ...
        2 ответа
         
        ·
         
        Лучший ответ: 
        That's an effect of the immutable exported module values. You can override that with ...
        Uncaught TypeError: Assignment to constant variable in ...
        12 июн. 2020 г.
        TypeError: Assignment to constant variable - Stack Overflow
        28 нояб. 2020 г.
        Uncaught TypeError: Assignment to constant variable
        5 авг. 2021 г.
        Why am I getting "TypeError: Assignment to constant variable ...
        6 мая 2019 г.
        Другие результаты с сайта stackoverflow.com`,

        img: 'https://randomuser.me/api/portraits/women/1.jpg',

        name: 'Ali',
    },
    {
        text: `Assignment to exports variable - CodeQL - GitHubhttps://codeql.github.com › js-...
        Перевести эту страницу
        Node.js modules that only export a single value commonly do so by assigning it directly to the module.exports property. A common mistake is to assign it to ...`,

        img: 'https://randomuser.me/api/portraits/women/2.jpg',

        name: 'boli',
    },
    {
        text: `
            Modern JavaScript – Imports, Exports, Let, Const, and ...https://www.freecodecamp.org › ...
            Перевести эту страницу
            7 дек. 2020 г. — When we declare a variable using the let keyword, we can assign a new value to that variable later but we cannot re-declare it with the same ...

            11 Variables and assignment - Exploring JShttps://exploringjs.com › ch_v...
            Перевести эту страницу
            let declares mutable variables. const declares constants (immutable variables). Before ES6, there was also var . But it has several quirks, so ...
        `,

        img: 'https://randomuser.me/api/portraits/women/3.jpg',

        name: 'koli',
    }
]