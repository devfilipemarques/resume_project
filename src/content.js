import Nav from './components/nav';
import About from './components/about';
import Resume from './components/resume';

function Content() {
    return (
        <div className="main-content">
            <Nav/>
            <About/>
            <Resume/>
        </div>
    )
}
export default Content;