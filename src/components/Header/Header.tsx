import React from 'react';
import Container from '../Container/Container';
import style from './Header.module.css'

const Header = () => {
    return (
        <header >
            <Container>
                <div className={style.header}>
                    <nav>
                        <a href="">Главная</a>
                        <a href="">Скиллы</a>
                        <a href="">Работы</a>
                        <a href="">Контакты</a>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;