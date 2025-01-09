
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/crypto.png',
    title: 'Cryptocurrency Landing Website',
    tags: ['CoinGecko API', 'JavaScript/HTML/CSS', 'Front End Development'],
    projectLink: 'https://abdullahk416.github.io/Crypto-Landing-Page/'
  },
  {
    imgSrc: '/images/weatherapp.png',
    title: 'Weather App',
    tags: ['OpenWeatherMap API', 'JavaScript/HTML/CSS', 'Frontend/Backend'],
    projectLink: 'https://abdullahk416.github.io/Weather-App/'
  },
  {
    imgSrc: '/images/todo.png',
    title: 'To-Do List',
    tags: ['Data Handling', 'JavaScript/HTML/CSS', 'Frontend/Backend'],
    projectLink: 'https://abdullahk416.github.io/To-Do-List-App/'
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My Projects
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work
