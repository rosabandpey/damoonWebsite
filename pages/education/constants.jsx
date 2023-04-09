import blogImg1 from '../../assets/img/blog-1.jpg';
import blogImg2 from '../../assets/img/blog-2.jpg';

const courseData = {
    title: 'دوره تحلیل تکنیکال',
    text: `دوره تحلیل تکنیکال خیلی خوبه تو رو خدا
        بیاید شرکت کنید به خدا به درد دنیا آخرتتون
        میخوره قیمتشم مفته دیگه دوره تحلیل تکنیکال
        خیلی خوبه تو رو خدا بیاید شرکت کنید به خدا
        به درد دنیا آخرتتون میخوره قیمتشم مفته دیگه`,
    price: '220.000',
    priceUnit: 'تومان',
    priceTitle: 'قیمت دوره:',
    link: '',
    btnTitle: 'ثبت نام',
    btnColorType: 'btn_info',
    bannerImg: blogImg2,
    bannerAlt: 'دوره تحلیل تکنیکال',
};
const blogData = {
    title: 'فیلتر نویسی چیست',
    text: `فیلتر نویسی انقدر خوبه که نمیدونید
        یعنی یاد بگیرید خیلی خفنه سریع صف فروشا
        رو پیدا میکنید بعد میتونید از صف فروش بخرید بعد
        بالا تر بدین بره به این خوبی دیگه چی میخواین آخه؟`,
    link: '',
    btnTitle: 'ادامه مطلب',
    btnColorType: 'btn_success',
    bannerImg: blogImg1,
    bannerAlt: 'فیلتر نویسی چیست',
};
export const cardList = [
    courseData,
    blogData,
    courseData,
    blogData,
    courseData,
    blogData,
    courseData,
    blogData,
];
export const categoryItems = [
    {
        name: 'course',
        label: 'دوره آموزشی',
        checked: true,
    },
    {
        name: 'blog',
        label: 'مقاله',
        checked: false,
    },
    {
        name: 'filem',
        label: 'فیلم',
        checked: false,
    },
    {
        name: 'podcast',
        label: 'پادکست',
        checked: false,
    },
    {
        name: 'analysis',
        label: 'تحلیل آنلاین',
        checked: false,
    },
];
export const levelItems = [
    {
        name: 'blog',
        label: 'مبتدی',
        checked: false,
    },
    {
        name: 'filem',
        label: 'متوسط',
        checked: false,
    },
    {
        name: 'podcast',
        label: 'پیشرفته',
        checked: false,
    },
];
export const sortItemList = [
    {
        title: 'جدیدترین',
    },
    {
        title: 'قدیمی‌ترین',
    },
    {
        title: 'گران‌ترین',
    },
    {
        title: 'ارزان‌ترین',
    },
];
