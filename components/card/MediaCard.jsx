import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "../home/style/slide-card.module.scss";
import Image from 'next/image'

export default function MediaCard({title,src,description,link}) {
  return (
    <div className={styles.slider_card_container}>
    <Card sx={{ maxWidth: 345,maxHeight:345,}}  className={styles.card}>
    <figure className={styles.card_banner}>
      <Image
                    src={src}
                    alt={title}
                    className={styles.cardImg}
                />
                </figure>
      <CardContent className={styles.card_content}>
    
               
        <Typography gutterBottom variant="h5" component="div" className={styles.card_heading}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className={styles.card_description}>
          {description}
        </Typography>
     
      </CardContent>
      <CardActions>
        <Button size="small">more</Button>
       
      </CardActions>
    </Card>
    </div>
  );
}

