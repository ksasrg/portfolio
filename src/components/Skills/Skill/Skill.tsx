import React from 'react';
import style from './Skill.module.css'

const Skill = () => {
    return (
        <div className={style.skill}>
            <div className={style.logo}>img</div>
            <div className={style.title}>React</div>
            <div className={style.text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima repellat odit suscipit in, ipsa sint.
            </div>
        </div>
    );
};

export default Skill;