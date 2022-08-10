import Description from './about/description';
import Services from './about/services';

function About() {
    return (
        <article className="about active" data-page="about">
            <header>
                <h2 className="h2 article-title">Sobre</h2>
            </header>
            <Description/>
            <Services/>
        </article>
    )
}
export default About;