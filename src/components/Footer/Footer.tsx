import React from 'react';
import Container from '../Container/Container';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div id='contacts' className={style.body}>
            <Container>
                <div className={style.content}>
                    <div className={style.title}>
                        <span>My Name</span>
                    </div>
                    <div className={style.items}>
                        <div className={style.item}></div>
                        <div className={style.item}></div>
                        <div className={style.item}></div>
                        <div className={style.item}></div>
                    </div>
                    <div className={style.copyright}>
                        2023 Copyright
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Footer;