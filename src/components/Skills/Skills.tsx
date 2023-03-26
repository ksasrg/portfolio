import React from 'react';
import { v1 } from 'uuid';
import Container from '../Container/Container';
import Skill from './Skill/Skill';
import style from './Skills.module.css'

const Skills = () => {
  const skills = [
    { id: v1(), title: 'React', logo: '' },
    { id: v1(), title: 'TS', logo: '' },
    { id: v1(), title: 'Redux', logo: '' },
  ]

  return (
    <section id='skills' className={style.body}>
      <Container>
        <div className={style.content}>
          <div className={style.title}>
            <span>Skills</span>
          </div>
          <div className={style.skills}>
            {skills.map(el => {
              return (
                <Skill
                  key={el.id}
                  title={el.title}
                />
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;


