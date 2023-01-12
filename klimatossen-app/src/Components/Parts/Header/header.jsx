import './header.scss'
import './headermobile.scss'
import logo from '../../images/KT-Logo.png'

const Header = props => {
    return (
        <header>
            <div className="top">
                <img src={logo} alt="Klima-Tossen" />
            </div>
            <div className='bottom'>
            <h2>{props.cleantxt}</h2>
            <p>{props.cleanudertxt}</p>
            </div>
        </header>
    )
}

export { Header } 