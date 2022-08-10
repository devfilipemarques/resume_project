import Description from './about/description';

function About() {
    return (
        <article className="about active" data-page="about">
            <header>
                <h2 className="h2 article-title">Sobre</h2>
            </header>
            <Description/>
        </article>
    )
}
export default About;