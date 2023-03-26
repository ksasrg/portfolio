import React from 'react';
import Container from '../Container/Container';
import style from './Header.module.css'

const Header = () => {
    return (
        <header >
            <Container>
                <div className={style.header}>
                    <nav>
                        <a href="#">Главная</a>
                        <a href="#skills">Скиллы</a>
                        <a href="#works">Работы</a>
                        <a href="#contacts">Контакты</a>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;