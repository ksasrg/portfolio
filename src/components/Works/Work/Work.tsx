import React from 'react';
import style from './Work.module.css'

const Work = () => {
    return (
        <div className={style.body}>
            <div className={style.work}>
                <button>Смотреть</button>
            </div>
            <div className={style.title}>Project</div>
            <div className={style.text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima repellat odit suscipit in, ipsa sint.
            </div>
        </div>
    );
};

export default Work;