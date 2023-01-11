import './App.scss';
import { Section } from './Components/Parts/Content/main';
import { Header } from './Components/Parts/Header/header.jsx'
import { Nav, Navigation } from './Components/Parts/Navigation/nav';

function App() {
  return (
    <div className="App">
      <Header  
        cleantxt="Clean Up" 
        cleanudertxt="Hvad kan du gøre for at mindske din påvirkning af miljøet og naturen?"/>
        <Nav data={Navigation} /> 
        <Section/>
        
    </div>
  );
}

export default App;
