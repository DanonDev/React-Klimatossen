const Header = props => {
    return (
        <header>
            <h1>KLIMA<span>TOSSEN</span></h1>
            <p>{props.pageundertxt}</p>
            <h2>{props.cleantxt}</h2>
            <p class="clean">{props.cleanudertxt}</p>
        </header>
    )
}

export default Header