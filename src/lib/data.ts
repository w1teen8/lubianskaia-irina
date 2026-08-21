import { IMG } from "./images";

export const NAV_LINKS = [
  { label: "Про мене", to: "/about" },
  { label: "Послуги", to: "/services" },
  { label: "Портфоліо", to: "/portfolio" },
  { label: "Відгуки", to: "/reviews" },
  { label: "Контакти", to: "/contacts" },
] as const;

export type FaqItem = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  whatIncluded: string[];
  forWhom: string;
  process: string[];
  duration: string;
  priceFrom: string;
  faq: FaqItem[];
};

export const SERVICES: Service[] = [
  {
    slug: "personal-style",
    title: "Персональний стиліст",
    shortDescription: "Створення вашого унікального стилю",
    image: IMG.servicePersonalStylist,
    whatIncluded: [
      "Аналіз гардеробу та типу фігури",
      "Формування капсульного гардеробу",
      "Підбір образів під різні події",
      "Рекомендації по кольоровій палітрі",
    ],
    forWhom:
      "Для тих, хто хоче зібрати гардероб, який відповідає їхньому способу життя та підкреслює індивідуальність.",
    process: [
      "Знайомство та обговорення побажань",
      "Розбір гардеробу",
      "Формування образів",
      "Фінальна консультація та рекомендації",
    ],
    duration: "2–3 години",
    priceFrom: "За домовленістю",
    faq: [
      {
        q: "Чи потрібно купувати новий одяг?",
        a: "Не обов'язково — часто вдається зібрати нові образи з речей, які вже є у вашому гардеробі.",
      },
      {
        q: "Скільки триває співпраця?",
        a: "Залежить від запиту — від однієї консультації до постійного супроводу.",
      },
    ],
  },
  {
    slug: "makeup",
    title: "Макіяж",
    shortDescription: "Професійний макіяж для будь-якої події",
    image: IMG.serviceMakeup,
    whatIncluded: [
      "Підбір макіяжу під тип обличчя та подію",
      "Використання преміум косметики",
      "Стійкий результат на весь день",
      "Поради по денному догляду",
    ],
    forWhom:
      "Для особливих подій, фотосесій або просто для того, щоб відчути себе впевнено у будь-який день.",
    process: [
      "Консультація та підбір образу",
      "Підготовка шкіри",
      "Макіяж",
      "Фінальна корекція",
    ],
    duration: "45–90 хв",
    priceFrom: "За домовленістю",
    faq: [
      {
        q: "Чи тримається макіяж увесь день?",
        a: "Так, використовуються стійкі професійні засоби, розраховані на тривале носіння.",
      },
    ],
  },
  {
    slug: "beauty-rituals",
    title: "Догляд та б'юті-ритуали",
    shortDescription: "Підбір догляду та поради для здорової шкіри",
    image: IMG.serviceBeauty,
    whatIncluded: [
      "Діагностика типу та стану шкіри",
      "Підбір індивідуальної програми догляду",
      "Рекомендації косметичних засобів",
      "Поради по щоденних б'юті-ритуалах",
    ],
    forWhom:
      "Для тих, хто хоче побудувати просту та ефективну систему догляду за шкірою.",
    process: [
      "Діагностика шкіри",
      "Підбір засобів",
      "Складання програми догляду",
      "Супровід та коригування",
    ],
    duration: "60 хв",
    priceFrom: "За домовленістю",
    faq: [
      {
        q: "Чи підходить для чутливої шкіри?",
        a: "Так, програма догляду завжди підбирається індивідуально з урахуванням особливостей шкіри.",
      },
    ],
  },
  {
    slug: "shopping",
    title: "Шопінг-супровід",
    shortDescription: "Допомога у створенні функціонального гардеробу",
    image: IMG.serviceShopping,
    whatIncluded: [
      "Складання списку необхідних речей",
      "Підбір магазинів під бюджет",
      "Супровід під час шопінгу",
      "Приміряння та фінальний відбір",
    ],
    forWhom:
      "Для тих, хто хоче оновити гардероб швидко, без зайвого стресу та випадкових покупок.",
    process: [
      "Обговорення бюджету та потреб",
      "Складання маршруту",
      "Шопінг разом з стилістом",
      "Формування нових образів",
    ],
    duration: "3–4 години",
    priceFrom: "За домовленістю",
    faq: [
      {
        q: "Чи можна поєднати з консультацією стиліста?",
        a: "Так, шопінг-супровід чудово доповнює послугу персонального стиліста.",
      },
    ],
  },
];

export const BENEFITS = [
  {
    icon: "user",
    title: "Індивідуальний підхід",
    description: "Кожен образ створюється спеціально для вас.",
  },
  {
    icon: "gem",
    title: "Стиль, що підкреслює особистість",
    description: "Підкреслюємо ваші сильні сторони та характер.",
  },
  {
    icon: "star",
    title: "Підтримка на кожному етапі",
    description: "Від консультації до реалізації образу.",
  },
] as const;

export const STATS = [
  { icon: "sparkle", type: "number", value: 5, suffix: "+", caption: "Років досвіду" },
  { icon: "users", type: "number", value: 300, suffix: "+", caption: "Задоволених клієнтів" },
  { icon: "gem", type: "text", display: "Індивідуальний", caption: "Підхід до кожної клієнтки" },
  { icon: "heart", type: "number", value: 100, suffix: "%", caption: "Любов до своєї справи" },
] as const;

export const REVIEWS = [
  {
    name: "Олена",
    rating: 5,
    text: "Ірина допомогла мені знайти свій стиль. Тепер я почуваюся впевнено щодня.",
    image: IMG.testimonialOlena,
  },
  {
    name: "Марія",
    rating: 5,
    text: "Професійний підхід та неймовірний смак. Рекомендую від щирого серця!",
    image: IMG.testimonialMaria,
  },
  {
    name: "Катерина",
    rating: 5,
    text: "Макіяж тримався весь день, а компліменти отримувала на кожному кроці.",
    image: IMG.testimonialKateryna,
  },
] as const;

export const PORTFOLIO_IMAGES = [
  { image: IMG.portfolio01, w: 4, h: 5, alt: "Образ від Ірини Люб'янської" },
  { image: IMG.portfolio02, w: 4, h: 3, alt: "Стильні аксесуари" },
  { image: IMG.portfolio03, w: 3, h: 4, alt: "Портрет клієнтки" },
  { image: IMG.portfolio04, w: 4, h: 3, alt: "Аксесуари та парфуми" },
  { image: IMG.portfolio05, w: 4, h: 5, alt: "Образ у білому костюмі" },
  { image: IMG.portfolio06, w: 4, h: 3, alt: "Капсульний гардероб" },
] as const;

export const CONTACT = {
  phone: "+38 (099) 123 45 67",
  phoneHref: "tel:+380991234567",
  instagramHandle: "iryna_lubyanska",
  instagramUrl: "https://instagram.com/iryna_lubyanska",
  locations: ["Київ, Україна"],
  hours: [
    { day: "Понеділок — П'ятниця", time: "10:00 — 19:00" },
    { day: "Субота", time: "За домовленістю" },
    { day: "Неділя", time: "Вихідний" },
  ],
} as const;
