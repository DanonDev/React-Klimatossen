import './main.scss'
import './mainmobile.scss'

import Dump from '../../images/Image-Dump.jpg'
import Spacer4 from '../../images/Spacer-04.png'


import Organisk from '../../images/Gallery-Thumb-Organic-No-overlay.jpg'
import OrganiskTXT from '../../images/Gallery-Thumb-Organic.jpg'

import Paper from '../../images/Gallery-Thumb-Paper-No-overlay.jpg'
import PaperTXT from '../../images/Gallery-Thumb-Paper.jpg'

import Textile from '../../images/Gallery-Thumb-Textile-No-overlay.jpg'
import TextileTXT from '../../images/Gallery-Thumb-Textile.jpg'

import Metals from '../../images/Gallery-Thumb-Metals-No-overlay.jpg'
import MetalsTXT from '../../images/Gallery-Thumb-Metals.jpg'

import Plastics from '../../images/Gallery-Thumb-Plastics-No-overlay.jpg'
import PlasticsTXT from '../../images/Gallery-Thumb-Plastics.jpg'

import Glass from '../../images/Gallery-Thumb-Glass-No-overlay.jpg'
import GlassTXT from '../../images/Gallery-Thumb-Glass.jpg'




const Section = () => {
    return (
        <>
        {/* FIRST SECTION */}
        <section className="firstsection">
            <h2>Alle genererer affald</h2>
        {/* SECOND SECTION */}
            <p>"I 2016 genererede hver eneste borger i EU, ung som gammel 482kg affald pr. år. I Danmark producerede hver dansker samme år ca 777kg pr indbygger. Hvert eneste stykke affald, der fjernes fra naturen, er et skridt i den rigtige retning"</p>
        </section>
        <section className='secondsection'>
            <h1>NEDBRYDNING AF AFFALD</h1>
            <section className='grid'>
            <section className='secondsectiontext'>
                <h3>Hvad er nedbrydningstid?</h3>
                <p>Når affald smides i naturen, begynder det at blive nedbrudt til mindre dele. Nedbrydningstiden er den tid,
                det tager for en ting at forsvinde i naturen. Nogle ting forsvinder hurtigt, andre ting kan ligge i mange
                hundrede år.
                </p>
                <p>Organisk materiale, ting, som oftest er naturligt forekommende, bliver nedbrudt på få uger. Det kan f.eks.
                være æbleskrog, hundeefterladenskaber, døde dyr etc. Uorganisk materiale, ting som oftest ikke er
                naturligt forekommende, ligger derimod i mange hundrede år. Det kan f.eks. være plastik, glas og metalstykker.
                </p>
                <p>Nedbrydningen af organisk materiale sker ved, at bakterier, fluer, larver, myrer og andre insekter begyn-
                der at s    pise af affaldet og dermed enten findeler det eller omdanner det til andre produkter. Bakterier og
                insekter     kan nemt spise/nedbryde organisk materiale, og det er grunden til, at det forsvinder hurtigt.
                </p>
                <p>Bakterier og insekter nedbryder derimod ikke plastik, glas og metal. De fleste uorganiske materialer ned-
                brydes overvejende gennem forvitring af vejr og vind, og da det er en langvarig proces, ligger de material-
                er mange år i naturen.
                </p>
                <h3>Eksempel:</h3>
                <p>
                - Organisk materale: Kartoffelskræller, frugt eller madvarer: Fra 2 til 5 uger<br></br>
                - Plastflasker og bæreposer: Op til 500 år<br></br>
                - Ispinde, (Ubehandlet træ): Op til 10 år<br></br>
                - Tekstiler: (Afhængigt af type. Eks. Bomuld / Polyester) Fra 2 til 5 uger
                </p> 
            </section>
            <img src={Dump} alt="Dump"></img>
        </section>
            </section>
        <img className="spacer4" src={Spacer4} alt=""></img>
        {/* THIRD SECTION */}
        <section className='thirdsection'>
            <h1>NEDBRYDNINGS TIDER FOR AFFALD</h1>
            <section className='gridsecond'>
                <section className='images'>
                    <div className='picture'>
                        <img className='image1'src={Organisk} alt=""></img>
                        <img className='image2'src={OrganiskTXT} alt=""></img>
                    </div>
                    <div className='picture'>
                        <img className='image1'src={Paper} alt=""></img>
                        <img className='image2'src={PaperTXT} alt=""></img>
                    </div>
                    <div className='picture'>
                        <img className='image1'src={Textile} alt=""></img>
                        <img className='image2'src={TextileTXT} alt=""></img>
                    </div>
                    <div className='picture'>
                        <img className='image1'src={Metals} alt=""></img>
                        <img className='image2'src={MetalsTXT} alt=""></img>
                    </div>
                    <div className='picture'>
                        <img className='image1'src={Plastics} alt=""></img>
                        <img className='image2'src={PlasticsTXT} alt=""></img>
                    </div>
                    <div className='picture'>
                        <img className='image1'src={Glass} alt=""></img>
                        <img className='image2'src={GlassTXT} alt=""></img>
                    </div>
                </section>
            </section>
        </section>
        </>
    )
}

export { Section }