'use strict'

const gProjs = [
    {
        id: 'pacman',
        name: 'Pacman',
        title: 'Beat those ghosts',
        desc: 'In this project, I created my own version of the popular and very well known game Pacman.',
        url: 'https://annahaskelsky.github.io/Pacman/',
        publishedAt: 'July 2021',
        labels: ['matrixes', 'keyboard events', 'tables']
    },
    {
        id: 'touchNums',
        name: 'Touch Nums',
        title: 'Touch those numbers',
        desc: 'A game where you must click all of the numbers in the correct order. There are 3 difficulties and a timer to keep track of your progress',
        url: 'https://annahaskelsky.github.io/touch-nums/',
        publishedAt: 'July 2021',
        labels: ['matrixes', 'stopwatch', 'tables']
    },
    {
        id: 'inPicture',
        name: 'In Picture',
        title: 'Guess those logos',
        desc: 'In this project, I created my own version of a logo quiz. The rules are simple: you get one logo and 4 options, just click the right one.',
        url: 'https://annahaskelsky.github.io/in-picture/',
        publishedAt: 'July 2021',
        labels: ['DOM']
    },
    {
        id: 'chess',
        name: 'Chess',
        title: 'Move those figures',
        desc: 'In this project, I implemented the basic moves of each chess character. All you need to do is choose your player and move it to one of the possible marked locations.',
        url: 'https://annahaskelsky.github.io/chess/',
        publishedAt: 'July 2021',
        labels: ['matrixes', 'tables']
    },
    {
        id: 'bookShop',
        name: 'Book Shop',
        title: 'Read those books',
        desc: 'In this project, I created a simple structure to keep some book data, and change it as needed.',
        url: 'https://annahaskelsky.github.io/Book-Shop/',
        publishedAt: 'July 2021',
        labels: ['tables', 'data structures']
    },
    {
        id: 'mineSweeper',
        name: 'Mine Sweeper',
        title: 'Avoid those mines',
        desc: 'In this project, I created my own version of the popular and very well known game Mine Sweeper.',
        url: 'https://annahaskelsky.github.io/Minesweeper/',
        publishedAt: 'July 2021',
        labels: ['matrixes', 'keyboard events', 'tables']
    }
]

const gSkills = [
    {
        title: 'Fast Learning',
        icon: 'bolt',
        txt: 'I learn and understand new information quite quickly. It helped me a lot in school and i still benefit from it daily.'
    },
    {
        title: 'Open Minded',
        icon: 'brain',
        txt: 'I am always happy to learn new things and improve my skills, whether it\'s coding related or just general life things.'
    },
    {
        title: 'Organized',
        icon: 'paste',
        txt: 'I keep things very neat, I find that it helps a lot with productivity and it keeps me motivated.'
    }
]

function getProjects() {
    return gProjs
}

function getProjById(id) {
    return gProjs.find(function (proj) {
        return proj.id === id
    })
}

function getSkills() {
    return gSkills
}