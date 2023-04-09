import { useState, useRef } from 'react';
import playIcon from '@assets/img/play.svg';
import styles from './style/player.less';
import Image from 'next/image'

export default function VideoTutorial(props) {

    const video = useRef(null);
    const [ctrl, setCtrl] = useState(false);

    const playVideo = () => {
        setCtrl(true);
        video.current.play();
    }

    const pauseVideo = () => {
        setCtrl(false);
    }

    return (
        <div className={styles.player_container + props?.className}>
            <video
                onPause={pauseVideo}
                controls={ctrl}
                {...props}
                ref={video}>
            </video>
            {
                ctrl ? null :
                <Image
                    alt="play"
                    src={playIcon}
                    className={styles.play_btn}
                    onClick={playVideo}
                />
            }
        </div>
    );
}
