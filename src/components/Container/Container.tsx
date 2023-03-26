import React, { FC } from 'react';
import style from './Container.module.css'

type PropsType = {
    children: React.ReactNode
}

const Container: FC<PropsType> = ({ children }) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
};

export default Container;