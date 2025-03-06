
import './About.scss';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <img className='about-img not-sr-only'
                        src={"/code.png"}
                        alt=""
                        id="about-img"
                    />
                    <div className="about-text">
                        <h3 className='text-3xl font-semibold tracking-tight'>A propos de moi</h3>

                        <p>
                            Après avoir obtenu mon titre professionnel de développeuse web et web mobile, je recherche une opportunité d&apos;alternance en tant que conceptrice d&apos;applications web. Mon objectif est de poursuivre mon apprentissage du développement et de mettre en pratique mes compétences dans une entreprise dynamique.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;