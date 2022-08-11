import {
    IoBookOutline
} from "react-icons/io5";

function Work() {
    return (
        <section className="timeline">
            <div className="title-wrapper">
                <div className="icon-box">
                    <IoBookOutline className="ion-icon" />
                </div>
                <h3 className="h3">Experiência de Trabalho</h3>
            </div>
            <ol className="timeline-list">
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Desenvolvedor Frontend Junior em <b className="title-business">Spot Metrics</b></h4>
                    <span>2021 — 2022</span>
                    <p className="timeline-text">
                        •	Integrei a equipe de Frontend na participação do sistema mOS na linguagem ReactJS TypeScript utilizando componentes como AntDesign e Cube;<br />
                        •	Criei e desenvolvi layout para o sistema com base no UX e UI como telas de cadastro de serviços com automatização e regra de persona.<br />
                        •	Garanti qualidade no trabalho de melhoria continua do projeto.<br />
                        •	Integração ao sistema mOS com API RESTfull;<br />
                        •	Trabalhei na documentação do sistema com Redoc;<br />
                        •	Desenvolvi o site da <a href="https://spotmetrics.com/" target={'_blank'} rel="noreferrer">SpotMetrics</a> e <a href="https://spotmetrics.com/spoton" target={'_blank'} rel="noreferrer">SpotON</a> atual com tecnologias como HTML5, PHP, CSS3 e Javascript;
                    </p>
                </li>
            </ol>
            <ol className="timeline-list">
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Web Developer em <b className="title-business">OFM Systems</b></h4>
                    <span>2021 — 2021</span>
                    <p className="timeline-text">
                        •	Criar e desenvolvedor Site em Wordpress e Plugins;<br />
                        •	Desenvolvedor Fullstack. Responsável pela entrega e desenvolvimento de soluções web.<br />
                        •	Viabilizar um ecossistema ágil e colaborativo entre designers e desenvolvedores;<br />
                        •	Desenvolver documentação da solução da empresa;<br />
                        •	RD Station criação de landing pages e e-mail marketing;<br />
                        •	Experiência com Oracle Apex e React;
                    </p>
                </li>
            </ol>
            <ol className="timeline-list">
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Programador Jr em <b className="title-business">ID5 Soluções</b></h4>
                    <span>2020 — 2021</span>
                    <p className="timeline-text">
                        •	Desenvolvedor Plugins em Wordpress solicitados pelo tech leader;<br />
                        •	Acompanhar e reportar indicadores de crescimento de problemas causados por algum erro de programação;<br />
                        •	Acompanhar e desenvolvedor, documentação adequada para os protudos lançados no mercado e atribuir para áreas de atuação;
                    </p>
                </li>
            </ol>
            <ol className="timeline-list">
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Estágiario  em <b className="title-business">Equatorial Energia</b></h4>
                    <span>2019 — 2020</span>
                    <p className="timeline-text">
                        •	Atuar no suporte de melhorias para usuarios do sistema RAIO E SOMOS;<br />
                        •	Suporte para colaboradores que utilizam SAP e TOTVS;

                    </p>
                </li>
            </ol>
            <ol className="timeline-list">
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Web Designer <b className="title-business">FAN - Faculdade de Administração e Negócios</b></h4>
                    <span>2018 — 2019</span>
                    <p className="timeline-text">
                        •	Criação de peças para Redes Sociais<br />
                        •	Desenvolvimento de Landing Pages através da plataforma RDStation;<br />
                        •	Desenvolvimento de Landing Pages em HTML e CSS;
                    </p>
                </li>
            </ol>
        </section>
    )
}
export default Work;