import React from 'react';
import Container from '../Container/Container';
import style from './Hire.module.css'

const Hire = () => {
    return (
        <section className={style.body}>
            <Container>
                <div className={style.content}>
                    <div className={style.title}>
                        <span>Рассматриваю варианты удаленной работы</span>
                    </div>
                    <div className={style.hire}>
                        <button>Hire me</button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hire;