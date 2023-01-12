import './App.scss';
import { Section } from './Components/Parts/Content/main.jsx';
import {Footer } from './Components/Parts/Footer/footer.jsx';
import { Header } from './Components/Parts/Header/header.jsx'
import { Nav, Navigation } from './Components/Parts/Navigation/nav.jsx';

function App() {
  return (
    <div className="App">
      <Header  
        cleantxt="Clean Up" 
        cleanudertxt="Hvad kan du gøre for at mindske din påvirkning af miljøet og naturen?"/>
        <Nav data={Navigation} /> 
        <Section/>
        <Footer />
    </div>
  );
}

export default App;
