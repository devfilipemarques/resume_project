import {
    IoSchool
} from "react-icons/io5";

function Certificate() {
    return (
        <section class="timeline">
                    <div class="title-wrapper">
                        <div class="icon-box">
                            <IoSchool className="ion-icon" />
                        </div>

                        <h3 class="h3">Educação e treinamento</h3>
                    </div>

                    <ol class="timeline-list">
                        <li class="timeline-item">
                            <h4 class="h4 timeline-item-title">Análise e Desenvolvimento de Sistemas </h4>
                            <span>2022 — ATUALMENTE</span>
                            <p class="timeline-text">
                            FAN – Faculdade de Negócios
                            </p>
                        </li>
                        <li class="timeline-item">
                            <h4 class="h4 timeline-item-title">Vuejs</h4>
                            <span>2022 — ATUALMENTE</span>
                            <p class="timeline-text">
                            b7web
                            </p>
                        </li>
                        <li class="timeline-item">
                            <h4 class="h4 timeline-item-title">React</h4>
                            <span>2021 - 2022</span>
                            <p class="timeline-text">
                            Rocketseat
                            </p>
                        </li>
                        <li class="timeline-item">
                            <h4 class="h4 timeline-item-title">NLW – Flutter</h4>
                            <span>2021</span>
                            <p class="timeline-text">
                            Rocketseat
                            </p>
                        </li>
                        <li class="timeline-item">
                            <h4 class="h4 timeline-item-title">React.js Ninja</h4>
                            <span>2021</span>
                            <p class="timeline-text">
                            Udemy
                            </p>
                        </li>
                        <li class="timeline-item">
                            <h4 class="h4 timeline-item-title">UI | UX Designer</h4>
                            <span>2021</span>
                            <p class="timeline-text">
                            Design Circuit
                            </p>
                        </li>
                        <li class="timeline-item">
                            <h4 class="h4 timeline-item-title">UX/UI Design de Interface</h4>
                            <span>2021</span>
                            <p class="timeline-text">
                            Udemy
                            </p>
                        </li>
                        <li class="timeline-item">
                            <h4 class="h4 timeline-item-title">Laravel</h4>
                            <span>2020</span>
                            <p class="timeline-text">
                            Udemy
                            </p>
                        </li>
                    </ol>
                </section>
    )
}
export default Certificate;