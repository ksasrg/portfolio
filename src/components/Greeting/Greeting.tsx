import React from 'react';
import Container from '../Container/Container';
import style from './Greeting.module.css'

const Greeting = () => {
  return (
    <div className={style.greeting}>
      <Container>
        <div className={style.content}>
          <div className={style.text}>
            <div>Hello</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error quia velit quidem mollitia minus ipsa sed, eaque provident harum.</p>
          </div>
          <div className={style.photo}></div>
        </div>
      </Container>
    </div>
  );
};

export default Greeting;