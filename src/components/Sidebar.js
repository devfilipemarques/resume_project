import avatar from "../assets/img/filipereis.png";

import {
  IoChevronDown,
  IoMailOutline,
  IoPhonePortraitOutline,
  IoLogoFacebook,
  IoLocationOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoBehance,
  IoCalendarNumberOutline,
} from "react-icons/io5";

function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={avatar} alt="Filipe Reis" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Filipe Reis">
            Filipe Reis
          </h1>
          <p className="title">Frontend Developer</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <IoChevronDown className="ion-icon" />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline className="ion-icon" />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:devfilipemarques@gmail.com"
                className="contact-link"
              >
                devfilipemarques@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoPhonePortraitOutline className="ion-icon" />
            </div>

            <div className="contact-info">
              <p className="contact-title">WHATSAPP</p>

              <a
                href="https://api.whatsapp.com/send?phone=5582988433141&text=Ol%C3%A1%20Filipe%2C%20vim%20pelo%20seu%20curr%C3%ADculo%20digital.%20"
                className="contact-link"
              >
                (82) 98843.3141
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoCalendarNumberOutline className="ion-icon" />
            </div>

            <div className="contact-info">
              <p className="contact-title">Nascimento</p>

              <time datetime="1982-06-23">25 de Junho de 1995</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline className="ion-icon" />
            </div>

            <div className="contact-info">
              <p className="contact-title">Localização</p>

              <address>Maceió/AL - Brasil</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.facebook.com/filipemarqueez"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <IoLogoFacebook className="ion-icon" />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/devfilipemarques/"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <IoLogoLinkedin className="ion-icon" />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://github.com/devfilipemarques/"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <IoLogoGithub className="ion-icon" />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.instagram.com/devfilipemarques/"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoInstagram className="ion-icon" />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.behance.net/devfilipemarques/"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoBehance className="ion-icon" />
            </a>
          </li>
        </ul>
        <div className="copyright">Desenvolvido com <span>♥</span> por <a href="https://github.com/devfilipemarques">Filipe Reis</a></div>
      </div>
    </aside>
  );
}
export default Sidebar;
