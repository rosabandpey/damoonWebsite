import abasabad from "../../assets/img/asbasabad.jpeg";
import miankale from "../../assets/img/miankale.jpg";
import yazd from "../../assets/img/yazd.jpg";
import gheshm from "../../assets/img/gheshm.jpeg";
import introBanner from "../../assets/img/banner-2.png";
import relSiteLogo1 from "../../assets/img/otherWebsites/Codal.png";
import relSiteLogo2 from "../../assets/img/otherWebsites/fanavari.png";
import relSiteLogo3 from "../../assets/img/otherWebsites/fara.png";
import relSiteLogo4 from "../../assets/img/otherWebsites/kala.png";
import relSiteLogo5 from "../../assets/img/otherWebsites/sazman.png";

export const sample = [
  {
    title: "سفر کلاردشت به رامسر",
    text: `در ایران هرکسی که بخواهد طبیعت‌گردی کند و روحش تازه شود به شهرهای شمالی سفر می‌کند. عباس آباد یکی از شهرستان‌های شمالی ایران است که در استان مازندران واقع شده و به زیبایی و سرسبزی معروف است. درختان سر به فلک کشیده و انبوه، هوای صاف و خنک، پرندگان زیبا، جنگل‌ و رستوران ها و کافه‌ها باعث می‌شود که مردم ساعت‌ها در این منطقه بمانند. عباس آباد یکی از شهرستان‌های جذاب و خوش آب و هوای مازندران است. سالیانه گردشگران زیادی از سراسر دنیا به این شهرستان سفر می‌کنند. این شهرستان به دلیل  امکانات رفاهی متعدد و متنوع، همواره جایگاه ویژه و خاصی در بین گردشگران و علاقه مندان به طبیعت دارد.

    `,
    banner: {
      src: abasabad,
      alt: "سفر کلاردشت به رامسر",
    },
    price: "1,500,000",
    link: "#",
  },
  {
    title: "سفر میانکاله ",
    text: `تالاب میانکاله یکی از جاهای دیدنی بهشهر است که با مناظری بکر و زیبا و پوشش گیاهی بی‌نظیر، توجه طبیعت‌گردان را جلب می‌کند. اما برای گردشگران و علاقه‌مندان محیط‌زیست و حیات‌وحش، برجسته‌ترین خصوصیت آن، جذابیت پدیده پرنده‌نگری در پاییز و زمستان در این منطقه است.`,
    banner: {
      src: miankale,
      alt: "سفر میانکاله ",
    },
    price: "1,800,000",
    link: "#",
  },
];

export const lastPrograms = [
  {
    title: "سفر یزد ",

    src: yazd,

    link: "#",
    description:"این سفر در اسفند ماه 1401 برگزار شد"
  },
  {
    title: "سفر قشم ",

    src: gheshm,

    link: "#",
    description:"این سفر در بهمن ماه 1401 برگزار شد"
  },
];



export const educationalContents = [
  {
    title: "نحوه تعویض دنده",

    src: yazd,

    link: "#",
    description:"این سفر در اسفند ماه 1401 برگزار شد"
  },
  {
    title: "شستشوی دوچرخه",

    src: gheshm,

    link: "#",
    description:"این سفر در بهمن ماه 1401 برگزار شد"
  },
];


export const weblogContents = [
  {
    title: "مسیر دوچرخه یزد به تفت",

    src: yazd,

    link: "#",
    description:"این سفر در اسفند ماه 1401 برگزار شد"
  },
  {
    title: "رکاب زنی همگانی شهر تهران",

    src: gheshm,

    link: "#",
    description:"این سفر در بهمن ماه 1401 برگزار شد"
  },
];




export const introSectionData = {
  title: {
    text: "بهترین سهام را در بازار انتخاب کنید.",
    highlight: "سهام",
  },
  text: `
          برای اینکه بتوانیم بهترین سهام را در بازار
          انتخاب کنیم باید بتوانیم ابتدا آن سهم را به خوبی تحلیل
          و بررسی کنیم. شما میتوانید از تحلیل های تحلیلگران کارگزاری آتیه
          استفاده کنید و یا در دوره های آموزشی این کارگزاری شرکت کنید.`,
  banner: {
    src: introBanner,
    alt: "بهترین سهام را در بازار انتخاب کنید.",
  },
  linkList: [
    {
      title: "> تحلیل‌های تحلیل‌گران کارگزاری",
      link: "",
    },
    {
      title: "> شرکت در دوره‌های آموزشی",
      link: "",
    },
  ],
};

export const relatedSiteData = {
  title: "وبسایت‌های مرتبط",
  siteList: [
    {
      title: "مدیریت فناوری بورس",
      logoSrc: relSiteLogo2,
      logoAlt: "مدیریت فناوری بورس",
      link: "https://www.tsetmc.com/",
    },
    {
      title: "سازمان بورس",
      logoSrc: relSiteLogo5,
      logoAlt: "سازمان بورس",
      link: "https://www.seo.ir",
    },
    {
      title: "کدال",
      logoSrc: relSiteLogo1,
      logoAlt: "کدال",
      link: "https://www.codal.ir",
    },
    {
      title: "بورس کالا",
      logoSrc: relSiteLogo4,
      logoAlt: "بورس کالا",
      link: "https://www.ime.co.ir",
    },
    {
      title: "فرابورس",
      logoSrc: relSiteLogo3,
      logoAlt: "فرابورس",
      link: "https://www.ifb.ir/",
    },
  ],
};
