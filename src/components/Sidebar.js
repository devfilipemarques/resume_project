import avatar from '../assets/img/filipereis.png';

import { IoChevronDown, IoMailOutline, IoPhonePortraitOutline, IoLogoFacebook, IoLocationOutline, IoLogoLinkedin, IoLogoGithub, IoLogoTwitter, IoLogoInstagram, IoLogoBehance} from "react-icons/io5";

function Sidebar() {
    return (
        <aside classNameName="sidebar" data-sidebar>
        <div classNameName="sidebar-info">
          <figure className="avatar-box">
            <img
              src={avatar}
              alt="Filipe Reis"
              width="80"
            />
          </figure>
          <div className="info-content">
            <h1 className="name" title="Filipe Reis">
              Filipe Reis
            </h1>
            <p className="title">Frontend Developer</p>
          </div>
          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>
            <IoChevronDown className='ion-icon'/>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <IoMailOutline className='ion-icon'/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:alisamir.dev@gmail.com" className="contact-link">
                  Lorem ipsum
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
              <IoPhonePortraitOutline className='ion-icon'/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Telefone</p>

                <a href="tel:+201114181442" className="contact-link">
                  {" "}
                  Lorem ipsum
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Nascimento</p>

                <time datetime="1982-06-23"> Lorem ipsum</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <IoLocationOutline className='ion-icon'/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Localização</p>

                <address>Cairo, Egypt</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a
                href="https://www.facebook.com/Ali.Samir.Ali.Zaki"
                target="_blank"
                className="social-link"
                rel="noreferrer"
              >
                <IoLogoFacebook className='ion-icon'/>
              </a>
            </li>

            <li className="social-item">
              <a
                href="https://www.linkedin.com/in/ali-samir-ali/"
                target="_blank"
                className="social-link"
                rel="noreferrer"
              >
                <IoLogoLinkedin className='ion-icon'/>
              </a>
            </li>

            <li className="social-item">
              <a
                href="https://github.com/alisamirali"
                target="_blank"
                className="social-link"
                rel="noreferrer"
              >
                <IoLogoGithub className='ion-icon'/>
              </a>
            </li>

            <li className="social-item">
              <a
                href="https://twitter.com/Ali_Samir_21"
                target="_blank"
                className="social-link"
                rel="noreferrer"
              >
                <IoLogoTwitter className='ion-icon'/>
              </a>
            </li>

            <li className="social-item">
              <a
                href="https://www.instagram.com/eng.ali_samir/"
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoInstagram className='ion-icon'/>
              </a>
            </li>

            <li className="social-item">
              <a
                href="https://www.behance.net/alisamirali"
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoBehance className='ion-icon'/>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    )
}
export default Sidebar;