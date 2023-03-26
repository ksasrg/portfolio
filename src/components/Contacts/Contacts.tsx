import React from 'react';
import Container from '../Container/Container';
import style from './Contacts.module.css'

const Contacts = () => {
    return (
        <div id='contacts' className={style.body}>
            <Container>
                <div className={style.content}>
                    <div className={style.title}>
                        <span>Контакты</span>
                    </div>
                    <form className={style.form}>
                        <input type="text" />
                        <input type="text" />
                        <textarea></textarea>
                        <button>Отправить</button>
                    </form>

                </div>
            </Container>
        </div>
    );
};

export default Contacts;