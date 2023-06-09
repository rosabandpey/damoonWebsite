
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import Alef from '@mui/icons-material/TextFormat';
import TriangleIcon from '@mui/icons-material/LocationOn';
import staffBanner from '../../assets/img/staff-banner.jpg';
import licenseImg from '../../assets/img/license-sample.jpg';
import avatar from '../../assets/img/avatar.jpeg';
import avatar2 from '../../assets/img/avatar2.jpeg';
import haj from '../../assets/img/persons/hajshafie.jpg';
import memar from '../../assets/img/persons/memarian.jpg';

import gallery1 from '../../assets/img/gallery-1.jpg';
import gallery2 from '../../assets/img/gallery-2.jpg';
import gallery3 from '../../assets/img/gallery-3.jpg';
import gallery4 from '../../assets/img/gallery-4.jpg';
import gallery5 from '../../assets/img/gallery-5.jpg';

import VideoIcon from '@mui/material/SvgIcon';




export const bannerSectionData = {
    title: 'دوچرخه سواری دامون' ,
    subtitle: 'بزرگ ترین گروه دوچرخه سواری',
    socialLink: [
        {
            icon: <TelegramIcon />,
            link: 'https://t.me/s/damoonbiker',
        },
        {
            icon: <InstagramIcon />,
            link: 'https://www.instagram.com/damoonbikers/',
        },
        {
            icon: <VideoIcon />,
            link: 'https://www.aparat.com/damoonbiker',
        },
    ],
};
export const breadcrumbData = [
    {
        title: 'صفحه اصلی',
        link: '/',
    },
    {
        title: 'درباره ما',
    },
];
export const statisticData = [
    {
        title: 'رتبه کارگزاری',
        value: 'الف',
        icon: <Alef />,
    },
    {
        title: 'شعبه در سراسر کشور',
        value: '+۳۵',
        icon: <TriangleIcon />,
    },
    {
        title: 'کاربر',
        value: '+۷۵۰۰۰',
        icon: <PersonIcon />,
    },
];
export const staffCardData = {
    title: 'حمیدرضا دانش کاظمی' ,
    subtitle: 'مدیرعامل و نایب رییس هیأت مدیره',
    posts: [
        'عضو شورای عالی بورس',
        'رئیس سابق هیأت مدیره کانون کارگزاران بورس و اوراق بهادار',
    ],
    socialList: [
        // {
        //     icon: <LinkedInIcon />,
        //     link: '#/',
        // },
        {
            icon: <InstagramIcon />,
            link: 'https://www.instagram.com/daneshkazemi.h',
        }
    ],
    banner: staffBanner,
    bannerAlt: 'حمیدرضا دانش کاظمی',
};
export const managerList = [
    {
        img: haj,
        title: 'مجتبی حاجی شفیعی',
        subtitle: 'عضو و رئیس هیات مدیره',
        alt: 'مجتبی حاجی شفیعی',
        socialList: [
            // {
            //     icon: <LinkedInIcon />,
            //     link: '#/',
            // },
            // {
            //     icon: <InstagramIcon2 />,
            //     link: '#/',
            // }
        ],
    },
    {
        img: memar,
        title: 'محسن معماریان',
        subtitle: 'عضو هیأت مدیره و مدیر معاملات',
        alt: 'محسن معماریان',
        socialList: [
            // {
            //     icon: <LinkedInIcon />,
            //     link: '#/',
            // },
            // {
            //     icon: <InstagramIcon2 />,
            //     link: '#/',
            // }
        ],
    },
    {
        img: avatar,
        title: 'عبدالوهاب علیزاده خرازی',
        subtitle: 'مدیر کنترل داخلی و مبارزه با پولشویی',
        alt: 'عبدالوهاب علیزاده خرازی',
        socialList: [
            // {
            //     icon: <LinkedInIcon />,
            //     link: '#/',
            // },
            // {
            //     icon: <InstagramIcon2 />,
            //     link: '#/',
            // }
        ],
    },
    {
        img: avatar,
        title: 'علیرضا ملکشاد',
        subtitle: 'مدیر مالی',
        alt: 'علیرضا ملکشاد',
        socialList: [
            // {
            //     icon: <LinkedInIcon />,
            //     link: '#/',
            // },
            // {
            //     icon: <InstagramIcon2 />,
            //     link: '#/',
            // }
        ],
    },
    {
        img: avatar2,
        title: 'فاطمه سامانی پور',
        subtitle: 'مدیر پذیرش',
        alt: 'فاطمه سامانی پور',
        socialList: [
            // {
            //     icon: <LinkedInIcon />,
            //     link: '#/',
            // },
            // {
            //     icon: <InstagramIcon2 />,
            //     link: '#/',
            // }
        ],
    },
    {
        img: avatar2,
        title: 'فاطمه کرمی',
        subtitle: 'مدیر منابع انسانی',
        alt: 'فاطمه کرمی',
        socialList: [
            // {
            //     icon: <LinkedInIcon />,
            //     link: '#/',
            // },
            // {
            //     icon: <InstagramIcon2 />,
            //     link: '#/',
            // }
        ],
    },
    {
        img: avatar,
        title: 'علی حدادی',
        subtitle: 'مدیر فناوری اطلاعات',
        alt: 'علی حدادی',
        socialList: [
            // {
            //     icon: <LinkedInIcon />,
            //     link: '#/',
            // },
            // {
            //     icon: <InstagramIcon2 />,
            //     link: '#/',
            // }
        ],
    },
];
export const galleryList = [
    {
        img: gallery1,
        alt: 'gallery 1 banner',
    },
    {
        img: gallery2,
        alt: 'gallery 1 banner',
    },
    {
        img: gallery3,
        alt: 'gallery 1 banner',
    },
    {
        img: gallery4,
        alt: 'gallery 1 banner',
    },
    {
        img: gallery5,
        alt: 'gallery 1 banner',
    },
];
export const licenseList = [
    {
        img: licenseImg,
        alt: 'imq',
        title: 'imq',
    },
    {
        img: licenseImg,
        alt: 'iso',
        title: 'iso',
    },
    {
        img: licenseImg,
        alt: 'iQnet',
        title: 'iQnet',
    },
];