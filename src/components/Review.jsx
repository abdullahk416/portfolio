
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

/**
 * Components
 */
import SkillCard from "./SkillCard"; // Change to SkillCard for skills display

const skills = [
  {
    imgSrc: '/images/css.svg',
    label: 'CSS'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript'
  },
  {
    imgSrc: '/images/html.svg',
    label: 'HTML'
  },
  {
    imgSrc: '/images/sql.svg',
    label: 'SQL'
  },
  {
    imgSrc: '/images/java.svg', 
    label: 'Java'
  },
  {
    imgSrc: '/images/python.svg', 
    label: 'Python'
  },
  {
    imgSrc: '/images/c.svg', 
    label: 'C++'
  }
];

const Skills = () => {

  // Use gsap to create continuous scrolling effect
  useGSAP(() => {
    gsap.to('.scrub-slide', {
      x: '-100%', // Move the container 100% to the left
      repeat: -1, // Repeat the animation indefinitely
      ease: 'linear', // Set easing to linear for smooth constant movement
      duration: 20, // Duration to move across
    });
  });

  return (
    <section
      id="skills"
      className="section overflow-hidden"
    >
      <div className="container">

        {/* <h2 className="headline-2 mb-8 reveal-up">
          Skills
        </h2> */} 

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {skills.map(({ imgSrc, label }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills;
