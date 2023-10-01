//images
import { 
  morshynRada, 
  ministryOfEducation, 
  lvivMilitaryAdm, 
  loippo,  
  bonar,
  fedoriv,
  gutnkevich,
  kasheba,
  krishtal, 
  denMury1,
  denMury2,
  denMury3,
  denMury4,
  budUvazhny1,
  budUvazhny2,
  holodomor,
  persheSvyatePrychastya,
  proshchavayBukvaryku,
  svyatyyMykolay,
  urokDobroty,
  photo1,
  photo2
} from './images';

import rulesOfInternalProcedure from '../assets/documents/Правила внутрішнього розпорядку.pdf';
import strategyOfTheEducationalInstitution from '../assets/documents/Стратегія закладу освіти.pdf';
import materialAndTechnicalSupport from '../assets/documents/Матеріально-технічне забезпечення.pdf';
import onlineStudying from '../assets/documents/Дистанційне навчання.pdf';
import modeOfOperationOfTheSchool from '../assets/documents/Режим роботи школи.pdf';
import eduactionalProgram20222023 from '../assets/documents/Освітня програма програма 2022-2023.pdf';
import schoolWorkPlan2022023 from '../assets/documents/План роботи школи 2022-2023.pdf';
import academicIntegrity from '../assets/documents/АКАДЕМІЧНА ДОБРОЧЕСНІСТЬ для вчителя і учня!.pdf';
import improvingQualification from '../assets/documents/Підвищення кваліфікації педпрацівників 2022-2023.pdf';

export {
  rulesOfInternalProcedure,
  strategyOfTheEducationalInstitution,
  materialAndTechnicalSupport,
  onlineStudying,
  modeOfOperationOfTheSchool,
  eduactionalProgram20222023,
  schoolWorkPlan2022023,
  academicIntegrity,
  improvingQualification,
};

export const menu = [
  {
    id: 1,
    title: 'Головна',
    link: '/',
  },
  {
    id: 2,
    title: 'Новини',
    link: '/news',
  },
  {
    id: 3,
    title: 'Відкритість та прозорість',
    link: '/info',
  },
  {
    id: 4,
    title: 'Наша школа',
    link: '/about',
  },
  {
    id: 5,
    title: 'Педагогічні кадри',
    link: '/employees',
  },
  {
    id: 6,
    title: 'Фотогалерея',
    link: '/gallery',
  },
];

export const institutions = [
  {
    id: 1,
    imgSrc: morshynRada,
    link: 'https://morshyn-rada.gov.ua',
    alt: 'morshyn rada',
    width: 80,
  },
  {
    id: 2,
    imgSrc: ministryOfEducation,
    link: 'https://mon.gov.ua/ua',
    alt: 'ministry of education',
    width: 140,
  },
  {
    id: 3,
    imgSrc: lvivMilitaryAdm,
    link: 'https://loda.gov.ua/home',
    alt: 'lviv military administration',
    width: 80,
  },
  {
    id: 4,
    imgSrc: loippo,
    link: 'https://loippo.lviv.ua',
    alt: 'loippo',
    width: 80,
  },
];

export const teachers = [
  {
    id: 1,
    name: 'Бонар І.В.',
    photo: bonar,
  },
  {
    id: 2,
    name: 'Кашеба Г.М',
    photo: kasheba,
  },
  {
    id: 3,
    name: 'Гутнікевич С.Я',
    photo: gutnkevich,
  },
  {
    id: 4,
    name: 'Федорів О.І.',
    photo: fedoriv,
  },
  {
    id: 5,
    name: 'Кришталь Г.М.',
    photo: krishtal,
  },
];

