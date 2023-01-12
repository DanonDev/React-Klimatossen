import './nav.scss'
import './navmobile.scss'

const Navigation = [
    'START',
    'DIT CO2',
    'CLEAN UP',
    'TILMELD DIG'
];

const Nav = props => {
    return (
        <nav>
            <ul>
                {props.data.map((Navigation, key) => {
                    return (
                        <li key={key}>{Navigation}</li>
                    )
                })}
            </ul>
        </nav>
    )
}

export { Navigation, Nav }