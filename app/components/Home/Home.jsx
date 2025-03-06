import "./Home.scss";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="content">
          <div className="hero-text">
            En recherche d&apos;alternance concepteur d&apos;application web.
            <p className="text-2xl text-slate-500">
              Hello 👋🏻 ! Moi c&apos;est Ludivine et je suis une développeuse
              fullstack basée dans la région{" "}
              <span className="font-bold gradient-on-text-heading">
                Lyonnaise.
              </span>
            </p>
          </div>
          <img
            src={"/Ludivine.jpg"}
            className="w-80 h-80 inline-block rounded-[50%] relative aria-hidden"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
