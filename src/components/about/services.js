import HTML5 from '../../assets/svg/html5.svg'
import CSS3 from '../../assets/svg/css3.svg'
import NODE from '../../assets/svg/nodejs.svg'
import REACT from '../../assets/svg/react.svg'
import TYPESCRIPT from '../../assets/svg/typescript.svg'
import LARAVEL from '../../assets/svg/laravel.svg'
import ANGULAR from '../../assets/svg/angular.svg'

function Services() {
    return (
        <section className="service">
            <h3 className="h3 service-title">Experiência em:</h3>
            <ul className="service-list">
                <table cellspacing="12" cellpadding="12" width="100%">
                    <tr>
                        <td className="service-logos-space" align="center">
                            <img src={HTML5} width={80} /><p className='service-item-text'>HTML5</p>
                        </td>
                        <td className="service-logos-space" align="center">
                            <img src={CSS3} width={80} /><p className='service-item-text'>CSS3</p>
                        </td>
                        <td className="service-logos-space" align="center">
                            <img src={TYPESCRIPT} width={80} /><p className='service-item-text'>Typescript</p>
                        </td>
                        <td className="service-logos-space" align="center">
                            <img src={NODE} width={80} /><p className='service-item-text'>NodeJS</p>
                        </td>
                        <td className="service-logos-space" align="center">
                            <img src={REACT} width={80} /><p className='service-item-text'>React</p>
                        </td>
                        <td className="service-logos-space" align="center">
                            <img src={LARAVEL} width={80} /><p className='service-item-text'>Laravel</p>
                        </td>
                        <td className="service-logos-space" align="center">
                            <img src={ANGULAR} width={80} /><p className='service-item-text'>Angular</p>
                        </td>
                    </tr>
                </table>
            </ul>
        </section>
    )
}
export default Services;