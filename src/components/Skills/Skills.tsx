import React from 'react';
import Container from '../Container/Container';
import Skill from './Skill/Skill';
import style from './Skills.module.css'

const Skills = () => {
  return (
    <div id='skills' className={style.body}>
      <Container>
        <div className={style.content}>
          <div className={style.title}>
            <span>Skills</span>
          </div>
          <div className={style.skills}>
            <Skill />
            <Skill />
            <Skill />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;