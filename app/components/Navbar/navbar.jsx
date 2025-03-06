import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

// import './navbar.scss'
import { useState, useEffect } from "react";

function Header() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [isLargeScreen, setLargeScreen] = useState(false);
  const handleClick = () => {
    setNavbarOpen((open) => !open);
  };

  useEffect(() => {
    // Vérifier la taille de l'écran uniquement côté client
    const handleResize = () => {
      const isLargeScreenCurrent = window.innerWidth >= 900;
      setLargeScreen(isLargeScreenCurrent);
      if (isLargeScreenCurrent) {
        setNavbarOpen(true);
      } else {
        setNavbarOpen(false);
      }
    };

    // Exécuter une fois au montage
    handleResize();

    // Ajouter l'écouteur d'événement
    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur d'événement
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <span className="nav__logo-name">Ludivine</span>
        </a>
        <div
          className={`nav__buttons ${
            isNavbarOpen || isLargeScreen ? "active" : ""
          }`}
          onClick={handleClick}
        >
          {isNavbarOpen ? (
            <IoClose className="nav__close" />
          ) : (
            <GiHamburgerMenu className="nav__toggle not-sr-only" />
          )}
        </div>

        <div
          className={`nav__menu ${
            isNavbarOpen || isLargeScreen ? "show-menu" : ""
          }`}
        >
          <ul
            className={`nav__list ${isNavbarOpen ? "nav__list--open" : ""}`}
            onClick={handleClick}
          >
            <li className="nav__item">
              <a className="nav__link" href="#about">
                A propos
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#projects">
                Projets
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#skills">
                Compétences
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="#cv"
                rel="noreferrer"
                target="_blank"
                onClick={handleClick}
              >
                CV
              </a>
            </li>
          </ul>
          <div className="nav__buttons" onClick={handleClick}>
            <IoClose className="nav__close aria-hidden" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