export const news = [
  {
    id: 1,
    title: 'Урок доброти',
    description: 'На шкільному заході на тему "Урок доброти" учні обговорювали важливі аспекти співчуття, допомоги та толерантності в їхньому повсякденному житті. Ця ініціатива сприяє формуванню позитивних міжособистісних відносин та розвитку соціальної відповідальності.',
    facebookPost: '',
    mainImg: urokDobroty,
    date: '2022-2023',
    newsImg: [
      urokDobroty,
    ],
  },
  {
    id: 2,
    title: 'Виступ до свята "Святий Миколай, до нас завітай"',
    description: 'У школі відбувся захід, присвячений святкуванню "Святого Миколая". Учні виступили з різнобарвними віршами та піснями, підкреслюючи значення цього свята у нашій культурі.',
    facebookPost: '',
    mainImg: svyatyyMykolay,
    date: '2022-2023',
    newsImg: [
      svyatyyMykolay,
    ]
  },
  {
    id: 3,
    title: 'Перше Святе Причастя',
    description: 'В учнів школи відбулось Перше Святе Причастя, де вони вперше приймали Євхаристію, виражаючи свою віру і духовний розвиток. Ця подія важлива не лише для дітей, але й для їхніх родин та всього віровченого співтовариства.',
    facebookPost: '',
    mainImg: persheSvyatePrychastya,
    date: '2022-2023',
    newsImg: [
      persheSvyatePrychastya,
    ]
  },
  {
    id: 4,
    title: 'Свято "Прощавай Букварику!"',
    description: 'В школі відбувся радісний захід, присвячений святкуванню "Прощавай, Букварику!". Першокласники прощалися з своїми першими кроками в світі знань, вшановуючи важливий момент в своєму навчанні та з нетерпінням чекаючи нових викликів.',
    facebookPost: 'https://www.facebook.com/100025823884687/videos/925525868318201/',
    mainImg: proshchavayBukvaryku,
    date: 'Травень 2021',
    newsImg: [
      proshchavayBukvaryku,
    ]
  },
  {
    id: 5,
    title: 'Пам"ятаємо про Голодомор...',
    description: 'Хай палає свічка, хай палає. Поєднає нас вона в цей час. Хай сьогодні спогади лунають, поки промінь пам"яті не згас...',
    facebookPost: 'https://www.facebook.com/100025823884687/videos/665697944843177/',
    mainImg: holodomor,
    date: 'Листопад 2021',
    newsImg: [
      holodomor,
    ]
  },
  {
    id: 6,
    title: 'День миру',
    description: 'В школі відбувся важливий захід, присвячений Дню миру, де учні разом обговорювали значення миру у світі. Акцентуючи на важливості толерантності, співпраці та вирішенні конфліктів мирними засобами, зокрема через освіту та спільну роботу.',
    facebookPost: '',
    mainImg: denMury3,
    date: '21 вересня 2023 рік',
    newsImg: [
      denMury1,
      denMury2,
      denMury3,
      denMury4,
    ]
  },
  {
    id: 7,
    title: 'Заняття з нашими першокласниками "Будь уважним!"',
    description: 'З 1 по 30 вересня в школі проводиться місячник безпеки дорожнього руху. Заняття з нашими першокласниками "Будь уважним !"',
    facebookPost: '',
    mainImg: budUvazhny1,
    date: '1-30 вересня 2023 рік',
    newsImg: [
      budUvazhny1,
      budUvazhny2,
    ]
  },
].reverse();

export const regulations = {
  title: 'Нормативні документи',
  detailId: 1,
  items: [
    {
      id: 1,
      title: 'Правила внутрішкільного розпорядку',
      link: './src/assets/documents/Правила внутрішнього розпорядку.pdf',
    },
    {
      id: 2,
      title: 'Стратегія закладу освіти',
      link: './src/assets/documents/Стратегія закладу освіти.pdf',
    },
  ]
}

export const informationAboutInstitution = {
  title: 'Інформаця про заклад',
  detailId: 2,
  items: [
    {
      id: 1,
      title: 'Ліцензія',
      link: '../assets/documents/Ліцензія.pdf',
    },
    {
      id: 2,
      title: 'Статус школи',
      link: './src/assets/documents/Статут закладу освіти.pdf',
    },
    {
      id: 3,
      title: 'Територія обслуговування школи',
      link: './src/assets/documents/Територія обслуговування школи.pdf',
    },
    {
      id: 4,
      title: 'Режим роботи школи',
      link: './src/assets/documents/Режим роботи школи.pdf',
    },
    {
      id: 5,
      title: 'Рішення сесії',
      link: './src/assets/documents/Рішення сесії.pdf',
    },
  ]
}

export const opennessInstitution = {
  title: 'Інформаційна відкритість закладу',
  detailId: 3,
  items: [
    {
      id: 1,
      title: 'Академічна доброчесність для вчителя і учня!',
      link: '../assets/documents/АКАДЕМІЧНА ДОБРОЧЕСНІСТЬ для вчителя і учня!.pdf',
    },
  ]
}

export const materialSupport = {
  title: 'Матеріально-технічне забезпечення',
  detailId: 4,
  items: [
    {
      id: 1,
      title: 'Матеріально-технічне забезпечення',
      link: '../assets/documents/Матеріально-технічне забезпечення.pdf',
    },
  ]
}

export const onlineLearning = {
  title: 'Дистанційне навчання',
  detailId: 5,
  items: [
    {
      id: 1,
      title: 'Дистанційне навчання',
      link: './src/assets/documents/Дистанційне навчання.pdf',
    },
  ]
}

export const gallery = [
  {
    id: 1,
    imgUrl: denMury1,
  },
  {
    id: 2,
    imgUrl: holodomor,
  },
  {
    id: 3,
    imgUrl: photo2,
  },
  {
    id: 4,
    imgUrl: denMury4,
  },
  {
    id: 5,
    imgUrl: budUvazhny1,
  },
  {
    id: 6,
    imgUrl: budUvazhny2,
  },
  {
    id: 7,
    imgUrl: urokDobroty,
  },
  {
    id: 8,
    imgUrl: photo1,
  },
  {
    id: 9,
    imgUrl: proshchavayBukvaryku,
  },
  {
    id: 10,
    imgUrl: persheSvyatePrychastya,
  },
  {
    id: 11,
    imgUrl: denMury2,
  },
  {
    id: 12,
    imgUrl: svyatyyMykolay,
  },
  {
    id: 13,
    imgUrl: denMury3,
  },
].reverse();