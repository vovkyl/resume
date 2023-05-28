// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  address: {
    city: 'Ungvar',
    street: 'Petefi',
    build: '45',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600 $ in month ',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: ' Resume | Summary',
    },

    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
  work on a new project I learn the domain and try to understand the idea of the project. Good team
                      player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: ' Resume | Skills',
    },

    header,
    main: {
      hobbies: [
        {
          name: 'DaD',
          isMain: false,
        },
        {
          name: 'EyE',
          isMain: true,
        },
        {
          name: 'FuF',
          isMain: true,
        },
      ],
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlbars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: true,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
        {
          name: 'NPM',
          point: 5,
          isTop: false,
        },
      ],
    },
    footer,
  })
})
//=================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: ' Resume | Work',
    },

    header,
    main: {
      works: [
        {
          position: 'junior Fullstack Developer',
          company: {
            name: 'IT brains',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://it-brains.com.ua',
              about: 'jhwbflhwqglefgw lggh  iw',
              stacks: [
                {
                  name: 'react.js',
                  stackAmount: 10,
                },
                {
                  name: 'HTML / CCS',
                  stackAmount: 9,
                },
                {
                  name: 'Nodejs',
                  stackAmount: 8,
                },
              ],
              awards: [
                {
                  name: 'lajbvbqeighepqihrvn;eqh',
                  awardsAmount: 10,
                },
                {
                  name: 'dkbnkejnb;etroeor',
                  awardsAmount: 5,
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})
// ================================================================
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: ' Resume | Education',
    },

    header,
    main: {
      educations: [
        {
          name: 'ЛКА',
          isEnd: true,
        },
        {
          name: 'ЛПІ',
          isEnd: false,
        },
        {
          name: 'УЖНУ',
          isEnd: true,
        },
      ],

      certificates: [
        {
          name: 'AAA',
          id: 111,
        },
        {
          name: 'BBB',
          id: 222,
        },
        {
          name: 'CCC',
          id: 333,
        },
      ],
    },
    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
