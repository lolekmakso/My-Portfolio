import "./style.css";

import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://www.instagram.com/lolekmakso/">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://twitter.com/?lang=ru">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/lolekmakso">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
