import {
    IoSchool
} from "react-icons/io5";

function Certificate() {
    return (
        <section className="timeline">
                    <div className="title-wrapper">
                        <div className="icon-box">
                            <IoSchool className="ion-icon" />
                        </div>

                        <h3 className="h3">Educação e treinamento</h3>
                    </div>

                    <ol className="timeline-list">
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">Análise e Desenvolvimento de Sistemas </h4>
                            <span>2022 — ATUALMENTE</span>
                            <p className="timeline-text">
                            FAN – Faculdade de Negócios
                            </p>
                        </li>
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">Vuejs</h4>
                            <span>2022 — ATUALMENTE</span>
                            <p className="timeline-text">
                            b7web
                            </p>
                        </li>
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">React</h4>
                            <span>2021 - 2022</span>
                            <p className="timeline-text">
                            Rocketseat
                            </p>
                        </li>
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">NLW – Flutter</h4>
                            <span>2021</span>
                            <p className="timeline-text">
                            Rocketseat
                            </p>
                        </li>
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">React.js Ninja</h4>
                            <span>2021</span>
                            <p className="timeline-text">
                            Udemy
                            </p>
                        </li>
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">UI | UX Designer</h4>
                            <span>2021</span>
                            <p className="timeline-text">
                            Design Circuit
                            </p>
                        </li>
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">UX/UI Design de Interface</h4>
                            <span>2021</span>
                            <p className="timeline-text">
                            Udemy
                            </p>
                        </li>
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">Laravel</h4>
                            <span>2020</span>
                            <p className="timeline-text">
                            Udemy
                            </p>
                        </li>
                    </ol>
                </section>
    )
}
export default Certificate;