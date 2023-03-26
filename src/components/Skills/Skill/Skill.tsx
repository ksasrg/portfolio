import React, { FC } from 'react';
import style from './Skill.module.css'

type PropsType = {
    title: string
}

const Skill: FC<PropsType> = ({ title }) => {
    return (
        <div className={style.skill}>
            <div className={style.logo}>img</div>
            <div className={style.title}>{title}</div>
            <div className={style.text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima repellat odit suscipit in, ipsa sint.
            </div>
        </div>
    );
};

export default Skill;