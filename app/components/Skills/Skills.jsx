export default function Skills() {
  const All = [
    {
      name: "html",
      icon: "/html-5.svg",
    },
    {
      name: "CSS",
      icon: "/css-3.svg",
    },
    {
      name: "JavaScript",
      icon: "/javascript.svg",
    },
    {
      name: "Sass",
      icon: "/sass.svg",
    },
    {
      name: "PostgreSQL",
      icon: "/postgresql.svg",
    },
    {
      name: "Sequelize",
      icon: "/sequelize.svg",
    },
    {
      name: "React",
      icon: "/react.svg",
    },
    {
      name: "Tailwindcss",
      icon: "/tailwindcss-icon.svg",
    },
    {
      name: "NodeJS",
      icon: "/nodejs-icon.svg",
    },
    {
      name: "Express",
      icon: "/express.svg",
    },
    {
      name: "Bootstrap",
      icon: "/bootstrap.svg",
    },
    {
      name: "WordPress",
      icon: "/wordpress-icon.svg",
    },
  ];

  return (
    <section className="container pt-[100px]">
      <h3 className="font-semibold text-3xl pt-6 mb-6" id="skills">
        Compétences
      </h3>
      <div className="relative m-auto w-[500px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*10)] gap-8 ">
          {All.map((skill, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center "
              key={index}
            >
              <img src={skill.icon} alt={skill.name} className="w-24 h-24" />
            </div>
          ))}
          {All.map((skill, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center"
              key={`duplicate-${index}`}
            >
              <img src={skill.icon} alt={skill.name} className="w-24 h-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
