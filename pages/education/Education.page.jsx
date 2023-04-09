import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import BannerSection from '../../components/education/BannerSection';
import BlogCard from '../../components/education/BlogCard';
import FilterCard from '../../components/education/FilterCard';
import SortFilter from '../../components/education/SortFilter';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import styles from './education.module.scss'
import Tag from '../../components/tag/Tag';


import { Checkbox, FormControlLabel } from '@mui/material';

const bannerSectionData = {
    title1: 'آموزش' ,
    title2: 'کارگزاری آتیه',
};
const breadcrumbData = [
    {
        title: 'صفحه اصلی',
        link: '/',
    },
    {
        title: 'آموزش',
    },
];

const deepCopy = data => JSON.parse(JSON.stringify(data));


export default function Education({ cardList, categoryItems, levelItems, sortItemList }) {

    const [tagList, setTagList] = useState([
        'دوره آموزشی',
        'مقاله',
        'فیلم',
        'پادکست',
    ]);
    const [levelList, setLevelState] = useState(deepCopy(levelItems));
    const [categoryList, setCategoryState] = useState(deepCopy(categoryItems));

    const categoryChanges = (e, i) => {
        const data = deepCopy(categoryList);
        data[i].checked = e.target.checked
        setCategoryState(data);
    }

    const levelChanges = (e, i, ) => {
        const data = deepCopy(levelList);
        data[i].checked = e.target.checked
        setLevelState(data);
    }

    const removeTag = i => {
        const data = deepCopy(levelList);
        data.splice(i, 1);
        setTagList(data);
    }

    return (
        <>
         <HelmetProvider >
         <Helmet title="آموزش"></Helmet>
         </HelmetProvider>
            
            <BannerSection data={bannerSectionData}/>
            <section className={styles.breadcrumb_section}>
                <div className={styles.container}>
                    <Breadcrumb itemList={breadcrumbData}/>
                </div>
            </section>
            <section className={styles.education_card_section}>
                <div className={styles.container}>
                    <h3 className={styles.section_title}>
                        روی خودمان سرمایه گذاری کنیم
                    </h3>
                    <div className={styles.card_list_filter}>
                        <div className={styles.card_filter_side}>
                            <FilterCard title="فیلتر های اعمال شده">
                                {
                                    tagList.map((tag, i) => (

                                        <Tag
                                            key={i}
                                            closable
                                            title={tag}
                                            setClose={() => removeTag(i)}
                                        />
                                    ))
                                }
                            </FilterCard>
                            <FilterCard title="دسته بندی">
                                {
                                    categoryList.map((item, i) => (
                                        <FormControlLabel
                                            key={i}
                                            label={item.label}
                                            className={styles.ch_filter_item}
                                            control={
                                                <Checkbox
                                                    color="primary"
                                                    name={item.name}
                                                    checked={item.checked}
                                                    onChange={e => categoryChanges(e, i)}
                                                />
                                            }
                                        />
                                    ))
                                }
                            </FilterCard>
                            <FilterCard title="سطح مطالب">
                                {
                                    levelList.map((item, i) => (
                                        <FormControlLabel
                                            key={i}
                                            label={item.label}
                                            className={styles.ch_filter_item}
                                            control={
                                                <Checkbox
                                                    color="primary"
                                                    name={item.name}
                                                    checked={item.checked}
                                                    onChange={e => levelChanges(e, i)}
                                                />
                                            }
                                        />
                                    ))
                                }
                            </FilterCard>
                        </div>
                        <div className={styles.card_list_side}>
                            <SortFilter itemList={sortItemList}/>
                            {
                                cardList.map((card, i) => (
                                    <BlogCard key={i} cardData={card}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
