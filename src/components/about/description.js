import Experience from "../../assets/img/icon-experience.png";
import Projects from "../../assets/img/icon-projects.png";
import Education from "../../assets/img/icon-education.png";
import Certificate from "../../assets/img/icon-certificate.png";

function Description() {
    return (
        <section className="about-text">
            <p>
                Olá visitante , seja bem vindo ao meu curriculo digital =)</p>
            <p className="justify-text">Sou desenvolvedor com 3 anos de experiência com habilidades em React, Typescript, HTML5, CSS3, Javascript e Angular, além de integrar conhecimento em UX | UI com as ferramentas: Photoshop, Figma e xD. </p>
            <p className="justify-text">Abrangente conhecimento do processo de concepção de software, desde regras de negócio,
                lógica de programação e prototipagem até a estratégia de Marketing do produto
                programando diversos tipos de aplicações para os clientes, desde soluções em E-commerce, CRM e . Com foco em otimizar processos, reduzi o tempo de testes em 20%, sem perder qualidade. Na sua empresa, buscarei oportunidades semelhantes para otimizar processos.
            </p>
            <ul className="facts-list">
                <li className="facts-item">
                    <div className="facts-icon-box">
                        <img src={Experience} alt="Experiência Profissional" width="50" />
                    </div>
                    <div className="facts-content-box">
                        <h4 className="h4 facts-item-title">+3</h4>
                        <p className="facts-item-text">
                            Anos de <br />
                            Experiência
                        </p>
                    </div>
                </li>
                <li className="facts-item">
                    <div className="facts-icon-box">
                        <img src={Projects} alt="Projetos Completados" width="50" />
                    </div>
                    <div className="facts-content-box">
                        <h4 className="h4 facts-item-title">+30</h4>
                        <p className="facts-item-text">
                            Projetos <br />
                            Completados
                        </p>
                    </div>
                </li>
                <li className="facts-item">
                    <div className="facts-icon-box">
                        <img src={Education} alt="Cursos & Treinamentos" width="50" />
                    </div>
                    <div className="facts-content-box">
                        <h4 className="h4 facts-item-title">+18</h4>
                        <p className="facts-item-text">
                            Cursos & <br />Treinamentos
                        </p>
                    </div>
                </li>
                <li className="facts-item">
                    <div className="facts-icon-box">
                        <img src={Certificate} alt="Certificados" width="50" />
                    </div>
                    <div className="facts-content-box">
                        <h4 class="h4 facts-item-title">+5</h4>
                        <p className="facts-item-text">
                            Prêmios &<br />
                            Certificados
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    )
}
export default Description;