import './footer.scss'
// import FotImg from '../../images/Logo.png'

const Footer = () => {
    return(
        <section className="mrfooter">
            <div className='leftside'>
            <h2 className='mrh2'>KlimaTossen NPO</h2>
                <p>Vestebrogade 92<br></br>
                    9000 Aalborg<br></br>
                    info@klima-tossen.dk<br></br>
                    9922 3344(Åben man - fre: 08.00 - 16.00)
                </p><br></br>
                <h2>SAMARBEJSPARTNERE:</h2>
                <p className='link'>https://www.dn.dk/</p>
                <p className='link'>https://www.miljoeportal.dk</p>
                <h1>KLIMA<span>TOSSEN</span></h1>
                {/* <img src={FotImg} alt='Logo'></img> */}
            </div>
            <div className='rightside'>
                <h2>Ja tak! Jeg vil gerne høre mere.</h2>
                <form>
                    <input type="text" placeholder='Fulde navn'/>
                    <input type="text" placeholder='Hjem by'/>
                    <input type="email" placeholder='Email adresse'/>
                    <input type="number" placeholder='Telefon nummer'/>
                    <div>
                        <label>Få en samtale med Klimatossen</label>
                        <input type="checkbox"/>
                    </div>
                    <div>
                        <label>Modtag Nyhedsbrev</label>
                        <input type="checkbox"/>
                    </div>
                    <button>Send</button>
                </form>
            </div>
        </section>
    )
}

export { Footer }