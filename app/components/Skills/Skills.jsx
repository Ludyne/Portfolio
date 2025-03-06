
export default function Skills() {
    const All = [
        {
            name: "html",
            icon: "/html-5.svg"
        },
        {
            name: "CSS",
            icon: "/css-3.svg"
        },
        {
            name: "JavaScript",
            icon: "/javascript.svg"
        },
        {
            name: "Sass",
            icon: "/sass.svg"
        },
        {
            name: "PostgreSQL",
            icon: "/postgresql.svg"
        },
        {
            name: "Sequelize",
            icon: "/sequelize.svg"
        },
        {
            name: "React",
            icon: "/react.svg"
        },
        {
            name: "Tailwindcss",
            icon: "/tailwindcss-icon.svg"
        },
        {
            name: "NodeJS",
            icon: "/nodejs-icon.svg"
        },
        {
            name: "Express",
            icon: "/express.svg"
        },
        {
            name: "Bootstrap",
            icon: "/bootstrap.svg"
        },
        {
            name: "WordPress",
            icon: "/wordpress-icon.svg"
        },

        
    ]

    return (

        <section className="container pt-[100px]">
            <h3 className="font-semibold text-3xl pt-6 mb-6" id="skills">Compétences</h3>
            <div className="flex flex-wrap justify-center items-stretch">
                {All.map((skill, index) => (
                    <div key={index} className="m-2 p-2 flex flex-col items-center">
                        <p>{skill.name}</p>
                        <img src={skill.icon} alt={skill.name} />
                    </div>
                ))}
            </div>
        </section>
    )
}
