import Experience from "../../assets/img/icon-experience.png";
import Projects from "../../assets/img/icon-projects.png";
import Education from "../../assets/img/icon-education.png";
import Certificate from "../../assets/img/icon-certificate.png";

function Description() {
    return (
        <section className="about-text">
            <p>
                Olá visitante , seja bem vindo ao meu curriculo digital =)</p>
            <p className="justify-text">Sou desenvolvedor com mais de 5 anos de experiência, iniciei minha carreira como Web Designer onde começei a desenvolver tecnicas de UI e UX criando layouts com base no sistema de pesquisa de usabilidade. Tendo em vista a necessidade de criar layouts também em HTML, CSS e Javascript comecei a desenvolver know hall para as tecnicas básicas da programação assim como estrutura do projeto até a parte de clean code "Código Limpo". Minhas facilidades estão nas linguagens HTML5, CSS3, Javascript, React Native, Mysql, ReactJs Typescript, StyledComponents, PostegreSQL, NodeJs, Laravel e Angular, além de integrar conhecimento em API, UX | UI com as ferramentas: Photoshop, Figma e XD. </p>
            <p className="justify-text">Estudante de Análise e Desenvolvimento de Sistemas na FAN - Faculdade de Administração e Negócios conveniada FGV em Maceió/AL aprendi conceitos como POO, metodologias ágeis e afins. Meu conhecimento abrange desde do processo de concepção de software, desde regras de negócio,
                lógica de programação e prototipagem até a estratégia de Marketing do produto
                programando diversos tipos de aplicações para os clientes, desde soluções em E-commerce, CRM, soluções fiscais e tributárias. Com foco em otimizar processos, reduzi o tempo de testes em 20%, sem perder qualidade. Na sua empresa, buscarei oportunidades semelhantes para otimizar processos.
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