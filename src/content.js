import products1 from './Components/assets/products1.png';
import products2 from './Components/assets/products2.png';
import products3 from './Components/assets/products3.png';
import products4 from './Components/assets/products4.png';
import products5 from './Components/assets/products5.png';
import products6 from './Components/assets/products6.png';
import products7 from './Components/assets/products7.png';
import products8 from './Components/assets/products8.png';
import main1 from './Components/assets/main1.jpg';
import main2 from './Components/assets/main2.jpg';
import main3 from './Components/assets/main3.jpg';
import main4 from './Components/assets/main4.jpg';
import main5 from './Components/assets/main5.jpg';
import main6 from './Components/assets/main6.jpg';
import main7 from './Components/assets/main7.jpg';
import main8 from './Components/assets/main8.jpg';
import main9 from './Components/assets/main9.jpg';
import news1 from './Components/assets/news1.jpg';
import news2 from './Components/assets/news2.jpg';
import news3 from './Components/assets/news3.jpg';

export const COMPANY_SUMMARY =
  'Современное предприятие по производству гнуто-клееных изделий (латофлекс), фанеры, топливных брикетов RUF, березового угля, пиломатериалов';

export const NAV_LINKS = [
  { href: '#products', label: 'Продукция' },
  { href: '#connection', label: 'Поставщикам' },
  { href: '#works', label: 'Вакансии' },
  { href: '#news', label: 'Новости' },
  { href: '#connection', label: 'Контакты' },
];

export const PRODUCTS = [
  { image: products1, title: 'Латофлекс', text: 'Шпон березовый лущеный, ГОСТ 99-96В. Смола марки КФМТ-15, класс эмиссии Е0' },
  { image: products2, title: 'Фанера', text: 'Шпон березовый лущеный, ГОСТ 99-96В. Смола марки КФМТ-15, класс эмиссии Е0' },
  { image: products3, title: 'Брикеты топливные RUF', text: 'Прессованные березовые опилки без применения химических добавок' },
  { image: products4, title: 'Пиломатериалы', text: 'Дисковый распил: ель сибирская, пихта, сосна, берёза, липа, осина' },
  { image: products5, title: 'Кроватные основания', text: 'Из берёзового шпона или из массива на ленте' },
  { image: products6, title: 'Уголь', text: 'Микропористый высокоуглеродистый продукт' },
  { image: products7, title: 'Саженцы', text: 'Молодые деревья, выращенные в питомнике' },
  { image: products8, title: 'Отходы производства', text: 'Прессованные березовые опилки без применения химических добавок' },
];

export const ACTIVITIES = [
  {
    title: 'Производство',
    paragraphs: [
      'Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции.',
      'Поставки осуществляются по России и в 14 стран мира. Строгий контроль на каждом этапе производства помогает поддерживать качество продукции.',
    ],
    image: main1,
    imageAlt: 'Производственная линия завода',
    gallery: [
      { image: main2, alt: 'Склад готовой продукции' },
      { image: main3, alt: 'Цех завода' },
      { image: main4, alt: 'Оборудование завода' },
    ],
  },
  {
    title: 'Лесоуправление и заготовка',
    paragraphs: [
      'Рубка леса осуществляется на арендованных участках, обеспечивая бесперебойную поставку сырья для производства и для продажи. Расчетная лесосека: 320 000 м³. Общая площадь арендованного леса 306 000 га сертифицирована по стандартам международной добровольной лесной сертификации (FSC).',
    ],
    image: main6,
    imageAlt: 'Лесной участок',
    gallery: [],
  },
  {
    title: 'Питомники',
    paragraphs: [
      'Задача лесопитомника: обеспечение посадочным материалом собственной и сторонней лесозаготовки.',
      'Питомник полностью покрывает потребности Пермского края в сеянцах сибирской ели. Общая площадь теплиц: 4800 м², питомника: 15 га. Потенциал: до 4 млн сеянцев в год.',
    ],
    image: main5,
    imageAlt: 'Теплицы питомника',
    gallery: [
      { image: main7, alt: 'Сеянцы в теплице' },
      { image: main8, alt: 'Ряды саженцев' },
      { image: main9, alt: 'Молодые деревья в питомнике' },
    ],
  },
];

export const CERTIFICATES = [
  { title: 'Сертификат FSC', text: 'Сертифицированная продукция (FSC 100%) по системе Forest Stewardship Council®.' },
  { title: 'Соответствие регламенту EUTR', text: '(European Union Timber Regulation): предоставляем необходимый пакет документов.' },
  { title: 'Сертификат CARB / CARB2', text: 'Для поставок в США и другие страны, запрашивающие сертификацию на соответствие производства и продукции стандартам по выбросам формальдегида.' },
];

const NEWS_TEXT = 'Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции';

export const NEWS = [
  { image: news1, title: 'Вышли на международный рынок', text: NEWS_TEXT, date: '25.12.2021' },
  { image: news3, title: 'Встреча с европейскими коллегами', text: NEWS_TEXT, date: '25.12.2021' },
  { image: news2, title: 'Новое оборудование', text: NEWS_TEXT, date: '25.12.2021' },
];

export const CONTACT_REASONS = ['Ошибка', 'Возврат', 'Предложение', 'Вопрос'];

export const FOOTER_PRODUCTS = PRODUCTS.map((product) => product.title);
