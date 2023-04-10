import React, { useState, useEffect } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import styles from './style/header.module.scss'
import { menuList, megaMenuData } from './constants';
import chartImg from '../../assets/img/candle-chart.svg';
import logo from '../../assets/img/logo.jpg';
// import './style/header.less';
import Image from 'next/image'
import Link from 'next/link';

export default function Header(props) {

    const [menuCat, setMenuCat] = useState(null);
    const [navOpened, setNavOpened] = useState(false);

    useEffect(() => {
        // add when mounted
        document.addEventListener("click", closeMenu);  // return function to be called when unmounted
        return () => {
            document.removeEventListener("click", closeMenu);
        };
    }, []);

    const openMenu = type => {

        setMenuCat(type);
    }

    const closeMenu = () => {
        setMenuCat(null);
    }

    const dontClose = e => {
        e.stopPropagation();
    }

    const toggleNav = () => {
        if (navOpened) {
            closeMenu();
        }
        setNavOpened(!navOpened);
    }

    const navClick = (isSubmenu) => {
        closeMenu();
        setNavOpened(false);
    }

    return (
        <header className={styles.header_wrapper} onClick={dontClose}>
            <section className={styles.header_section}>
                <nav className={styles.container}>
                    <ul className={styles.header_nav_list + (navOpened ? 'opened' : '')}>
                        <li className={[styles.nav_item , styles.logo_item].join(' ') }>
                            <Link
                                href="/"
                                className={[styles.nav_link , styles.text_info].join(' ')}
                                onClick={navClick}
                            >
                                <Image src={logo} alt="آتیه" />
                            </Link>
                        </li>
                        {
                            menuList.map((menu, i) => (
                                <li key={i}
                                    className={[styles.nav_item , styles.text_info + (menuCat === menu?.id ? ' active_link' : '')].join(' ')}
                                >
                                    <span
                                        className={[styles.nav_link , styles.text_info].join(' ')}
                                        onClick={() => openMenu(menu?.id)}
                                    >
                                        <Link
                                            href={menu.link}
                                            onClick={navClick}
                                        >
                                            {menu?.title}
                                        </Link>
                                    </span>
                                </li>
                            ))
                        }
                        <li className={[styles.nav_item , styles.login_btn].join(' ')}>
                            <a className={[styles.btn , styles.btn_pill , styles.btn_danger].join(' ')} href="http://silver.atieh-broker.ir">
                               ثبت نام
                            </a>
                        </li>
                    </ul>
                    <div className={styles.left_side}>
                        <a className={[styles.btn , styles.btn_pill , styles.btn_danger].join(' ')} href="http://silver.atieh-broker.ir">
                        ثبت نام
                        </a>
                        <span className={styles.toggle_btn} onClick={toggleNav}>
                            <ReorderIcon />
                        </span>
                    </div>
                </nav>
              
            </section>
        </header>
    );
}