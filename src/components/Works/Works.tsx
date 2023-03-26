import React from 'react';
import Container from '../Container/Container';
import Work from './Work/Work';
import style from './Works.module.css'

const Works = () => {
  return (
    <div id='works' className={style.body}>
      <Container>
        <div className={style.content}>
          <div className={style.title}>
            <span>Works</span>
          </div>
          <div className={style.works}>
            <Work />
            <Work />
            <Work />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Works;